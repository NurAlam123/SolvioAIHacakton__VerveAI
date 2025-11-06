import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { rubik } from "@/fonts";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VerveAI",
  description:
    "VerveAI is the digital intuition engine for soft skills. We analyze multimodal input like voice and video to measure EQ, mindset, and collaboration signals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
