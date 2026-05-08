"use client";

import { useEffect, useState } from "react";

import {
  useFieldArray,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import type { SpendFormValues } from "@/schemas/spend";

import { spendFormSchema } from "@/schemas/spend";

import {
  loadSpendDraft,
  saveSpendDraft,
} from "@/lib/storage/spend-draft";

import { SpendEntryRow } from "./spend-entry-row";

import { Button } from "@/components/ui/button";

interface Props {
  onSubmit: (
    values: SpendFormValues
  ) => void | Promise<void>;
}

const DEFAULT_ENTRY = {
  tool: "Cursor" as const,
  plan: "",
  monthlySpend: 20,
  seats: 1,
  teamSize: 1,
  primaryUseCase: "",
};

export function SpendForm({
  onSubmit,
}: Props) {
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const form =
    useForm<SpendFormValues>({
      resolver: zodResolver(
        spendFormSchema
      ),

      defaultValues: {
        entries: [DEFAULT_ENTRY],
      },

      mode: "onChange",

      reValidateMode: "onChange",
    });

  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    formState,
  } = form;

  const { isValid } = formState;

  const { fields, append, remove } =
    useFieldArray({
      control,
      name: "entries",
    });

  useEffect(() => {
    const saved = loadSpendDraft();

    if (saved?.entries?.length) {
      reset(saved);
    }
  }, [reset]);

  const watchedValues = watch();

  useEffect(() => {
    saveSpendDraft(watchedValues);
  }, [watchedValues]);

  async function handleFormSubmit(
    values: SpendFormValues
  ) {
    try {
      setIsSubmitting(true);

      console.log(
        "VALID FORM:",
        values
      );

      await onSubmit(values);
    } catch (error) {
      console.error(
        "SUBMIT ERROR:",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(
        handleFormSubmit,
        (errors) => {
          console.log(
            "FORM ERRORS:",
            errors
          );
        }
      )}
      className="space-y-6 rounded-3xl border bg-card p-6 shadow-sm"
    >
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          AI Spend Inputs
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Add your AI tool subscriptions and
          usage details to identify redundant
          spend, unused seats, and optimization
          opportunities.
        </p>
      </div>

      {/* GLOBAL FORM ERROR */}
      {!isValid && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm text-red-600">
            Please complete all required fields
            before analyzing spend.
          </p>
        </div>
      )}

      {/* FORM ENTRIES */}
      <div className="space-y-4">
        {fields.map((field, index) => (
          <SpendEntryRow
            key={field.id}
            index={index}
            register={register}
            errors={formState.errors}
            canRemove={fields.length > 1}
            onRemove={() =>
              remove(index)
            }
          />
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button
          type="button"
          variant="outline"
          className="h-10"
          onClick={() =>
            append(DEFAULT_ENTRY)
          }
        >
          Add Tool
        </Button>

        <Button
          type="submit"
          disabled={
            isSubmitting || !isValid
          }
          className="h-10 min-w-[160px] bg-foreground text-background shadow-sm hover:opacity-90"
        >
          {isSubmitting
            ? "Analyzing..."
            : "Analyze Spend"}
        </Button>
      </div>
    </form>
  );
}