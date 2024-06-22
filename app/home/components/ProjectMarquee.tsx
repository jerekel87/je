"use client";

import React from "react";
import { Project } from "@/sanity.types";
import Marquee from "react-fast-marquee";
import ProjectItem from "./ProjectItem";
import { AspectRatio } from "@/app/(shared)/components/ui/aspect-ratio";

function ProjectMarquee({ projects }: { projects: Project[] }) {
  return (
    // <Swiper
    //   loop={true}
    //   slidesPerView={1.5}
    //   spaceBetween={0}
    //   speed={2500}
    //   autoplay={{ delay: 0 }}
    //   modules={[FreeMode, Autoplay]}
    //   style={{
    //     // @ts-ignore
    //     "--swiper-wrapper-transition-timing-function": "linear",
    //   }}
    //   breakpoints={{
    //     640: {
    //       slidesPerView: 2,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //     },
    //     1024: {
    //       slidesPerView: 6,
    //     },
    //   }}
    // >
    //   {projects.map((project, i) => (
    //     <SwiperSlide key={i}>
    //       <ProjectItem key={project._id} project={project} />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <Marquee
      loop={0}
      pauseOnClick
      pauseOnHover
      autoFill
      className="max-w-[2560px] bg-red-400 mx-auto"
    >
      <div className="w-screen max-w-[2560px] bg-orange-400 flex">
        {projects.map((project) => (
          <div key={project._id} className="w-1/2 md:w-1/4 lg:w-1/6 shrink-0">
            <ProjectItem key={project._id} project={project} />
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default ProjectMarquee;
