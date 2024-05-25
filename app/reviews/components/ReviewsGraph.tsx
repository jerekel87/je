import { Progress } from "@/app/(shared)/components/ui/progress";

function ReviewsGraph() {
  return (
    <div className="flex flex-col gap-4 lg:gap-[25px] mt-[40px]">
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
}

function Bar() {
  return (
    <div className="flex items-center gap-[18px]">
      <span className="text-sm lg:text-base font-bold whitespace-nowrap">
        5 Star
      </span>
      <Progress
        value={33}
        className="w-full lg:max-w-[306px] h-[11px] rounded-[2px] bg-[#e8e7e6]"
      />
      <span className="text-sm lg:text-base font-medium">(1,589)</span>
    </div>
  );
}

export default ReviewsGraph;
