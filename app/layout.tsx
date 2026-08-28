import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athlete Training Planner",
  description: "Plan and organize your athletic training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b p-4">
          <div className="flex flex-wrap gap-4">
            <Link href="/">Dashboard</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/tournaments">Tournaments</Link>
            <Link href="/goals">Goals</Link>
            <Link href="/recovery">Recovery</Link>
            <Link href="/settings">Settings</Link>
          </div>
        </nav>

        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}