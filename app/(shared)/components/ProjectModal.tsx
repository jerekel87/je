"use client";

import { useSearchParams } from "next/navigation";
import { Dialog, DialogContent } from "./ui/dialog";
import { getProject } from "@/sanity/query/project";
import useSWR from "swr";

function ProjectModal() {
  const searchParams = useSearchParams();

  const { data } = useSWR(
    searchParams.get("projectSlug") ? "getProject" : null,
    () => getProject({ slug: searchParams.get("projectSlug") || "" })
  );

  if (data)
    return (
      <Dialog open={true}>
        <DialogContent className="max-w-screen overflow-y-scroll max-h-screen bg-transparent pt-[100px] border-none px-0 !rounded-none">
          <div className="h-[2000px] bg-white">{data.title}</div>
        </DialogContent>
      </Dialog>
    );

  return null;
}

export default ProjectModal;
