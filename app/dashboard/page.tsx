"use client";

import { useState } from "react";

import { SpendForm } from "@/components/dashboard/spend-form";

import { AuditResults } from "@/components/audit/audit-results";

import { runAudit } from "@/lib/audit/engine";

import type { AuditFinding } from "@/types/audit";

import type { SpendFormValues } from "@/schemas/spend";

export default function DashboardPage() {
  const [findings, setFindings] =
    useState<AuditFinding[]>([]);

  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  function handleAnalyze(
    values: SpendFormValues
  ) {
    const auditResults = runAudit(
      values.entries
    );

    console.log(
      "AUDIT RESULTS:",
      auditResults
    );

    setFindings(auditResults);

    setHasSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          AI Spend Audit
        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Analyze AI tooling costs, identify
          redundant subscriptions, and surface
          optimization opportunities across your
          organization.
        </p>
      </div>

      <div className="space-y-10">
        <SpendForm
          onSubmit={handleAnalyze}
        />

        {hasSubmitted && (
          <AuditResults
            findings={findings}
          />
        )}
      </div>
    </main>
  );
}