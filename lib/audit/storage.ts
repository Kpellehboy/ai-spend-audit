import type { SpendFormValues } from "@/schemas/spend";

const STORAGE_KEY =
  "ai-spend-audit-form";

export function saveSpendData(
  values: SpendFormValues
) {
  if (typeof window === "undefined")
    return;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(values)
  );
}

export function loadSpendData():
  | SpendFormValues
  | null {
  if (typeof window === "undefined")
    return null;

  const raw =
    localStorage.getItem(STORAGE_KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearSpendData() {
  if (typeof window === "undefined")
    return;

  localStorage.removeItem(
    STORAGE_KEY
  );
}