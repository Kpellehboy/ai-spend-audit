export function DashboardPreview() {
  return (
    <section className="py-12">
      <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="border-b p-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-3 w-3 rounded-full bg-muted" />
            <div className="h-3 w-3 rounded-full bg-muted" />
          </div>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <p className="text-sm text-muted-foreground">
              Monthly AI Spend
            </p>

            <h3 className="mt-2 text-3xl font-semibold">$8,420</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Across 6 active subscriptions
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <p className="text-sm text-muted-foreground">
              Potential Savings
            </p>

            <h3 className="mt-2 text-3xl font-semibold">$2,140</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Inactive seats and duplicate tooling
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <p className="text-sm text-muted-foreground">
              Highest Cost Tool
            </p>

            <h3 className="mt-2 text-3xl font-semibold">Cursor</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              14 paid seats detected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}