import { getProjects } from "@/sanity/query/project";
import Reviews from "../(shared)/components/Reviews";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { unstable_noStore as noStore } from "next/cache";

export const PROJECTS_LIMIT = 2;

async function ProjectsPage() {
  noStore();
  const projects = await getProjects({ limit: PROJECTS_LIMIT });

  return (
    <main>
      <Header />
      <Projects initialProjects={projects} />
      <Reviews
        subheader={
          <Reviews.Subheader>
            Don&apos;t take our word for it, we let our customers do the talking
            for us as there is no better way to let you know how good we really
            are then by you hearing it directly from them.
          </Reviews.Subheader>
        }
        footerButton={<Reviews.FooterButton>MORE STORIES</Reviews.FooterButton>}
      />
    </main>
  );
}

export default ProjectsPage;
