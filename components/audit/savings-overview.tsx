import { formatCurrency } from "@/lib/audit/formatter";

interface Props {
  monthlySavings: number;
  annualSavings: number;
}

export function SavingsOverview({
  monthlySavings,
  annualSavings,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Potential Monthly Savings
          </p>

          <h2 className="mt-2 text-5xl font-semibold tracking-tight">
            {formatCurrency(monthlySavings)}
          </h2>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Projected Annual Savings
          </p>

          <h2 className="mt-2 text-5xl font-semibold tracking-tight">
            {formatCurrency(annualSavings)}
          </h2>
        </div>
      </div>
    </div>
  );
}