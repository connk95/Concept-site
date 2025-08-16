import pool from "./db";
import { NetworkContentBoxType } from "../types/types";

export async function getHomeProjects(): Promise<NetworkContentBoxType[]> {
  const result = await pool.query(
    "SELECT * FROM public.projects ORDER BY id ASC"
  );
  return result.rows;
}

export async function getProjectBySlugWithTech(
  slug: string
): Promise<NetworkContentBoxType | null> {
  const result = await pool.query(
    `
    SELECT p.*,
           ARRAY_AGG(t.image_url) AS tech_images
    FROM public.projects p
    LEFT JOIN public.project_tech pt
      ON p.id = pt.project_id
    LEFT JOIN public.tech t
      ON t.id = ANY(pt.tech_ids)
    WHERE p.slug = $1
    GROUP BY p.id
    `,
    [slug]
  );

  if (result.rows.length === 0) return null;

  const row = result.rows[0];
  return {
    ...row,
    imageUrl: row.image_url,
    techImages: row.tech_images.filter(Boolean), // remove nulls if any
  };
}

export async function getAllTech(): Promise<NetworkContentBoxType[] | null> {
  const result = await pool.query(
    "SELECT * FROM public.tech WHERE (hidden_flag IS NULL OR hidden_flag = false) ORDER BY priority ASC"
  );

  if (result.rows.length === 0) return null;
  return result.rows.map((row) => ({
    ...row,
    imageUrl: row.image_url,
  }));
}
