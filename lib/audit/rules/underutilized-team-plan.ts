import { AuditRule } from "@/types/audit";

export const underutilizedTeamPlanRule: AuditRule = {
  id: "underutilized-team-plan",

  name: "Underutilized Team Plans",

  run({ entries }) {
    return entries.flatMap((entry) => {
      const isTeamPlan =
        entry.plan.toLowerCase().includes("team") ||
        entry.plan.toLowerCase().includes("business");

      const lowSeatUsage = entry.seats <= 2;

      if (!isTeamPlan || !lowSeatUsage) {
        return [];
      }

      return [
        {
          id: crypto.randomUUID(),

          category: "plan_mismatch",

          severity: "medium",

          title: "Team plan may be oversized",

          description: `${entry.tool} is using a team-tier plan with only ${entry.seats} seats.`,

          recommendation:
            "Consider downgrading to individual plans unless advanced admin controls are required.",

          estimatedMonthlySavings:
            entry.monthlySpend * 0.35,

          affectedTools: [entry.tool],
        },
      ];
    });
  },
};