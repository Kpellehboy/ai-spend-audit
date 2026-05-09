import Anthropic from "@anthropic-ai/sdk";

import { AuditFinding } from "@/types/audit";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

function buildPrompt(
  findings: AuditFinding[],
  monthlySavings: number
) {
  return `
You are an AI finance operations assistant helping engineering managers review AI tooling costs.

Write a concise executive summary in approximately 100 words.

Guidelines:
- Professional and calm tone
- Helpful and realistic
- Avoid hype or exaggerated claims
- Mention likely optimization opportunities
- Mention estimated savings
- Do not use bullet points
- Do not invent numbers
- Do not mention tools that were not provided
- Sound like a thoughtful operations analyst

Estimated monthly savings:
$${monthlySavings}

Audit findings:
${findings
  .map(
    (finding) =>
      `- ${finding.title}: ${finding.description}`
  )
  .join("\n")}
`;
}

export async function generateSummary(
  findings: AuditFinding[],
  monthlySavings: number
) {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error(
      "Missing ANTHROPIC_API_KEY"
    );
  }

  if (findings.length === 0) {
    return `
Your current AI tooling spend appears relatively balanced based on the submitted data. While there may be smaller opportunities for optimization, no major overspending patterns or significant operational inefficiencies were identified during this audit.
`;
  }

  const prompt = buildPrompt(
    findings,
    monthlySavings
  );

  try {
    const response =
      await anthropic.messages.create({
        model: "claude-3-5-sonnet-latest",

        max_tokens: 250,

        temperature: 0.4,

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const textContent =
      response.content
        .filter(
          (block) =>
            block.type === "text"
        )
        .map((block) => block.text)
        .join("\n")
        .trim();

    if (!textContent) {
      throw new Error(
        "Empty summary response"
      );
    }

    return textContent;
  } catch (error) {
    console.error(
      "Anthropic summary generation failed:",
      error
    );

    throw error;
  }
}