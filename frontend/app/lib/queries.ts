import pool from "./db";
import { ContentBoxType } from "../types/types";

export async function getHomeProjects(): Promise<ContentBoxType[]> {
  const result = await pool.query(
    "SELECT * FROM public.projects ORDER BY id ASC"
  );
  return result.rows;
}

export async function getProjectBySlug(
  slug: string
): Promise<ContentBoxType | null> {
  const result = await pool.query(
    "SELECT * FROM public.projects WHERE slug = $1",
    [slug]
  );

  if (result.rows.length === 0) return null;
  return result.rows[0];
}
