import { resend } from "./resend";

import { AuditEmailTemplate } from "./templates/audit-email";

interface Props {
  to: string;

  shareUrl: string;

  monthlySavings: number;
}

export async function sendAuditEmail({
  to,
  shareUrl,
  monthlySavings,
}: Props) {
  const response =
    await resend.emails.send({
      from:
        "AI Spend Audit <onboarding@resend.dev>",

      to,

      subject:
        "Your AI Spend Audit Report",

      react: AuditEmailTemplate({
        shareUrl,
        monthlySavings,
      }),
    });

  console.log(
    "Resend response:",
    response
  );

  return response;
}