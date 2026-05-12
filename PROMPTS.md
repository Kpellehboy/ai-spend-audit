# AI Prompt Notes

Anthropic is used only for executive summaries.

The prompt intentionally constrains:
- tone
- response length
- formatting
- confidence level

## Current Prompt

```txt
You are an AI finance operations assistant.

Write a concise executive summary (~100 words).

Requirements:
- Professional tone
- Helpful but not alarmist
- Mention likely optimization areas
- Mention estimated savings
- Avoid exaggeration
- Avoid bullet points
```

## Why Constrained Prompts?

The application avoids allowing the model to:
- generate savings calculations
- make financial decisions
- invent vendor pricing

This keeps recommendations deterministic and explainable.

## Fallback Strategy

If the AI provider fails:
- deterministic findings still render
- fallback summaries are used
- the core product remains functional