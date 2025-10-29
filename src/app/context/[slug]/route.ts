import { NextResponse } from "next/server"
import { llmText } from "@/patterns/llmdata"

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  // Await params because Next.js types it as a Promise
  const { slug } = await context.params

  const componentData = llmText[slug as keyof typeof llmText]

  if (!componentData) {
    return NextResponse.json(
      { error: `Component "${slug}" not found` },
      { status: 404 }
    )
  }

  return new NextResponse(JSON.stringify(componentData, null, 2), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
