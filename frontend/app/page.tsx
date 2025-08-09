import HomeContent from "./content";
import { getHomeProjects } from "./lib/queries";
import "./globals.css";
import { ContentBoxType } from "./types/types";

export default async function Page() {
  const projects: ContentBoxType[] = await getHomeProjects();
  return <HomeContent projects={projects} />;
}
