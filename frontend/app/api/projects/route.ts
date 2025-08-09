import { NextRequest, NextResponse } from "next/server";
import pool from "../../lib/db"; // fix the relative path if needed

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = await context.params;

  try {
    const result = await pool.query(
      "SELECT * FROM public.projects WHERE slug = $1",
      [slug]
    );

    if (result.rows.length === 0) {
      return new NextResponse("Project not found", { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error("Database error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
