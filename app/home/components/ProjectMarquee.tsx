"use client";

import React from "react";
import { Project } from "@/sanity.types";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectItem from "./ProjectItem";

function ProjectMarquee({ projects }: { projects: Project[] }) {
  return (
    <Swiper
      loop={true}
      slidesPerView={1.5}
      spaceBetween={0}
      speed={2500}
      autoplay={{ delay: 0 }}
      modules={[FreeMode, Autoplay]}
      style={{
        // @ts-ignore
        "--swiper-wrapper-transition-timing-function": "linear",
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
    >
      {projects.map((project, i) => (
        <SwiperSlide key={i}>
          <ProjectItem key={project._id} project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectMarquee;
