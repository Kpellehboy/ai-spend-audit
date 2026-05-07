import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="rounded-3xl border bg-card px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Start auditing your AI spend today
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Get visibility into hidden software costs, reduce waste, and create
          cleaner AI budgets for your team.
        </p>

        <div className="mt-8">
          <Link href="/auth/signup">
            <Button size="lg">
              Create Free Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}