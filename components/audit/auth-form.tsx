"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

interface Props {
  mode: "login" | "signup";
}

export function AuthForm({
  mode,
}: Props) {
  const router = useRouter();

  const supabase = createClient();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      if (mode === "signup") {
        const { error } =
          await supabase.auth.signUp({
            email,
            password,
          });

        if (error) {
          throw error;
        }
      }

      if (mode === "login") {
        const { error } =
          await supabase.auth.signInWithPassword(
            {
              email,
              password,
            }
          );

        if (error) {
          throw error;
        }
      }

      router.push("/dashboard");

      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Authentication failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Email
        </label>

        <Input
          type="email"
          placeholder="founder@startup.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Password
        </label>

        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm text-red-600">
            {error}
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading
          ? mode === "login"
            ? "Signing in..."
            : "Creating account..."
          : mode === "login"
          ? "Login"
          : "Create account"}
      </Button>
    </form>
  );
}