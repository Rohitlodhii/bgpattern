import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pen Tool",
  description: "Draw custom paths with a pen tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen w-screen p-4">{children}</div>;
}
