import { z } from "zod";

import { AI_TOOLS } from "@/types/spend";

export const spendEntrySchema = z.object({
  tool: z.enum(AI_TOOLS),

  plan: z
    .string()
    .min(1, "Plan is required"),

  monthlySpend: z
    .number({
      error: "Monthly spend is required",
    })
    .min(0, "Monthly spend must be positive"),

  seats: z
    .number({
      error: "Seats are required",
    })
    .min(1, "Seats must be at least 1"),

  teamSize: z
    .number({
      error: "Team size is required",
    })
    .min(1, "Team size must be at least 1"),

  primaryUseCase: z
    .string()
    .min(
      3,
      "Primary use case is required"
    ),
});

export const spendFormSchema = z.object({
  entries: z
    .array(spendEntrySchema)
    .min(1, "Add at least one tool"),
});

export type SpendFormValues =
  z.infer<typeof spendFormSchema>;