# Reflection

## What I Optimized For

I approached the assignment as a product shipping exercise rather than a traditional coding challenge.

The goal was to build a believable SaaS MVP that balanced:
- product clarity
- deterministic business logic
- deployment simplicity
- realistic engineering tradeoffs

---

## Technical Decisions

One intentional decision was separating financial logic from AI-generated output.

The audit engine uses deterministic rules for:
- savings calculations
- overlap detection
- seat optimization

Anthropic is only used for executive summaries and narrative explanations.

This keeps recommendations explainable and testable.

---

## Product Tradeoffs

I intentionally avoided:
- direct billing integrations
- enterprise RBAC systems
- overly complex analytics
- AI-generated financial recommendations

Instead, I focused on:
- fast onboarding
- shareable audit reports
- lightweight operational insights

---

## What I Would Improve Next

If given more time, I would explore:
- historical spend tracking
- CSV import workflows
- Slack notifications
- organization collaboration
- vendor billing integrations

---

## Biggest Learning

One interesting challenge was balancing realistic SaaS UX expectations against assignment scope.

The most valuable insight during development was that operational clarity and explainability matter more than adding excessive AI functionality.