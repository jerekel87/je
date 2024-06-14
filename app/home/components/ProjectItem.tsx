"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({ project }: { project: Project }) {
  const pathname = usePathname();

  const src = urlForImage(project.mainImage as any);
  return (
    <Link
      href={`/projects/${project.slug?.current}`}
      key={project._id}
      className="relative w-full pb-[85.5%] bg-muted last:col-span-2 lg:last:col-span-1"
    >
      <Image
        src={src}
        fill
        alt={project.title || ""}
        className="object-cover"
        quality={100}
      />
    </Link>
  );
}

export default ProjectItem;
