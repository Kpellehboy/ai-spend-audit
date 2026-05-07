"use client";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  SpendFormValues,
  AI_TOOLS,
} from "@/types/spend";

interface Props {
  index: number;
  form: UseFormReturn<SpendFormValues>;
  onRemove: () => void;
}

export function SpendEntryCard({
  index,
  form,
  onRemove,
}: Props) {
  const {
    register,
    formState: { errors },
  } = form;

  const fieldErrors =
    errors.entries?.[index];

  return (
    <Card className="rounded-2xl border bg-background shadow-sm">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">
            Tool Entry #{index + 1}
          </h3>

          <Button
            type="button"
            variant="ghost"
            onClick={onRemove}
          >
            Remove
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm">
              Tool
            </label>

            <select
              className="w-full rounded-md border bg-background p-2"
              {...register(`entries.${index}.tool`)}
            >
              {AI_TOOLS.map((tool) => (
                <option key={tool} value={tool}>
                  {tool}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Plan
            </label>

            <Input />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              className="w-full rounded-md border bg-background p-2"
              {...register(
                `entries.${index}.monthlySpend`,
                {
                  valueAsNumber: true,
                }
              )}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Seats
            </label>

            <input
              type="number"
              className="w-full rounded-md border bg-background p-2"
              {...register(
                `entries.${index}.seats`,
                {
                  valueAsNumber: true,
                }
              )}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Team Size
            </label>

            <input
              type="number"
              className="w-full rounded-md border bg-background p-2"
              {...register(
                `entries.${index}.teamSize`,
                {
                  valueAsNumber: true,
                }
              )}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">
              Primary Use Case
            </label>

            <input
              className="w-full rounded-md border bg-background p-2"
              placeholder="Code generation"
              {...register(
                `entries.${index}.primaryUseCase`
              )}
            />
          </div>
        </div>

        {fieldErrors && (
          <p className="text-sm text-red-500">
            Please review this entry.
          </p>
        )}
      </CardContent>
    </Card>
  );
}