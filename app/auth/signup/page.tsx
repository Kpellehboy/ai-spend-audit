import Link from "next/link";

import { AuthForm } from "@/components/audit/auth-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Create account
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Start auditing AI subscription spend.
          </p>
        </div>

        <AuthForm mode="signup" />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-foreground hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}