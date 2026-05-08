import { z } from "zod";

export const AI_TOOLS = [
  "Cursor",
  "GitHub Copilot",
  "Claude",
  "ChatGPT",
  "Gemini",
  "Anthropic API",
  "OpenAI API",
  "Windsurf",
  "v0",
] as const;

export const spendEntrySchema = z.object({
  tool: z.enum(AI_TOOLS),

  plan: z.string(),

  monthlySpend: z.number(),

  seats: z.number(),

  teamSize: z.number(),

  primaryUseCase: z.string(),
});

export const spendFormSchema = z.object({
  entries: z.array(
    spendEntrySchema
  ),
});

export type SpendFormValues = z.infer<
  typeof spendFormSchema
>;