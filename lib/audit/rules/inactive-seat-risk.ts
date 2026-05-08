import { AuditRule } from "@/types/audit";

export const inactiveSeatRiskRule: AuditRule = {
  id: "inactive-seat-risk",

  name: "Inactive Seat Risk",

  run({ entries }) {
    return entries.flatMap((entry) => {
      if (entry.teamSize < entry.seats) {
        const unusedSeats =
          entry.seats - entry.teamSize;

        return [
          {
            id: crypto.randomUUID(),

            category: "seat_waste",

            severity: "high",

            title: "Potential inactive seats detected",

            description: `${unusedSeats} seats may be unused based on reported team size.`,

            recommendation:
              "Review seat assignments and remove inactive licenses.",

            estimatedMonthlySavings:
              (entry.monthlySpend / entry.seats) *
              unusedSeats,

            affectedTools: [entry.tool],
          },
        ];
      }

      return [];
    });
  },
};