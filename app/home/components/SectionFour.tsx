import { urlForImage } from "@/sanity/lib/image";
import { getProjects } from "@/sanity/query/project";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

async function SectionFour() {
  noStore();
  const projects = await getProjects({ limit: 5 });
  return (
    <section className="relative pt-[70px] lg:pt-[140px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
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
          <h1 className="text-[40px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            AWESOME PROJECTS
          </h1>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] mb-[60px] lg:mb-[124px] text-center">
            We are your quintessential five-star creative design agency, fully
            equipped and ready to expertly tackle any project you envision.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        {projects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SectionFour;
