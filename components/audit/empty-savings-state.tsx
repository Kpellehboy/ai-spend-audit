export function EmptySavingsState() {
  return (
    <div className="rounded-2xl border p-8 text-center">
      <h3 className="text-xl font-semibold">
        Your AI spend looks reasonably optimized
      </h3>

      <p className="mt-3 text-sm text-muted-foreground">
        We did not detect major overspending patterns
        based on the current data provided.
      </p>
    </div>
  );
}