import pool from "./db";
import { NetworkContentBoxType } from "../types/types";

export async function getHomeProjects(): Promise<NetworkContentBoxType[]> {
  const result = await pool.query(
    "SELECT * FROM public.projects ORDER BY id ASC"
  );
  return result.rows;
}

export async function getProjectBySlug(
  slug: string
): Promise<NetworkContentBoxType | null> {
  const result = await pool.query(
    "SELECT * FROM public.projects WHERE slug = $1",
    [slug]
  );

  if (result.rows.length === 0) return null;
  const row = result.rows[0];
  return {
    ...row,
    imageUrl: row.image_url,
  };
}

export async function getAllTech(): Promise<NetworkContentBoxType[] | null> {
  const result = await pool.query("SELECT * FROM public.tech");

  if (result.rows.length === 0) return null;
  return result.rows.map((row) => ({
    ...row,
    imageUrl: row.image_url,
  }));
}
