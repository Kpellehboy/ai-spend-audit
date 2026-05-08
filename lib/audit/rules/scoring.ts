import { AuditSeverity } from "@/types/audit";

export function getSeverityFromSavings(
  amount: number
): AuditSeverity {
  if (amount >= 250) {
    return "high";
  }

  if (amount >= 75) {
    return "medium";
  }

  return "low";
}