# Economics Notes

## Infrastructure Costs

The MVP architecture intentionally keeps operational costs low.

### Primary Services

| Service | Purpose |
|---|---|
| Vercel | Hosting |
| Supabase | Database + storage |
| Anthropic | Executive summaries |
| Resend | Transactional email |

## AI Cost Philosophy

AI is only used for short narrative summaries.

The application avoids:
- AI-based calculations
- expensive agent workflows
- long-context processing

This keeps inference costs predictable.

## Estimated Cost Drivers

Primary variable costs:
- Anthropic API usage
- email volume
- database storage

The deterministic audit engine itself has negligible runtime cost.

## Why This Matters

The architecture was intentionally designed so that:
- most audits are inexpensive to generate
- infrastructure scales gradually
- the core product remains functional even if AI usage is reduced

## Potential Pricing Model

### Free Tier
- limited audits per month
- public share links

### Team Tier
Potential additions:
- saved history
- team collaboration
- CSV imports
- integrations

## Operational Tradeoffs

The project intentionally avoids:
- heavy background jobs
- complex orchestration systems
- expensive AI pipelines

This improves:
- deployment simplicity
- maintainability
- iteration speed