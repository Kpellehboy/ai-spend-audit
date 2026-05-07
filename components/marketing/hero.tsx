import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center py-24 text-center sm:py-32">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
          AI spend visibility for modern teams
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Stop overspending on AI subscriptions.
        </h1>

        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
          Identify duplicate AI tools, inactive seats, and unnecessary spend
          across Cursor, Claude, ChatGPT, Gemini, GitHub Copilot, and more.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/auth/signup">
            <Button size="lg">
              Start Free Audit
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}