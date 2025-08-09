import ClientLayout from "./ClientLayout";
import { getHomeProjects } from "./lib/queries";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getHomeProjects();

  return (
    <html>
      <body>
        <ClientLayout projects={projects}>{children}</ClientLayout>
      </body>
    </html>
  );
}
