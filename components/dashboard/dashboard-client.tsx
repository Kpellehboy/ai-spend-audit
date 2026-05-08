"use client";

import { useState } from "react";

import { SpendForm } from "@/components/dashboard/spend-form";

import { AuditResults } from "@/components/audit/audit-results";

import { runAudit } from "@/lib/audit/engine";

import { spendFormSchema } from "@/schemas/spend";

import { AuditFinding } from "@/types/audit";
type SpendFormSchema = typeof spendFormSchema._output;

export function DashboardClient() {
  const [findings, setFindings] = useState<
    AuditFinding[]
  >([]);

  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  function handleAudit(
    values: SpendFormSchema
  ) {
    const auditResults = runAudit(
      values.entries
    );

    setFindings(auditResults);

    setHasSubmitted(true);

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 150);
  }

  return (
    <div className="space-y-10">
      <SpendForm onSubmit={handleAudit} />

      {hasSubmitted && (
        <AuditResults findings={findings} />
      )}
    </div>
  );
}