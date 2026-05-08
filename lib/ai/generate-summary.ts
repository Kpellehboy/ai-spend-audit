import Anthropic from "@anthropic-ai/sdk";

import { AuditFinding } from "@/types/audit";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function generateSummary(
  findings: AuditFinding[],
  monthlySavings: number
) {
  const prompt = `
You are an AI finance operations assistant.

Write a concise executive summary (~100 words).

Requirements:
- Professional tone
- Helpful but not alarmist
- Mention likely optimization areas
- Mention estimated savings
- Avoid exaggeration
- Avoid bullet points

Monthly savings estimate:
$${monthlySavings}

Audit findings:
${findings
  .map(
    (finding) =>
      `- ${finding.title}: ${finding.description}`
  )
  .join("\n")}
`;

  const response =
    await anthropic.messages.create({
      model: "claude-3-5-sonnet-latest",

      max_tokens: 250,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

  const textContent = response.content
    .filter((block) => block.type === "text")
    .map((block) => block.text)
    .join("\n");

  return textContent;
}