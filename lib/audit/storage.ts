import { SpendFormValues } from "@/types/spend";

const STORAGE_KEY = "ai-spend-audit-form";

export function saveSpendForm(data: SpendFormValues) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
}

export function loadSpendForm(): SpendFormValues | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSpendForm() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);
}