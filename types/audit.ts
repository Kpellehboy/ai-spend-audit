import { SpendEntry } from "./spend";

export type AuditSeverity =
  | "low"
  | "medium"
  | "high";

export type AuditCategory =
  | "seat_waste"
  | "overlap"
  | "plan_mismatch"
  | "optimization"
  | "inactive_usage";

export interface AuditFinding {
  id: string;

  category: AuditCategory;

  severity: AuditSeverity;

  title: string;

  description: string;

  recommendation: string;

  estimatedMonthlySavings: number;

  affectedTools: string[];
}

export interface AuditContext {
  entries: SpendEntry[];
}

export interface AuditRule {
  id: string;

  name: string;

  run: (
    context: AuditContext
  ) => AuditFinding[];
}