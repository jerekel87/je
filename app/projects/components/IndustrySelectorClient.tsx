"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { Industry } from "@/sanity.types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function IndustrySelectorClient({
  className,
  options,
}: {
  className?: string;
  options: Industry[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleIndustryChange = (industry: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("industry", industry);

    router.replace(`/projects?${params.toString()}`);
  };
  return (
    <Select
      onValueChange={handleIndustryChange}
      defaultValue={searchParams.get("industry") || ""}
    >
      <SelectTrigger
        className={cn("w-full lg:w-[282px] text-[#53545c]", className)}
      >
        <SelectValue placeholder="Industry" />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
        className="max-h-[300px]"
      >
        <SelectItem
          value="all"
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
        >
          All
        </SelectItem>
        {options.map((projectIndustry) => (
          <SelectItem
            key={projectIndustry._id}
            value={projectIndustry.slug?.current || ""}
            className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          >
            {projectIndustry.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default IndustrySelectorClient;
