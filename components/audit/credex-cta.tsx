import { Button } from "@/components/ui/button";

import { formatCurrency } from "@/lib/audit/formatter";

interface Props {
  monthlySavings: number;
}

export function CredexCTA({
  monthlySavings,
}: Props) {
  return (
    <div className="rounded-3xl border bg-muted/40 p-6">
      <h3 className="text-2xl font-semibold">
        Significant optimization opportunity detected
      </h3>

      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
        Your organization may be able to reduce
        approximately{" "}
        {formatCurrency(monthlySavings)} in monthly
        AI tooling spend through vendor consolidation
        and seat optimization.
      </p>

      <Button className="mt-5">
        Talk to Credex
      </Button>
    </div>
  );
}