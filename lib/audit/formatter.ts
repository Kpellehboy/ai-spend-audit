import { AuditFinding } from "@/types/audit";

export function calculateMonthlySavings(
  findings: AuditFinding[]
) {
  return findings.reduce(
    (sum, finding) =>
      sum + finding.estimatedMonthlySavings,
    0
  );
}

export function calculateAnnualSavings(
  monthlySavings: number
) {
  return monthlySavings * 12;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}