import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { getProjectsIndustries } from "@/sanity/query/project";
import useSWR from "swr";

function IndustrySelector({ onChange }: { onChange: (value: string) => void }) {
  const { data } = useSWR("getProjectsIndustries", () =>
    getProjectsIndustries()
  );
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full lg:w-[282px]">
        <SelectValue placeholder="Choose industry" />
      </SelectTrigger>
      <SelectContent>
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
