import { AuditFinding } from "./audit";

export interface SharedAudit {
  id: string;

  shareId: string;

  email?: string;

  totalMonthlySavings: number;

  totalAnnualSavings: number;

  findings: AuditFinding[];

  aiSummary: string;

  createdAt: string;
}