import Image from "next/image";
import React from "react";
import SectionThreeItem from "./SectionThreeItem";
import { Button } from "@/app/(shared)/components/ui/button";
import Link from "next/link";

function SectionThree() {
  return (
    <section className="bg-primary  py-[70px] lg:py-[140px]">
      <div className="container mx-auto h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[120px]">
          <div>
            <h1 className="text-[40px] lg:text-[100px] font-portlin leading-[0.9] text-balance text-white">
              EFFECTIVE
              <br />
              <span className="text-secondary">BRAND</span> VALUE
            </h1>

            <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] text-white mb-[60px] lg:mb-[124px]">
              In the realm of business, standing out is key. Having a proven
              track record of transforming brands and significantly increasing
              our clients revenue.
            </p>
            <SectionThreeItem
              imageUrl="/assets/images/layer-23@3x.webp"
              title="ELITE CARPET CLEANING PROS"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="225"
            />
            <SectionThreeItem
              imageUrl="/assets/images/layer-24@3x.webp"
              title="BIG SPRING BUILDERS, CO."
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="180"
            />
          </div>
          <div className="mt-0 lg:mt-[272px]">
            <SectionThreeItem
              imageUrl="/assets/images/layer-22@3x.webp"
              title="THE FLASH ELECTRIC"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="150"
            />
            <SectionThreeItem
              imageUrl="/assets/images/layer-25@3x.webp"
              title="SLAPSHOTS AIR"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="140"
            />
          </div>
        </div>
        <div className="w-max mx-auto mt-[40px]">
          <p className="text-white font-portlin text-[40px] lg:text-[100px] leading-[.8] -rotate-[4deg]">
            REAL RESULTS!
          </p>
          <div className="relative ml-auto w-[104px] h-[18px] lg:w-[272px] lg:h-[40px]">
            <Image
              src="/assets/images/shape-13.svg"
              fill
              alt="Results"
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-sm lg:text-lg mt-4 lg:mt-[25px] text-[#a7a7bc] max-w-[480px] text-center mx-auto">
          Let&apos;s see how much additional revenue you could earn through the
          power of professional branding!
        </p>
        <div className="flex justify-center mt-[30px]">
          <Link href="/pricing#revenueCalculator">
            <Button variant="secondary" className="mx-auto">
              CALCULATE IT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
