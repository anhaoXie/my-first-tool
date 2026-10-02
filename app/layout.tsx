import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My First Tool",
  description: "Anhao's first tool, shipped on Day 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}