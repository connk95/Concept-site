import HomeContent from "./content";
import { getHomeProjects } from "./lib/queries";
import "./globals.css";
import { NetworkContentBoxType } from "./types/types";

export default async function Page() {
  const projects: NetworkContentBoxType[] = await getHomeProjects();
  return <HomeContent projects={projects} />;
}
