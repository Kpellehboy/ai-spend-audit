import { z } from "zod";

import { AI_TOOLS } from "@/types/spend";

export const spendEntrySchema = z.object({
  tool: z.enum(AI_TOOLS, {
    message: "Please select a valid tool",
  }),

  plan: z
    .string()
    .min(1, "Plan is required")
    .max(50),

  monthlySpend: z
    .number()
    .min(0, "Monthly spend must be positive"),

  seats: z
    .number()
    .int()
    .min(1, "Seats must be at least 1"),

  teamSize: z
    .number()
    .int()
    .min(1, "Team size must be at least 1"),

  primaryUseCase: z
    .string()
    .min(3, "Use case is too short")
    .max(120),
});

export const spendFormSchema = z.object({
  entries: z
    .array(spendEntrySchema)
    .min(1, "Add at least one tool"),
});