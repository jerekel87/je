import { Button } from "@/app/(shared)/components/ui/button";
import Input from "@/app/(shared)/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import { cn } from "@/app/(shared)/lib/utils";
import { HiCheckCircle } from "react-icons/hi2";

function RevenueCalculator() {
  const data = true;
  return (
    <>
      <form
        className={cn(
          "bg-white flex flex-col lg:flex-row p-4 lg:p-[30px] gap-4 lg:gap-[30px] rounded lg:rounded-[10px]",
          !data && "lg:w-full"
        )}
      >
        {data && (
          <div className="rounded-[8px] bg-[#f9f8f3] px-4 py-5 lg:p-[74px] grow">
            <h1 className="font-portlin text-xl lg:text-[40px] leading-none">
              ESTIMATED NEW ANNUAL REVENUE
            </h1>
            <span className="font-portlin text-6xl lg:text-[120px] leading-[.5] mt-[30px] lg:mt-[42px] inline-block ">
              $750,098
            </span>
            <ul className="text-xs lg:text-lg mt-[30px] lg:mt-[40px] flex flex-col gap-2">
              <li className="flex items-start lg:items-center">
                <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
                <span className="font-bold">Percent Increase:&nbsp;</span>
                <span className="text-[#4fba00]">▲</span>
                <span>89% conservatively</span>
              </li>
              <li className="flex items-start lg:items-center">
                <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
                <span className="font-bold">Added Revenue:&nbsp;</span>
                <span className="text-[#4fba00]">▲</span>
                <span>$31,150 annually</span>
              </li>
              <li className="flex items-start lg:items-center">
                <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
                <span className="font-bold">Recommendation:&nbsp;</span>
                <span className="whitespace-nowrap">
                  Order our <br className="lg:hidden" />
                  <a className="font-bold border-b-2 border-primary inline-block leading-none">
                    Infinite Brand Package
                  </a>
                  👇
                </span>
              </li>
              <li className="flex items-start lg:items-center">
                <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[15px] shrink-0 text-[#4fba00]" />
                <span className="font-bold">ROI:&nbsp;</span>
                <span>46% Return On Your Investment 😮</span>
              </li>
            </ul>
          </div>
        )}
        <div className="w-full lg:max-w-[415px] rounded lg:rounded-[10px] flex flex-col gap-4 lg:gap-[20px]">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Current Annual Revenue"
            leftSlot={<Input.LeftSlot>$</Input.LeftSlot>}
          />
          <div>
            <Input
              type="number"
              placeholder="Annual Revenue Goal"
              leftSlot={<Input.LeftSlot>$</Input.LeftSlot>}
            />
            <p className="text-[10px] lg:text-xs text-[#53545c] mt-1 lg:mt-3">
              *Enter your target annual revenue goal for your business
            </p>
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Branding Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
          <Button variant={data ? "secondary" : "default"}>
            {data ? "RE-CALCULATE" : "CALCULATE NOW"}
          </Button>
        </div>
      </form>
      {data && (
        <p className="px-4 lg:px-0 text-muted-foreground text-xs mt-[24px]">
          None of the numbers shown above are guaranteed, we can only provide
          you the creatives needed to grow your business, it&apos;s up to you on
          how you implement the creatives we do in to your business.
        </p>
      )}
    </>
  );
}

export default RevenueCalculator;
