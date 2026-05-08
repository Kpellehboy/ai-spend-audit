import { AuditFinding } from "@/types/audit";

import {
  calculateAnnualSavings,
  calculateMonthlySavings,
} from "@/lib/audit/formatter";

import { SavingsOverview } from "./savings-overview";
import { RecommendationCard } from "./recommendation-card";
import { CredexCTA } from "./credex-cta";
import { EmptySavingsState } from "./empty-savings-state";
import { AISummaryCard } from "./ai-summary-card";

interface Props {
  findings: AuditFinding[];
}

export async function AuditResults({
  findings,
}: Props) {
  const monthlySavings =
    calculateMonthlySavings(findings);

  const annualSavings =
    calculateAnnualSavings(monthlySavings);

  const hasLargeSavings =
    monthlySavings > 500;

  return (
    <section className="space-y-8">
      <SavingsOverview
        monthlySavings={monthlySavings}
        annualSavings={annualSavings}
      />

      <AISummaryCard findings={findings} />

      {findings.length === 0 ? (
        <EmptySavingsState />
      ) : (
        <div className="grid gap-4">
          {findings.map((finding) => (
            <RecommendationCard
              key={finding.id}
              finding={finding}
            />
          ))}
        </div>
      )}

      {hasLargeSavings && (
        <CredexCTA
          monthlySavings={monthlySavings}
        />
      )}
    </section>
  );
}