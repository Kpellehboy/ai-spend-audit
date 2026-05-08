"use client";

import { useEffect, useState } from "react";

import { AuditFinding } from "@/types/audit";

import {
  calculateMonthlySavings,
} from "@/lib/audit/formatter";

interface Props {
  findings: AuditFinding[];
}

export function AISummaryCard({
  findings,
}: Props) {
  const [summary, setSummary] =
    useState("Generating summary...");

  useEffect(() => {
    async function loadSummary() {
      try {
        const monthlySavings =
          calculateMonthlySavings(findings);

        const response = await fetch(
          "/api/summary",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              findings,
              monthlySavings,
            }),
          }
        );

        const data = await response.json();

        setSummary(data.summary);
      } catch {
        setSummary(
          "Unable to generate AI summary at this time."
        );
      }
    }

    loadSummary();
  }, [findings]);

  return (
    <div className="rounded-2xl border p-6">
      <h3 className="text-lg font-medium">
        Executive Summary
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {summary}
      </p>
    </div>
  );
}