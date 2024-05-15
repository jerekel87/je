import StarRating from "@/app/(shared)/components/StarRating";
import { Button } from "@/app/(shared)/components/ui/button";
import Image from "next/image";

function SectionSix() {
  return (
    <section className="relative py-[70px] lg:py-[140px] bg-primary">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-11.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
        <div>
          <h2 className="text-[40px] lg:text-[100px] font-portlin leading-[0.9] text-balance text-white">
            TRANSFORMING
            <br /> <span className="text-secondary">IDEAS</span> INTO
            <span className="text-secondary"> MASTERPIECES</span>.
          </h2>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] text-white">
            We are your quintessential five-star creative design agency, fully
            equipped and ready to expertly tackle any project you envision.
          </p>
          <Button variant="secondary" className="mt-[30px] lg:mt-[40px]">
            GET STARTED
          </Button>
          <p className="text-[#a7a7bc] mt-3 lg:mt-[14px] text-xs lg:text-sm">
            100% original designs, everytime!
          </p>
        </div>
        <div className="w-full pb-[100%] bg-white rounded lg:rounded-[10px] overflow-hidden relative">
          <Image
            src="/assets/images/sketch-concept.png"
            fill
            alt="Sketch concept"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
