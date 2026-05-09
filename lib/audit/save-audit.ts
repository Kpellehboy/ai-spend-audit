import { AuditFinding } from "@/types/audit";

export async function saveAudit({
  findings,
  aiSummary,
  totalMonthlySavings,
  totalAnnualSavings,
  email,
}: {
  findings: AuditFinding[];

  aiSummary: string;

  totalMonthlySavings: number;

  totalAnnualSavings: number;

  email?: string;
}) {
  const response = await fetch(
    "/api/audits/create",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        findings,

        aiSummary,

        totalMonthlySavings,

        totalAnnualSavings,

        email,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to save audit"
    );
  }

  return response.json();
}