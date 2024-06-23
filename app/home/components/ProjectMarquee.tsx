"use client";

import React from "react";
import { Project } from "@/sanity.types";
import Marquee from "react-fast-marquee";
import ProjectItem from "./ProjectItem";

function ProjectMarquee({ projects }: { projects: Project[] }) {
  return (
    <Marquee
      loop={0}
      pauseOnClick
      pauseOnHover
      autoFill
      className="max-w-[2560px] mx-auto"
    >
      <div className="w-screen max-w-[2560px] flex">
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
