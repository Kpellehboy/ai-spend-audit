import { AuditSeverity } from "@/types/audit";

export function getSeverityFromSavings(
  amount: number
): AuditSeverity {
  if (amount >= 100) {
    return "high";
  }

  if (amount >= 20) {
    return "medium";
  }

  return "low";
}