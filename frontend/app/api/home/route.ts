import { NextResponse } from "next/server";
import { getHomeProjects } from "../../lib/queries";

export async function GET() {
  try {
    const projects = await getHomeProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}
