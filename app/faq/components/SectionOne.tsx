import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/(shared)/components/ui/accordion";
import Image from "next/image";

function SectionOne() {
  return (
    <section className="relative pt-[70px] lg:pt-[140px] pb-[124px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[791px]">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <Image
              src="/assets/images/you-got-questions@3x.webp"
              alt="You got questions"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[40px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            WE GOT ANSWERS
          </h1>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] mb-[60px] lg:mb-[70px] text-center text-[#53545c]">
            Your logo and branding can either hold you back or allow you to
            scale your company as far as you want.
          </p>
        </div>
        {/* General faq */}
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[100px]">
          <div className="lg:max-w-[172px]">
            <h2 className="font-portlin text-[30px] lg:text-[40px] leading-none">
              General
            </h2>
            <p className="mt-3 lg:mt-[18px] text-xs lg:text-sm text-muted-foreground">
              General questions relating to our services.
            </p>
          </div>
          <div className="border border-input rounded self-start w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What file will I receive after the project is complete?
                </AccordionTrigger>
                <AccordionContent>
                  You will receive your final logo files in AI, EPS, PDF, SVG,
                  JPG and PNG. Some designers only provide JPG and or PNG which
                  are not vector file types. Unlike those designers, we provide
                  you with full vector files that allow you to resize your logo
                  to any height and or width without the loss of quality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
