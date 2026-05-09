export function getFallbackSummary(
  monthlySavings: number
) {
  if (monthlySavings >= 500) {
    return `
Your organization may have meaningful opportunities to reduce AI tooling costs through subscription consolidation and seat optimization. Several overlapping tools and plan mismatches were identified during this audit, which could contribute to unnecessary recurring spend.
`;
  }

  if (monthlySavings >= 100) {
    return `
Your AI tooling spend appears generally reasonable, though a few optimization opportunities may exist around seat utilization and overlapping subscriptions. Minor adjustments could help improve overall cost efficiency.
`;
  }

  return `
Your current AI tooling spend appears relatively balanced based on the submitted data. No major overspending patterns or significant inefficiencies were detected during this audit.
`;
}