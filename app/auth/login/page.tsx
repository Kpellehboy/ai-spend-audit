import Link from "next/link";

import { AuthForm } from "@/components/audit/auth-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Login
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Access your AI spend dashboard.
          </p>
        </div>

        <AuthForm mode="login" />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-foreground hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}