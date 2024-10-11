import React from "react";
import ProjectModal from "./components/ProjectModal";
import { getProject } from "@/sanity/query/project";
import { Metadata } from "next";
import { Project } from "@/sanity.types";
import { blockContentToPlainText } from "react-portable-text";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

type PageProps = {
  params: {
    slug: string;
  };
};

// Function to generate metadata dynamically
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project: Project = await getProject({ slug: params.slug });

  return {
    title: project.title,
    description:
      project.body && project.body.length > 0
        ? blockContentToPlainText(project.body as [any])
        : "",
    openGraph: {
      title: project.title,
      description:
        project.body && project.body.length > 0
          ? blockContentToPlainText(project.body as [any])
          : "",
      images: [
        {
          url: urlForImage(project.mainImage as any),
          width: 1200,
          height: 630,
        },
      ],
      url: `/projects/${project.slug?.current}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description:
        project.body && project.body.length > 0
          ? blockContentToPlainText(project.body as [any])
          : "",
      images: [urlForImage(project.mainImage as any)],
    },
  };
}

async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = await getProject({ slug });

  return <ProjectModal project={project} />;
}

export default ProjectPage;
