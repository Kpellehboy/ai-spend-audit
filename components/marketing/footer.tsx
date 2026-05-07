export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AI Spend Audit</p>

        <div className="flex items-center gap-6">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
}