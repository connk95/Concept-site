import { notFound } from "next/navigation";
import ProjectContent from "./content";
import { getProjectBySlug } from "../../lib/queries";
import { ContentBoxType } from "../../types/types";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: ContentBoxType | null = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
