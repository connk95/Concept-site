import { NextResponse } from "next/server";
import pool from "../../lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM public.tech");

    if (result.rows.length === 0) {
      return new NextResponse("Tech not found", { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Database error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
