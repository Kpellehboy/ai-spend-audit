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

export type AITool =
  (typeof AI_TOOLS)[number];