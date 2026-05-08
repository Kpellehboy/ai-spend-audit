import { AuditRule } from "@/types/audit";

const CODE_ASSISTANTS = [
  "Cursor",
  "GitHub Copilot",
  "Windsurf",
];

export const overlappingToolsRule: AuditRule = {
  id: "overlapping-tools",

  name: "Overlapping Tools",

  run({ entries }) {
    const overlapping = entries.filter((entry) =>
      CODE_ASSISTANTS.includes(entry.tool)
    );

    if (overlapping.length < 2) {
      return [];
    }

    const totalSpend = overlapping.reduce(
      (sum, entry) => sum + entry.monthlySpend,
      0
    );

    return [
      {
        id: crypto.randomUUID(),

        category: "overlap",

        severity: "high",

        title: "Potential overlap across coding assistants",

        description:
          "Multiple AI coding assistants appear to serve similar workflows.",

        recommendation:
          "Standardizing on a single coding assistant could reduce tooling redundancy and simplify onboarding.",

        estimatedMonthlySavings:
          totalSpend * 0.4,

        affectedTools: overlapping.map(
          (entry) => entry.tool
        ),
      },
    ];
  },
};