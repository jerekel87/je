"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/app/(shared)/components/ui/aspect-ratio";

function ProjectItem({ project }: { project: Project }) {
  const pathname = usePathname();

  const src = urlForImage(project.mainImage as any);
  return (
    <Link
      href={`/projects/${project.slug?.current}`}
      key={project._id}
      className="relative w-full pb-[85.5%] bg-muted inline-block"
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
