import { NextResponse } from "next/server";
import pool from "../../lib/db"; // adjust path if needed

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT * FROM public.projects ORDER BY id ASC"
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Database query failed" },
      { status: 500 }
    );
  }
}
