import Image from "next/image";
import SectionSevenMasonry from "./SectionSevenMasonry";
import { Button } from "@/app/(shared)/components/ui/button";

function SectionSeven() {
  return (
    <section className="relative pt-[70px] lg:pt-[140px] pb-[124px] bg-[#f9f8f3]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-12.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[791px]">
          <p className="text-[#ffcf25] font-guthen-bloots-personal-use text-base lg:text-[36px] text-center leading-none">
            your industry peers&apos;
          </p>
          <h2 className="text-[40px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            SUCCESS STORIES
          </h2>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] mb-[60px] lg:mb-[70px] text-center text-[#53545c]">
            At Jeremy Ellsworth Designs LLC, we are committed to your success.
            <br className="hidden lg:block" />
            We believe that our success lies in your success, and we are
            dedicated to helping you achieve it.
          </p>
        </div>
        <div>
          <SectionSevenMasonry />
        </div>
        <div className="mx-auto max-w-[791px] text-center">
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] text-[#53545c]">
            With over{" "}
            <strong className="text-foreground">1,500+ 5/5 star reviews</strong>{" "}
            across Facebook,
            <br className="hidden lg:block" />
            Google Business page & BBB
          </p>
          <Button variant="outline" className="mt-[30px] lg:mt-[40px]">
            ALL STORIES
          </Button>
        </div>
      </div>
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[2]">
        <Image
          src="/assets/images/shape-7-copy-14.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div> */}
    </section>
  );
}

export default SectionSeven;
