// app/context/[slug]/route.ts
import { llmText } from "@/patterns/llmdata";
import { NextResponse } from "next/server";


export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Find matching component data
  const componentData = llmText[slug as keyof typeof llmText];

  if (!componentData) {
    return NextResponse.json(
      { error: `Component "${slug}" not found` },
      { status: 404 }
    );
  }

  // Return as plain text (stringified JSON)
  return new NextResponse(JSON.stringify(componentData, null, 2), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
