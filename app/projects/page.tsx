import Reviews from "../(shared)/components/Reviews";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "../(shared)/components/Footer";
import MainHeader from "../(shared)/components/Header";
import { getProjects } from "@/sanity/query/project";
import { getProjectsPageSetting } from "@/sanity/query/projectsPage";

export const revalidate = 60;

async function ProjectsPage() {
  const projects = await getProjects();
  const projectsPageSetting = await getProjectsPageSetting();

  return (
    <>
      <MainHeader />
      <main>
        <Header articleLink={projectsPageSetting?.articleLink || ""} />
        <Projects initialProjects={projects} />
        <Reviews
          subheader={
            <Reviews.Subheader>
              Don&apos;t take our word for it, we let our customers do the
              talking for us as there is no better way to let you know how good
              we really are then by you hearing it directly from them.
            </Reviews.Subheader>
          }
          footerButton={
            <Reviews.FooterButton>MORE STORIES</Reviews.FooterButton>
          }
        />
      </main>
      <Footer />
    </>
  );
}

export default ProjectsPage;
