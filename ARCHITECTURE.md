# Architecture Notes

## Overview

The application is structured as a lightweight monolithic Next.js App Router application optimized for rapid iteration and deployment simplicity.

## Frontend

- Server Components by default
- Client Components only for interactive flows
- Tailwind + shadcn/ui for consistent UI primitives

## Audit Engine

The audit engine uses deterministic rule evaluation rather than AI-generated calculations.

Architecture:

Spend Input
→ Normalization
→ Rule Evaluation
→ Savings Calculation
→ Recommendation Generation
→ Optional AI Narrative Summary

Each audit rule is isolated into its own module to improve maintainability and testing.

## Why Deterministic Rules?

AI-generated financial recommendations are difficult to verify and may produce inconsistent results.

Using deterministic rules provides:
- explainability
- testability
- predictable outputs
- easier debugging

## Persistence Model

Audit reports are stored as immutable JSON snapshots inside Supabase.

This intentionally favors:
- development speed
- simpler retrieval
- fewer relational joins

## AI Usage

Anthropic is used exclusively for executive summaries.

The AI layer:
- does not calculate savings
- does not determine pricing
- does not generate risk scores

This separation keeps the financial logic auditable.

## Security Considerations

Public audit pages intentionally avoid exposing:
- raw spend submissions
- payment details
- internal employee information

Only summarized findings are persisted for sharing.

## Deployment Philosophy

The application is designed to remain operationally lightweight:
- Vercel hosting
- Supabase backend
- minimal infrastructure dependencies