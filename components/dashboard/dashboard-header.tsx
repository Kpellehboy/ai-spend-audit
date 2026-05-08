"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/auth/login");

    router.refresh();
  }

  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div>
        <h1 className="text-2xl font-semibold">
          AI Spend Audit
        </h1>
      </div>

      <Button
        variant="outline"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}