"use client";

import React from "react";
import { Project } from "@/sanity.types";
import Marquee from "react-fast-marquee";
import ProjectItem from "./ProjectItem";

function ProjectMarquee({ projects }: { projects: Project[] }) {
  return (
    <div>
      <Marquee
        loop={0}
        pauseOnClick
        pauseOnHover
        autoFill
        className="max-w-[2560px] mx-auto"
      >
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-[200px] md:w-[350px] xl:w-[400px] shrink-0"
          >
            <ProjectItem key={project._id} project={project} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default ProjectMarquee;
