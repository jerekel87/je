import Reviews from "../(shared)/components/Reviews";
import Header from "./components/Header";
import Projects from "./components/Projects";

function ProjectsPage() {
  return (
    <main>
      <Header />
      <Projects />
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
