"use client";

import { Button } from "@/app/(shared)/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import Image from "next/image";
import IndustrySelector from "./IndustrySelector";
import { useState } from "react";
import { Project } from "@/sanity.types";
import { getProjects } from "@/sanity/query/project";
import { cn } from "@/app/(shared)/lib/utils";
import { LoaderCircle } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

function Projects({ initialProjects }: { initialProjects: Project[] }) {
  const [projects, setProjects] = useState(initialProjects);
  const initialLastId =
    initialProjects.length >= 2
      ? initialProjects[initialProjects.length - 1]._id
      : "";
  const [lastId, setLastId] = useState(initialLastId);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);

  const loadMore = async () => {
    setIsLoadingMore(true);
    try {
      const projectsRes = await getProjects({ lastId });
      setProjects([...projects, ...projectsRes]);
      if (projectsRes.length > 0) {
        setLastId(projectsRes[projectsRes.length - 1]._id);
      } else {
        setLastId("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handleIndustryChange = async (value: string) => {
    setIsLoadingProjects(true);
    try {
      const projectsRes = await getProjects({
        industryId: value,
      });
      setProjects(projectsRes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingProjects(false);
    }
  };
  return (
    <section className="relative py-[40px] lg:py-[72px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 lg:px-[30px]">
        <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
          <h1 className="font-portlin text-3xl lg:text-[60px]">
            RECENT PROJECTS
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[30px]">
            <IndustrySelector onChange={handleIndustryChange} />
            <Select>
              <SelectTrigger className="w-full lg:w-[282px]">
                <SelectValue placeholder="Most recent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container px-0 lg:px-[30px]">
        {isLoadingProjects ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-[30px] mt-[30px]">
            {projects.map((project) => {
              const src = urlForImage(project.mainImage as any);
              return (
                <Link
                  href={`/projects/${project.slug?.current}`}
                  key={project._id}
                  className="relative w-full pb-[85.5%] bg-gray-400 lg:rounded-[8px] overflow-hidden"
                >
                  <Image
                    loader={() => src}
                    src={src}
                    fill
                    alt={project.title || ""}
                    className="object-contain"
                    quality={100}
                  />
                </Link>
              );
            })}
          </div>
        )}

        {lastId && (
          <div className="flex justify-center mt-[40px] lg:mt-[60px]">
            <Button
              variant="outline"
              className={cn("mx-auto", isLoadingMore && "!border-none")}
              onClick={loadMore}
              disabled={isLoadingMore}
            >
              {isLoadingMore ? "Loading..." : "LOAD MORE"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
