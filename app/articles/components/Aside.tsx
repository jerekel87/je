import { Button } from "@/app/(shared)/components/ui/button";
import Categories from "./Categories";

function Aside() {
  return (
    <aside className="lg:max-w-[300px]">
      <div className="p-[40px] bg-secondary rounded-[8px] flex flex-col items-center">
        <h2 className="leading-none text-[20px] font-bold">
          Articles to Your Inbox
        </h2>
        <p className="leading-none mt-[18px] text-[15px] text-center">
          Get our article posts delivered to your email every week.
        </p>
        <Button size="sm" className="mt-[30px] w-full max-w-[165px]">
          Subscribe
        </Button>
      </div>
      <Categories />
      <div className="border-t border-input pt-[30px] mt-[40px]">
        <h2 className="font-portlin text-[30px] leading-none">
          POPULAR HASHTAGS
        </h2>
        <ul className="flex flex-col gap-3 text-muted-foreground text-sm lg:text-base mt-4 lg:mt-[28px]">
          <li>#brandidentity</li>
          <li>#logodesign</li>
          <li>#logodesigner</li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
