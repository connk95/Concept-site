import { TechnologyContent } from "./content";
import { NetworkContentBoxType } from "../types/types";
import { getAllTech } from "../lib/queries";
import { notFound } from "next/navigation";

export default async function TechnologyPage() {
  const techStack: NetworkContentBoxType[] | null = await getAllTech();

  if (!techStack) {
    notFound();
  }
  return <TechnologyContent techStack={techStack} />;
}
