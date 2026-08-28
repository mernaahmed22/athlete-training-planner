import Link from "next/link";
const appName =
  process.env.NEXT_PUBLIC_APP_NAME || "Athlete Training Planner";
const sessions = [
  {
    day: "MON",
    activity: "Squash",
    time: "5:00 PM",
    status: "Completed",
  },
  {
    day: "TUE",
    activity: "Team Training",
    time: "6:00 PM",
    status: "Completed",
  },
  {
    day: "WED",
    activity: "Recovery",
    time: "Rest day",
    status: "Rest",
  },
  {
    day: "THU",
    activity: "Fitness",
    time: "5:00 PM",
    status: "Upcoming",
  },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold text-primary">
        {appName.toUpperCase()}
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Good afternoon, Athlete
        </h1>

        <p className="mt-2 text-secondary">
          Stay consistent. Track your training. Perform at your best.
        </p>
      </header>

      {/* Summary cards */}
      <section
        aria-label="Training summary"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        <SummaryCard
          label="Training Load"
          value="6.5 hrs"
          description="This week"
          icon="↗"
        />

        <SummaryCard
          label="Sessions"
          value="5 / 6"
          description="Completed"
          icon="✓"
        />

        <SummaryCard
          label="Recovery"
          value="82%"
          description="Readiness"
          icon="♥"
        />

        <SummaryCard
          label="Next Event"
          value="12 days"
          description="Until tournament"
          icon="◆"
        />
      </section>

      {/* Main grid */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Weekly schedule */}
        <section className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">This Week</h2>
              <p className="text-sm text-secondary">
                Your upcoming training sessions
              </p>
            </div>

            <Link
              href="/schedule"
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View schedule →
            </Link>
          </div>

          <div className="space-y-2">
            {sessions.map((session) => (
              <div
                key={`${session.day}-${session.activity}`}
                className="flex items-center gap-4 rounded-xl border border-border p-4 hover:bg-muted"
              >
                <div className="w-12 text-center">
                  <p className="text-xs font-bold text-secondary">
                    {session.day}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="font-semibold">{session.activity}</p>
                  <p className="text-sm text-secondary">
                    {session.time}
                  </p>
                </div>

                <StatusBadge status={session.status} />
              </div>
            ))}
          </div>
        </section>

        {/* Tournament */}
        <section className="rounded-2xl border border-border bg-white p-5 shadow-sm">
          <div className="mb-5">
            <p className="text-sm font-semibold text-primary">
              NEXT TOURNAMENT
            </p>
            <h2 className="mt-1 text-xl font-bold">
              German Open
            </h2>
          </div>

          <div className="rounded-xl bg-muted p-5">
            <p className="text-sm text-secondary">September 12–15, 2026</p>
            <p className="mt-1 font-semibold">Germany</p>

            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
                PSA World Tour
              </span>

              <span className="text-sm font-semibold text-primary">
                12 days away
              </span>
            </div>
          </div>

          <Link
            href="/tournaments"
            className="mt-4 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark"
          >
            View tournaments
          </Link>
        </section>
      </div>

      {/* Goals */}
      <section className="mt-6 rounded-2xl border border-border bg-white p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">
              PERFORMANCE
            </p>
            <h2 className="mt-1 text-lg font-bold">
              Current Goals
            </h2>
          </div>

          <Link
            href="/goals"
            className="text-sm font-semibold text-primary hover:text-primary-dark"
          >
            View goals →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <GoalProgress
            label="PSA Ranking"
            current="260"
            target="220"
            progress={72}
          />

          <GoalProgress
            label="Weekly Training"
            current="6"
            target="7 sessions"
            progress={86}
          />
        </div>
      </section>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  description,
  icon,
}: {
  label: string;
  value: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-secondary">{label}</p>

        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-sm font-bold text-primary"
        >
          {icon}
        </span>
      </div>

      <p className="mt-4 text-2xl font-bold tracking-tight">
        {value}
      </p>

      <p className="mt-1 text-sm text-secondary">{description}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "Completed") {
    return (
      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-success">
        Completed
      </span>
    );
  }

  if (status === "Upcoming") {
    return (
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
        Upcoming
      </span>
    );
  }

  return (
    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-secondary">
      Rest
    </span>
  );
}

function GoalProgress({
  label,
  current,
  target,
  progress,
}: {
  label: string;
  current: string;
  target: string;
  progress: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-semibold">{label}</span>
        <span className="text-sm text-secondary">
          {current} → {target}
        </span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label} progress`}
      >
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-right text-xs font-medium text-secondary">
        {progress}% complete
      </p>
    </div>
  );
}