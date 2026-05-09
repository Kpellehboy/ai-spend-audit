"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { saveAudit } from "@/lib/audit/save-audit";

import { AuditFinding } from "@/types/audit";

interface Props {
  findings: AuditFinding[];

  aiSummary: string;

  totalMonthlySavings: number;

  totalAnnualSavings: number;
}

export function SaveReportButton({
  findings,
  aiSummary,
  totalMonthlySavings,
  totalAnnualSavings,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  const [shareUrl, setShareUrl] =
    useState("");

  const [email, setEmail] =
    useState("");

  async function handleSave() {
    try {
      setLoading(true);

      const data = await saveAudit({
        findings,

        aiSummary,

        totalMonthlySavings,

        totalAnnualSavings,

        email,
      });

      const url = `${window.location.origin}/share/${data.shareId}`;

      setShareUrl(url);
    } catch (error) {
      console.error(error);

      alert("Failed to save report");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4 rounded-2xl border p-5">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium"
        >
          Email this report (optional)
        </label>

        <input
          id="email"
          type="email"
          placeholder="founder@company.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-ring"
        />

        <p className="text-xs text-muted-foreground">
          We’ll send a shareable copy of this
          audit report to your inbox.
        </p>
      </div>

      <Button
        onClick={handleSave}
        disabled={loading}
        className="w-full sm:w-auto"
      >
        {loading
          ? "Saving report..."
          : "Save Report"}
      </Button>

      {shareUrl && (
        <div className="rounded-xl border bg-muted/30 p-4">
          <p className="text-sm font-medium">
            Shareable URL
          </p>

          <a
            href={shareUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-all text-sm text-blue-600 underline"
          >
            {shareUrl}
          </a>
        </div>
      )}
    </div>
  );
}