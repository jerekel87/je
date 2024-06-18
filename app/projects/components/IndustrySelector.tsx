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
      <SelectTrigger className={cn("w-full lg:w-[282px]", className)}>
        <SelectValue placeholder="Choose industry" />
      </SelectTrigger>
      <SelectContent>
        {isLoading && (
          <SelectItem value="loading" className="px-5">
            <Loader className="animate-spin size-4 text-muted-foreground" />
          </SelectItem>
        )}
        {data &&
          data.map((projectIndustry) => (
            <SelectItem key={projectIndustry._id} value={projectIndustry._id}>
              {projectIndustry.title}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

export default IndustrySelector;
