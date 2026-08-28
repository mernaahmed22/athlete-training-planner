"use client";

import { useEffect, useState } from "react";

type HealthData = {
  status: string;
  service: string;
  timestamp: string;
};

export default function HealthPage() {
  const [data, setData] = useState<HealthData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("/api/health");

        if (!response.ok) {
          throw new Error("Health check failed");
        }

        const result: HealthData = await response.json();
        setData(result);
      } catch {
        setError(true);
      }
    }

    checkHealth();
  }, []);

  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold">Health Check</h1>

      <p className="mt-2 text-secondary">
        Checking whether the application is healthy.
      </p>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-white p-6">
          <p className="font-semibold">Status: Unhealthy</p>
          <p className="mt-2">
            The application could not complete the health check.
          </p>
        </div>
      )}

      {data && (
        <div className="mt-6 rounded-lg border border-border bg-white p-6">
          <p>
            <strong>Status:</strong> {data.status}
          </p>

          <p className="mt-2">
            <strong>Service:</strong> {data.service}
          </p>

          <p className="mt-2">
            <strong>Checked at:</strong>{" "}
            {new Date(data.timestamp).toLocaleString()}
          </p>
        </div>
      )}
    </main>
  );
}