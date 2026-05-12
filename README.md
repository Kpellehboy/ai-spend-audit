# AI Spend Audit

AI Spend Audit is a lightweight SaaS MVP that helps startups identify unnecessary spending across AI tools such as Cursor, ChatGPT, Claude, GitHub Copilot, Gemini, and API subscriptions.

The application uses deterministic audit rules to surface optimization opportunities and generates concise executive summaries using Anthropic.

## Why I Built This

Engineering teams are rapidly adopting multiple AI tools simultaneously, often without centralized visibility into seat usage, overlapping functionality, or pricing efficiency.

This project explores how lightweight financial auditing workflows can help startups make more informed tooling decisions without requiring deep billing integrations.

## Features

- Multi-tool spend input
- Deterministic audit engine
- AI-generated executive summaries
- Public shareable audit reports
- Transactional email delivery
- Responsive SaaS dashboard
- Open Graph previews

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Anthropic API
- Resend
- Vercel

## Architecture Philosophy

The project intentionally prioritizes:
- simplicity
- explainability
- deployment speed
- deterministic business logic

AI is only used for narrative summaries, not financial calculations.

## Local Development

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

ANTHROPIC_API_KEY=
RESEND_API_KEY=
```

## Running Tests

```bash
npm run test
```

## Key Product Decisions

### Why deterministic rules instead of AI calculations?

Financial recommendations should remain explainable and predictable. The audit engine uses typed rule modules so every recommendation can be traced back to explicit business logic.

### Why CSV/manual input instead of direct integrations?

The MVP focuses on spend visibility first. Vendor integrations introduce significant operational complexity and were intentionally deferred.

## Future Improvements

- OAuth organization onboarding
- Direct billing integrations
- Historical spend tracking
- Team-level permissioning
- Usage-based API analysis

## Deployment

The app is designed for deployment on Vercel.

## Screenshots
1. Landing page
<img width="1330" height="722" alt="image" src="https://github.com/user-attachments/assets/2d5be812-87e3-45da-9ef4-2a681e81cd15" />

2. Create Account
<img width="1364" height="727" alt="image" src="https://github.com/user-attachments/assets/2f793f9c-797d-4d1c-bf9b-64241a228dfc" />

3. Dashboard
<img width="1357" height="722" alt="image" src="https://github.com/user-attachments/assets/4e8dcf52-9f7f-4bb7-869a-31caba3e4332" />

4. Database
<img width="1315" height="594" alt="image" src="https://github.com/user-attachments/assets/a2bd99a6-5169-4957-8d85-0a22348dac01" />
<img width="1363" height="582" alt="image" src="https://github.com/user-attachments/assets/e3e83e83-0d99-4267-8bff-3c08372a96d3" />

5. Mobile View
<img width="591" height="1280" alt="WhatsApp Image 2026-05-12 at 1 12 04 PM" src="https://github.com/user-attachments/assets/eaf27e5d-d265-4d48-b51d-9bd7d05dc902" />
<img width="591" height="1280" alt="WhatsApp Image 2026-05-12 at 1 12 10 PM" src="https://github.com/user-attachments/assets/d0cdc62a-63f2-4f54-8c3c-bc9692daffff" />

## Author
Elijah M. Flomo
