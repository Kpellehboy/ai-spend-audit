import { NextResponse } from "next/server";

import { generateSummary } from "@/lib/ai/generate-summary";

import { getFallbackSummary } from "@/lib/ai/fallback-summary";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { findings, monthlySavings } = body;

    if (!Array.isArray(findings)) {
      return NextResponse.json(
        { error: "Invalid findings" },
        { status: 400 }
      );
    }

    const summary = await generateSummary(
      findings,
      monthlySavings
    );

    return NextResponse.json({
      summary:
        typeof summary === "string"
          ? summary
          : summary.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      summary: getFallbackSummary(0),
      fallback: true,
    });
  }
}