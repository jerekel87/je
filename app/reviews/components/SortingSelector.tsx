import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";

function SortingSelector({ onChange }: { onChange: (value: string) => void }) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full lg:w-[282px] text-[#53545c]">
        <SelectValue placeholder="Most recent" />
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
          value="Most Recent"
        >
          Most Recent
        </SelectItem>
        <SelectItem
          className="p-3 text-sm lg:text-lg w-[calc(100vw-40px)] lg:w-auto"
          value="Oldest First"
        >
          Oldest First
        </SelectItem>
        {/* <SelectItem value="Alphabetical (A-Z)">Alphabetical (A-Z)</SelectItem>
        <SelectItem value="Alphabetical (Z-A)">Alphabetical (Z-A)</SelectItem> */}
      </SelectContent>
    </Select>
  );
}

export default SortingSelector;
