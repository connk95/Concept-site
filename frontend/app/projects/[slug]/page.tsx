import { notFound } from "next/navigation";
import { ProjectContent } from "./content";
import { getProjectBySlugWithTech } from "../../lib/queries";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = await getProjectBySlugWithTech(slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
