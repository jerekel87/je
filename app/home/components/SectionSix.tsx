"use client";

import Image from "next/image";
import SketchConcept from "./SketchConcept";
import { Button } from "@/app/(shared)/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import CalComModal from "@/app/(shared)/components/CalComModal";
import Link from "next/link";

function SectionSix({ sketchConcept }: { sketchConcept: any }) {
  return (
    <section className="relative py-[70px] lg:py-[140px] bg-primary lg-static-background before:z-[1]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[7px] z-[1]">
        <Image
          src="/assets/images/shape-7-copy-11.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-3 mx-auto relative z-[1] grid grid-cols-1 lg:grid-cols-2 gap-[38px] lg:gap-[100px] items-center">
        <div className="max-w-[466px] row-start-2 lg:row-start-auto">
          <h1 className="text-[50px] lg:text-[100px] font-portlin leading-[0.9] text-balance text-white">
            TRANSFORMING
            <br /> <span className="text-secondary">IDEAS</span> INTO <br />
            <span className="text-secondary"> REALITY!</span>
          </h1>
          <p className="text-sm leading-normal lg:text-lg mt-[30px] lg:mt-[40px] text-white">
            The sketch phase is the first of three steps. Here is where we will
            come up with a unique concept based on the details we’ve discussed.
          </p>
          <Link href="/pricing" className="block">
            <Button
              variant="secondary"
              className="mt-[30px] lg:mt-[40px] lg:px-[58px] w-full lg:w-auto"
            >
              BRAND PACKAGE
            </Button>
          </Link>

          <p className="text-[#a7a7bc] mt-3 lg:mt-[14px] text-center lg:text-left text-xs lg:text-sm">
            100% original designs, everytime!
          </p>
        </div>
        {sketchConcept &&
          sketchConcept.sketchBefore &&
          sketchConcept.sketchAfter && (
            <SketchConcept
              before={urlForImage(sketchConcept.sketchBefore as any)}
              after={urlForImage(sketchConcept.sketchAfter as any)}
            />
          )}
      </div>
    </section>
  );
}

export default SectionSix;
