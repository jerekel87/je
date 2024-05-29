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
      <SelectContent>
        <SelectItem value="all">All Platforms</SelectItem>
        {data &&
          data.map((reviewPlatform) => (
            <SelectItem key={reviewPlatform._id} value={reviewPlatform._id}>
              {reviewPlatform.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
}

export default PlatformSelector;
