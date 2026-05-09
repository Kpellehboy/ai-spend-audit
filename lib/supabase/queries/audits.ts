import { createClient } from "../server";

interface CreateAuditParams {
  shareId: string;

  email?: string;

  findings: unknown[];

  aiSummary: string;

  totalMonthlySavings: number;

  totalAnnualSavings: number;
}

export async function createAudit({
  shareId,
  email,
  findings,
  aiSummary,
  totalMonthlySavings,
  totalAnnualSavings,
}: CreateAuditParams) {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("audits")
      .insert({
        share_id: shareId,

        email,

        findings,

        ai_summary: aiSummary,

        total_monthly_savings:
          totalMonthlySavings,

        total_annual_savings:
          totalAnnualSavings,
      })
      .select()
      .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getAuditByShareId(
  shareId: string
) {
  const supabase =
    await createClient();

  const { data, error } =
    await supabase
      .from("audits")
      .select("*")
      .eq("share_id", shareId)
      .single();

  if (error) {
    return null;
  }

  return data;
}