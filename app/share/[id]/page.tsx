import { notFound } from "next/navigation";

import { getAuditByShareId } from "@/lib/supabase/queries/audits";

import { AuditResults } from "@/components/audit/audit-results";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props) {
  const { id } = await params;

  const audit =
    await getAuditByShareId(id);

  if (!audit) {
    return {
      title: "Audit Not Found",
    };
  }

  return {
    title: `AI Spend Audit — Save $${audit.total_monthly_savings}/month`,

    description:
      "AI tooling optimization report",

    openGraph: {
      title: `Potential savings: $${audit.total_monthly_savings}/month`,

      description:
        audit.ai_summary,

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: "AI Spend Audit Results",

      description:
        audit.ai_summary,
    },
  };
}

export default async function SharePage({
  params,
}: Props) {
  const { id } = await params;

  const audit =
    await getAuditByShareId(id);

  if (!audit) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">
          Shared Audit Report
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Estimated savings opportunity:
          {" "}
          ${audit.total_monthly_savings}/month
        </p>
      </div>

      <AuditResults
        findings={audit.findings}
      />
    </main>
  );
}