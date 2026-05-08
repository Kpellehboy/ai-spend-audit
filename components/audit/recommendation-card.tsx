import { Badge } from "@/components/ui/badge";

import { AuditFinding } from "@/types/audit";

import { formatCurrency } from "@/lib/audit/formatter";

interface Props {
  finding: AuditFinding;
}

export function RecommendationCard({
  finding,
}: Props) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h3 className="text-lg font-medium tracking-tight">
            {finding.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {finding.description}
          </p>
        </div>

        <Badge>
          {finding.severity}
        </Badge>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium">
          Recommendation
        </p>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {finding.recommendation}
        </p>

        {/* CONFIDENCE MESSAGE */}
        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          Recommendation confidence is based on
          plan structure, seat allocation, and
          overlapping workflow patterns.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {finding.affectedTools.map((tool) => (
            <Badge
              key={tool}
              variant="secondary"
            >
              {tool}
            </Badge>
          ))}
        </div>

        <div className="text-left sm:text-right">
          <p className="text-2xl font-semibold tracking-tight">
            {formatCurrency(
              finding.estimatedMonthlySavings
            )}
          </p>

          <p className="text-sm text-muted-foreground">
            Potential monthly savings
          </p>
        </div>
      </div>
    </div>
  );
}