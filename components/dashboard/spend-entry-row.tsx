"use client";

import { Trash2 } from "lucide-react";

import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { SpendFormValues } from "@/schemas/spend";

import { AI_TOOLS } from "@/schemas/spend";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  index: number;

  register: UseFormRegister<SpendFormValues>;

  errors: FieldErrors<SpendFormValues>;

  canRemove: boolean;

  onRemove: () => void;
}

export function SpendEntryRow({
  index,
  register,
  errors,
  canRemove,
  onRemove,
}: Props) {
  const entryErrors =
    errors.entries?.[index];

  return (
    <div className="space-y-5 rounded-2xl border bg-background p-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">
            Tool Entry
          </h3>

          <p className="text-sm text-muted-foreground">
            Configure AI tool usage and spend.
          </p>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          disabled={!canRemove}
          onClick={onRemove}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* TOOL */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Tool
          </label>

          <select
            {...register(
              `entries.${index}.tool`
            )}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          >
            <option value="">
              Select Tool
            </option>

            {AI_TOOLS.map((tool) => (
              <option
                key={tool}
                value={tool}
              >
                {tool}
              </option>
            ))}
          </select>

          {entryErrors?.tool && (
            <p className="text-sm text-red-500">
              {entryErrors.tool.message}
            </p>
          )}
        </div>

        {/* PLAN */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Plan
          </label>

          <Input
            placeholder="e.g. Team, Pro"
            {...register(
              `entries.${index}.plan`
            )}
          />

          {entryErrors?.plan && (
            <p className="text-sm text-red-500">
              {entryErrors.plan.message}
            </p>
          )}
        </div>

        {/* MONTHLY SPEND */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Monthly Spend ($)
          </label>

          <Input
            type="number"
            placeholder="50"
            {...register(
              `entries.${index}.monthlySpend`,
              {
                valueAsNumber: true,
              }
            )}
          />

          {entryErrors?.monthlySpend && (
            <p className="text-sm text-red-500">
              {
                entryErrors.monthlySpend
                  .message
              }
            </p>
          )}
        </div>

        {/* SEATS */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Seats
          </label>

          <Input
            type="number"
            placeholder="5"
            {...register(
              `entries.${index}.seats`,
              {
                valueAsNumber: true,
              }
            )}
          />

          {entryErrors?.seats && (
            <p className="text-sm text-red-500">
              {entryErrors.seats.message}
            </p>
          )}
        </div>

        {/* TEAM SIZE */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Team Size
          </label>

          <Input
            type="number"
            placeholder="3"
            {...register(
              `entries.${index}.teamSize`,
              {
                valueAsNumber: true,
              }
            )}
          />

          {entryErrors?.teamSize && (
            <p className="text-sm text-red-500">
              {entryErrors.teamSize.message}
            </p>
          )}
        </div>

        {/* USE CASE */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Primary Use Case
          </label>

          <Input
            placeholder="Engineering, research, support..."
            {...register(
              `entries.${index}.primaryUseCase`
            )}
          />

          {entryErrors?.primaryUseCase && (
            <p className="text-sm text-red-500">
              {
                entryErrors
                  .primaryUseCase.message
              }
            </p>
          )}
        </div>
      </div>
    </div>
  );
}