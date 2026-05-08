import { AuditRule } from "@/types/audit";

export const apiVsSubscriptionRule: AuditRule = {
  id: "api-vs-subscription",

  name: "API vs Subscription",

  run({ entries }) {
    return entries.flatMap((entry) => {
      const lowSeatUsage = entry.seats <= 2;

      const expensiveSubscription =
        entry.monthlySpend >= 50;

      const likelyCompatible =
        entry.tool === "ChatGPT" ||
        entry.tool === "Claude";

      if (
        !lowSeatUsage ||
        !expensiveSubscription ||
        !likelyCompatible
      ) {
        return [];
      }

      return [
        {
          id: crypto.randomUUID(),

          category: "optimization",

          severity: "medium",

          title:
            "API usage may be more cost-efficient",

          description:
            "Low-seat teams with moderate usage may benefit from API-based consumption instead of fixed subscriptions.",

          recommendation:
            "Evaluate whether shared API access could reduce recurring subscription costs.",

          estimatedMonthlySavings:
            entry.monthlySpend * 0.25,

          affectedTools: [entry.tool],
        },
      ];
    });
  },
};