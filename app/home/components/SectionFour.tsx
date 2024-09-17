import Image from "next/image";
import ProjectMarquee from "./ProjectMarquee";
import ProjectItem from "./ProjectItem";

export const revalidate = 60;

async function SectionFour({ projects }: { projects: any[] }) {
  return (
    <section className="relative pt-[70px] lg:pt-[140px] bg-[#f9f8f3]">
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div> */}
      <div className="container mx-auto">
        <div className="mx-auto max-w-[640px]">
          <div className="relative w-[100px] h-[34px] lg:w-[153px] lg:h-[52px] mx-auto">
            <Image
              src="/assets/images/unique-brands@3x.webp"
              alt="Unique brands"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[50px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            AWESOME PROJECTS
          </h1>
          <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[40px] mb-[60px] lg:mb-[124px] text-center">
            Jeremy Ellsworth Designs LLC is a full-service design agency
            catering to businesses and individuals, with a focus on delivering
            high-quality, professional design solutions.
          </p>
        </div>
      </div>

      <div className="hidden lg:block -bottom-[8px] relative">
        <ProjectMarquee projects={projects} />
      </div>

      <div className="lg:hidden grid grid-cols-2">
        {projects.slice(0, 4).map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SectionFour;
