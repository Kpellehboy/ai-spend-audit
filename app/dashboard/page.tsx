import { SpendForm } from "@/components/dashboard/spend-form";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-semibold">
          AI Spend Audit
        </h1>

        <p className="mt-2 text-muted-foreground">
          Analyze tool overlap and identify
          unnecessary AI spending.
        </p>
      </div>

      <SpendForm />
    </main>
  );
}