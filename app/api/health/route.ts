import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "Athlete Training Planner",
    timestamp: new Date().toISOString(),
  });
}