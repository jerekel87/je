import Image from "next/image";
import { Button } from "./ui/button";

function BlockA({ title }: { title: string }) {
  return (
    <div>
      <div className="relative flex justify-center">
        <div className="border-[1px] border-muted absolute top-1/2 w-full z-[-1]" />
        <p className="bg-white px-4 lg:px-8 w-max font-portlin text-xl lg:text-[40px]">
          {title}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/assets/images/je-logo-bw.webp"
          width="48"
          height="48"
          alt="JE logo black and white"
          className="mt-[30px] lg:mt-[38px]"
        />
        <p className="font-bold text-base lg:text-lg text-muted-foreground mt-[24px] leading-none">
          Jeremy Ellsworth Designs LLC
        </p>
        <p className="text-xs lg:text-sm text-center text-muted-foreground mt-1 leading-none">
          We are your quintessential five-star creative design agency
        </p>
        <Button className="mt-[37px]">REQUEST A QUOTE</Button>
      </div>
    </div>
  );
}

export default BlockA;
