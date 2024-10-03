import { Button } from "@/app/(shared)/components/ui/button";
import Categories from "./Categories";

function Aside() {
  return (
    <aside className="lg:max-w-[300px] hidden lg:block pt-[10px]">
      <div className="p-[40px] bg-secondary rounded-[8px] flex flex-col items-center">
        <h2 className="leading-none text-[20px] font-bold">
          Articles to Your Inbox
        </h2>
        <p className="leading-snug mt-[12px] text-[15px] text-center">
          Get our article posts delivered to your email every week.
        </p>
        <Button
          size="sm"
          className="mt-[24px] w-full max-w-[165px] font-mona-sans font-bold"
        >
          Subscribe
        </Button>
      </div>
      <Categories />
      <div className="border-t border-input pt-[30px] mt-[40px]">
        <h2 className="font-portlin uppercase tracking-[0.5px] text-[30px] leading-none">
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
