export function getFallbackSummary(
  monthlySavings: number
) {
  if (monthlySavings >= 500) {
    return `
Your organization may have substantial opportunities to reduce AI tooling costs through subscription consolidation, seat optimization, and workflow standardization. Several tools appear to overlap in functionality, and certain team-tier plans may exceed current operational requirements.
`;
  }

  if (monthlySavings >= 100) {
    return `
Your organization appears to have moderate AI spend optimization opportunities. The audit identified overlapping tooling and potential plan inefficiencies that could reduce recurring software costs while maintaining team productivity.
`;
  }

  if (monthlySavings >= 25) {
    return `
Your current AI tooling setup appears generally reasonable, though a few smaller optimization opportunities were identified around plan sizing and tool overlap.
`;
  }

  return `
Your AI tooling spend appears appropriately aligned with current usage patterns. No major overspending risks were detected based on the provided data.
`;
}