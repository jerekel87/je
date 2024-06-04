import { Button } from "@/app/(shared)/components/ui/button";
import { Article } from "@/sanity.types";
import Image from "next/image";

function SectionFour({ article }: { article: Article }) {
  return (
    <section className="mt-[134px]">
      <div className="relative flex justify-center">
        <div className="border-[1px] border-muted absolute top-1/2 w-full z-[-1]" />
        <p className="bg-white px-4 lg:px-8 w-max font-portlin text-xl lg:text-[40px]">
          NEW ARTICLES EVERY WEEK!
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
        <p className="text-xs lg:text-sm text-center text-muted-foreground mt-3 leading-none">
          We are your quintessential five-star creative design agency
        </p>
        <Button className="mt-[37px]">REQUEST A QUOTE</Button>
      </div>
      <p className="lg:px-[58px] mt-[80px] lg:mt-[90px] font-portlin text-[40px] lg:text-[80px] leading-[.9]">
        10X YOUR REVENUE THROUGH THE POWER OF BRANDING
      </p>
    </section>
  );
}

export default SectionFour;
