// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Mặc định cho toàn site
export const metadata: Metadata = {
  title: {
    template: "%s | OrgaNice",
    default: "OrgaNice - The Ultimate Tab Manager",
  },
  description:
    "Organize your browser tabs with nested folders, cloud sync, and session history.",

  verification: {
    google: "z0MzreLSSGp5wnWK2gRd904F5PmGmYbRsH7bVm4Qv1I",
  },
  // -------------------------
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
