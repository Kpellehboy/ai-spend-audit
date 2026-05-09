// import { NextResponse } from "next/server";

// import { generateSummary } from "@/lib/ai/generate-summary";

// import { getFallbackSummary } from "@/lib/ai/fallback-summary";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const {
//       findings,
//       monthlySavings,
//     } = body;

//     if (!Array.isArray(findings)) {
//       return NextResponse.json(
//         {
//           error: "Invalid findings",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     try {
//       const summary =
//         await generateSummary(
//           findings,
//           monthlySavings
//         );

//       return NextResponse.json({
//         summary,
//         fallback: false,
//       });
//     } catch {
//       return NextResponse.json({
//         summary:
//           getFallbackSummary(
//             monthlySavings
//           ),

//         fallback: true,
//       });
//     }
//   } catch (error) {
//     console.error(
//       "Summary route error:",
//       error
//     );

//     return NextResponse.json(
//       {
//         error:
//           "Unable to generate summary",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    summary:
      "Your organization may have opportunities to reduce AI tooling costs through vendor consolidation and seat optimization.",
  });
}