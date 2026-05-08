import { describe, it, expect } from "vitest";

import { overlappingToolsRule } from "../../audit/rules/overlapping-tools";

describe("overlapping tools rule", () => {
  it("detects overlapping coding assistants", () => {
    const result = overlappingToolsRule.run({
      entries: [
        {
          tool: "Cursor",
          plan: "Pro",
          monthlySpend: 40,
          seats: 2,
          teamSize: 2,
          primaryUseCase: "Development",
        },

        {
          tool: "GitHub Copilot",
          plan: "Business",
          monthlySpend: 60,
          seats: 3,
          teamSize: 3,
          primaryUseCase: "Development",
        },
      ],
    });

    expect(result.length).toBeGreaterThan(0);

    expect(result[0].category).toBe("overlap");
  });

  it("returns empty array when only one coding assistant exists", () => {
    const result = overlappingToolsRule.run({
      entries: [
        {
          tool: "Cursor",
          plan: "Pro",
          monthlySpend: 20,
          seats: 1,
          teamSize: 1,
          primaryUseCase: "Development",
        },
      ],
    });

    expect(result).toEqual([]);
  });
});