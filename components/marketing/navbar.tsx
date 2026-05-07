import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AI Spend Audit
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Login
          </Link>

          <Link href="/auth/signup">
            <Button>
              Start Free Audit
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}