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
  description: "Plan, track, and optimize your athletic training.",
};

const navigation = [
  { href: "/", label: "Dashboard", icon: "⌂" },
  { href: "/schedule", label: "Schedule", icon: "▣" },
  { href: "/tournaments", label: "Tournaments", icon: "◆" },
  { href: "/goals", label: "Goals", icon: "◎" },
  { href: "/recovery", label: "Recovery", icon: "♥" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="min-h-screen bg-background lg:flex">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 shrink-0 border-r border-border bg-white lg:flex lg:flex-col">
            {/* Brand */}
            <div className="border-b border-border px-6 py-6">
              <Link
                href="/"
                className="block rounded-lg focus-visible:outline-none"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-primary">
                  ATHLETE
                </p>

                <p className="mt-1 text-xl font-bold tracking-tight text-foreground">
                  Training Planner
                </p>

                <p className="mt-1 text-xs text-secondary">
                  Performance workspace
                </p>
              </Link>
            </div>

            {/* Main navigation */}
            <nav
              aria-label="Main navigation"
              className="flex-1 px-3 py-6"
            >
              <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-wider text-secondary">
                Workspace
              </p>

              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-secondary hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-sm group-hover:bg-white"
                    >
                      {item.icon}
                    </span>

                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>

            {/* Bottom sidebar */}
            <div className="border-t border-border p-4">
              <Link
                href="/settings"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  A
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    Athlete
                  </p>

                  <p className="text-xs text-secondary">
                    Account settings
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-secondary"
                >
                  →
                </span>
              </Link>

              {/* System status */}
              <Link
                href="/health"
                className="mt-3 flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm text-secondary hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 font-bold text-success"
                >
                  ✓
                </span>

                <span className="flex-1">System Status</span>

                <span className="text-xs font-semibold text-success">
                  Healthy
                </span>
              </Link>
            </div>
          </aside>

          {/* Main application area */}
          <div className="flex min-h-screen min-w-0 flex-1 flex-col">
            {/* Mobile header */}
            <header className="border-b border-border bg-white px-4 py-4 lg:hidden">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="focus-visible:outline-none"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-primary">
                    ATHLETE
                  </p>

                  <p className="font-bold text-foreground">
                    Training Planner
                  </p>
                </Link>

                <Link
                  href="/settings"
                  aria-label="Open account settings"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  A
                </Link>
              </div>
            </header>

            {/* Page content */}
            <main className="flex-1">{children}</main>

            {/* Mobile navigation */}
            <nav
              aria-label="Mobile navigation"
              className="sticky bottom-0 z-10 border-t border-border bg-white px-2 py-2 lg:hidden"
            >
              <div className="grid grid-cols-6 gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-medium text-secondary hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="text-base"
                    >
                      {item.icon}
                    </span>

                    <span>{item.label}</span>
                  </Link>
                ))}

                {/* Mobile System Status */}
                <Link
                  href="/health"
                  className="flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-medium text-secondary hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span
                    aria-hidden="true"
                    className="text-base text-success"
                  >
                    ✓
                  </span>

                  <span>Status</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </body>
    </html>
  );
}