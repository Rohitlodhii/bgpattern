import { NextResponse } from "next/server";

export async function GET() {
  const contextText = `
This is the context for bgpattern.vercel.app

Project Name: BGPattern
Description: A customizable background pattern generator built with Next.js.
It allows users to edit parameters like dot spacing, radius, opacity, gradients, etc.
The project uses Zustand for state management and provides a live preview.

Public Data Sources:
- https://bgpattern.vercel.app/r/dotspattern.json

Intended Use:
- This context route exists so LLMs and crawlers can understand the purpose and structure of the project.
- It contains no private data, only general metadata about the project.
`;

  return new NextResponse(contextText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
