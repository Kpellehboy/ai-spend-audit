import crypto from "crypto";

import { NextResponse } from "next/server";

import { createAudit } from "@/lib/supabase/queries/audits";

import { sendAuditEmail } from "@/lib/email/send-audit-email";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const shareId =
      "audit_" +
      crypto.randomBytes(4).toString("hex");

    const audit =
      await createAudit({
        shareId,

        email: body.email,

        findings: body.findings,

        aiSummary: body.aiSummary,

        totalMonthlySavings:
          body.totalMonthlySavings,

        totalAnnualSavings:
          body.totalAnnualSavings,
      });

    // Optional transactional email
    if (body.email) {
      const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/share/${shareId}`;

      try {
        await sendAuditEmail({
          to: body.email,

          shareUrl,

          monthlySavings:
            body.totalMonthlySavings,
        });
      } catch (emailError) {
        console.error(
          "Email send failed:",
          emailError
        );

        // Do not fail audit creation if email fails
      }
    }

    return NextResponse.json({
      success: true,

      shareId: audit.share_id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to create audit",
      },
      {
        status: 500,
      }
    );
  }
}