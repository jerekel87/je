import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { getReviewsPlatforms } from "@/sanity/query/review";
import useSWR from "swr";

function PlatformSelector({ onChange }: { onChange: (value: string) => void }) {
  const { data } = useSWR("getReviewsPlatforms", () => getReviewsPlatforms());
  return (
    <Select onValueChange={onChange} defaultValue="all">
      <SelectTrigger className="w-full lg:w-[282px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          // temporary workaround from https://github.com/shadcn-ui/ui/issues/1220
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
        className="max-h-[300px]"
      >
        <SelectItem
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          value="all"
        >
          All Platforms
        </SelectItem>
        {data &&
          data.map((reviewPlatform) => (
            <SelectItem
              className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
              key={reviewPlatform._id}
              value={reviewPlatform._id}
            >
              {reviewPlatform.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

export default PlatformSelector;
