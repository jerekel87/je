import { Button } from "@/app/(shared)/components/ui/button";
import Image from "next/image";

function SectionOne() {
  return (
    <section className="max-w-[790px]">
      <article className="border-b border-muted pb-[45px]">
        <header>
          <h1 className="text-[40px] lg:text-[60px] font-portlin leading-[.9]">
            10x your revenue through the power of branding
          </h1>
        </header>
        <div className="w-full pb-[75%] relative mt-[40px] rounded-[8px] overflow-hidden">
          <Image
            src="/assets/images/article-placeholder.webp"
            alt="article image"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-base text-muted-foreground lg:text-lg mt-4 lg:mt-[40px]">
          Gone are the days of aesthetics trumping experience. Today, web design
          is all about crafting immersive experiences that connect, captivate,
          motivate, and delight.
        </p>
      </article>
      <article className="flex items-start lg:items-center gap-[10px] lg:gap-[38px] mt-4 lg:mt-[40px] border-b border-muted pb-4 lg:pb-[40px]">
        <div className="w-full lg:w-[75%]">
          <div className="w-full pb-[75%] relative rounded-[8px] overflow-hidden">
            <Image
              src="/assets/images/article-placeholder.webp"
              alt="article image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <header>
            <h2 className="text-base lg:text-[40px] font-portlin leading-none line-clamp-2">
              10x your revenue through the power of branding
            </h2>
          </header>
          <p className="leading-[1.6] text-xs lg:text-sm mt-[10px] lg:mt-[26px] text-muted-foreground line-clamp-3">
            We are the leading destination to find & showcase creative work and
            home to the world&apos;s best design professionals.
          </p>
        </div>
      </article>
      <div className="flex justify-center mt-[46px]">
        <Button variant="outline">SHOW MORE</Button>
      </div>
    </section>
  );
}

export default SectionOne;
