import { z } from "zod";

export const spendEntrySchema = z.object({
  tool: z.string().min(1, "Tool is required"),

  plan: z
    .string()
    .min(1, "Plan is required")
    .max(50),

  monthlySpend: z
    .number({
      invalid_type_error: "Monthly spend must be a number",
    })
    .min(0),

  seats: z
    .number({
      invalid_type_error: "Seats must be a number",
    })
    .int()
    .min(1),

  teamSize: z
    .number({
      invalid_type_error: "Team size must be a number",
    })
    .int()
    .min(1),

  primaryUseCase: z
    .string()
    .min(3)
    .max(120),
});

export const spendFormSchema = z.object({
  entries: z.array(spendEntrySchema).min(1),
});