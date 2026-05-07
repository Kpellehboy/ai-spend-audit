"use client";

import { useEffect } from "react";
import {
  useFieldArray,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  spendFormSchema,
} from "@/lib/audit/constants";

import {
  loadSpendForm,
  saveSpendForm,
} from "@/lib/audit/storage";

import {
  SpendFormValues,
} from "@/types/spend";

import { SpendEntryCard } from "./spend-entry-card";
import { SpendFormActions } from "./spend-form-actions";

const defaultValues: SpendFormValues = {
  entries: [],
};

export function SpendForm() {
  const form = useForm<SpendFormValues>({
    resolver: zodResolver(spendFormSchema),
    defaultValues,
  });

  const { control, watch, reset } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "entries",
  });

  useEffect(() => {
    const saved = loadSpendForm();

    if (saved) {
      reset(saved);
    }
  }, [reset]);

  useEffect(() => {
    const subscription = watch((values) => {
      saveSpendForm(values as SpendFormValues);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            AI Spend Inputs
          </h2>

          <p className="text-sm text-muted-foreground">
            Add the tools your team currently pays for.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <SpendEntryCard
            key={field.id}
            index={index}
            form={form}
            onRemove={() => remove(index)}
          />
        ))}
      </div>

      <SpendFormActions
        onAdd={() =>
          append({
            tool: "Cursor",
            plan: "",
            monthlySpend: 0,
            seats: 1,
            teamSize: 1,
            primaryUseCase: "",
          })
        }
      />
    </div>
  );
}