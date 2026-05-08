import { AuditFinding, AuditRule } from "@/types/audit";

import { underutilizedTeamPlanRule } from "./rules/underutilized-team-plan";
import { overlappingToolsRule } from "./rules/overlapping-tools";
import { apiVsSubscriptionRule } from "./rules/api-vs-subscription";
import { inactiveSeatRiskRule } from "./rules/inactive-seat-risk";

import { SpendEntry } from "@/types/spend";

const rules: AuditRule[] = [
  underutilizedTeamPlanRule,
  overlappingToolsRule,
  apiVsSubscriptionRule,
  inactiveSeatRiskRule,
];

export function runAudit(
  entries: SpendEntry[]
): AuditFinding[] {
  const findings: AuditFinding[] = [];

  for (const rule of rules) {
    const result = rule.run({ entries });

    findings.push(...result);
  }

  return findings.sort(
    (a, b) =>
      b.estimatedMonthlySavings -
      a.estimatedMonthlySavings
  );
}