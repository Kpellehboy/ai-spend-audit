"use client";

import { useEffect, useState } from "react";

import {
  useFieldArray,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  spendFormSchema,
  type SpendFormValues,
} from "@/schemas/spend";

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

const DEFAULT_ENTRY: SpendFormValues["entries"][0] =
  {
    tool: "Cursor",
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
      resolver:
        zodResolver(spendFormSchema),

      defaultValues: {
        entries: [DEFAULT_ENTRY],
      },

      mode: "onChange",
    });

  const {
    control,
    register,
    watch,
    handleSubmit,
    reset,
    formState,
  } = form;

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

      await onSubmit(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(
        handleFormSubmit
      )}
      className="space-y-6 rounded-3xl border bg-card p-6 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          AI Spend Inputs
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Add your AI subscriptions and usage
          information to identify redundant
          spend and optimization opportunities.
        </p>
      </div>

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

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append(DEFAULT_ENTRY)
          }
        >
          Add Tool
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Analyzing..."
            : "Analyze Spend"}
        </Button>
      </div>
    </form>
  );
}