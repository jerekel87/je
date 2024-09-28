import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { getProjectsIndustries } from "@/sanity/query/project";
import { Loader } from "lucide-react";
import useSWR from "swr";

function IndustrySelector({
  onChange,
  className,
}: {
  className?: string;
  onChange: (value: string) => void;
}) {
  const { data, isLoading } = useSWR("getProjectsIndustries", () =>
    getProjectsIndustries()
  );
  return (
    <Select onValueChange={onChange}>
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
        {isLoading && (
          <SelectItem value="loading" className="px-5">
            <Loader className="animate-spin size-4 text-muted-foreground" />
          </SelectItem>
        )}
        {data &&
          data.map((projectIndustry) => (
            <SelectItem
              key={projectIndustry._id}
              value={projectIndustry._id}
              className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
            >
              {projectIndustry.title}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

export default IndustrySelector;
