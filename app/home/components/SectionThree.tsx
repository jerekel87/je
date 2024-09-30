"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/(shared)/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

function SectionThreeItem({
  imageUrl,
  title,
  description,
  percentage,
}: {
  imageUrl: string;
  title: string;
  description: string;
  percentage: string;
}) {
  return (
    <div className="mb-[60px] lg:mb-[102px] lg:pl-[50px]">
      <div className="relative w-full pb-[100%]">
        <Image
          src={imageUrl}
          fill
          alt={`${percentage}% revenue increase`}
          className="object-cover rounded-[6px] lg:rounded-[8px] absolute"
        />
      </div>
      <div className="flex items-end gap-[10px] lg:gap-[15px] mt-[28px] lg:mt-[38px] max-w-[480px]">
        <div className="flex items-center gap-1 h-[18px] lg:h-[30px] whitespace-nowrap self-start p-1 lg:p-[8px] text-xs lg:text-lg lg:leading-none font-bold leading-none rounded-[2px] lg:rounded-[5px] bg-secondary">
          <svg
            className="w-[6px] h-[5px] lg:w-[11px] lg:h-[10px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 23 20"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fillRule="evenodd"
              fill="#141423"
              d="M11.5.313 23 20.312H0L11.5.313z"
            />
          </svg>
          <span className="leading-none">{percentage}%</span>
        </div>
        <h3 className="text-white text-[22px] lg:text-[35px] -translate-y-[2px] font-portlin tracking-[0.5px] leading-[.9]">
          {title}
        </h3>
      </div>
      <p className="text-sm lg:text-lg leading-normal mt-[25px] text-[#a7a7bc] max-w-[480px]">
        {description}
      </p>
    </div>
  );
}

function SectionThreeItemEmpty() {
  return (
    <div className="mb-[60px] lg:mb-[37px] lg:pl-[50px]">
      <div className="relative w-full pb-[100%] bg-[#323343] rounded-[8px]">
        <div className="w-full h-full absolute p-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 894 894"
            className="w-full h-full"
          >
            <path
              stroke="#10101C"
              strokeWidth="4"
              strokeDasharray="20, 32"
              fill="none"
              d="M25.1 5.1H866c11.046 0 20 9.854 20 20V866c0 11.046-8.954 20-20 20H25.1c-10.146 0-20-8.954-20-20V25.1c0-10.146 9.854-20 20-20z"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-[15px] mt-[28px] lg:mt-[38px] max-w-[480px]">
        <h3 className="text-white text-2xl lg:text-[35px] font-portlin tracking-[0.5px] leading-[.9]">
          YOUR COMPANY HERE
        </h3>
      </div>
      <p className="text-sm lg:text-lg mt-[25px] text-[#a7a7bc] max-w-[480px]">
        Take your company to new heights, imagine the endless possibilities or
        missed opportunities because you’re lacking proper branding for your
        business.
      </p>
    </div>
  );
}

function SectionThree() {
  return (
    <section className="bg-[#141423]  py-[70px] lg:py-[140px] striped-background static-background relative overflow-hidden">
      <div className="container px-3 mx-auto h-full relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[120px]">
          <div>
            <h1 className="text-[50px] lg:text-[100px] font-portlin tracking-[0.5px] leading-[0.9] text-balance text-white">
              IGNITE <span className="text-secondary">YOUR</span>
              <br />
              <span className="text-secondary">BRANDS</span> POTENTIAL
            </h1>

            <p className="text-sm lg:text-lg leading-normal mt-[24px] lg:mt-[40px] text-[#ffffff66] mb-0 lg:mb-[124px]">
              Our designs don&apos;t just catch eyes—they capture market share,
              driving substantial growth for our clients. See how our creative
              strategies turned these businesses into industry leaders.
            </p>
            <div className="hidden lg:block">
              <SectionThreeItem
                imageUrl="/assets/images/layer-23@3x.webp"
                title="ELITE CARPET CLEANING PROS"
                description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
                percentage="225"
              />
              <SectionThreeItem
                imageUrl="/assets/images/layer-6@3x.webp"
                title="BIG SPRINT BUILDERS, CO."
                description="Take your company to new heights, imagine the endless
                possibilities or missed opportunities because you’re
                lacking proper branding for your business."
                percentage="180"
              />
            </div>
          </div>
          <div className="mt-0 lg:mt-[272px] hidden lg:block">
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
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          className="lg:rounded-[15px] mt-[45px] lg:!hidden !overflow-visible"
        >
          <SwiperSlide>
            <SectionThreeItem
              imageUrl="/assets/images/layer-23@3x.webp"
              title="ELITE CARPET CLEANING PROS"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="225"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SectionThreeItem
              imageUrl="/assets/images/layer-22@3x.webp"
              title="THE FLASH ELECTRIC"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="150"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SectionThreeItem
              imageUrl="/assets/images/layer-25@3x.webp"
              title="SLAPSHOTS AIR"
              description="Taking Martika’s Food Truck brand to the next level with a 
              logo that not only stands out but speaks directly to their 
              customer base."
              percentage="140"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlide>
              <SectionThreeItem
                imageUrl="/assets/images/layer-6@3x.webp"
                title="BIG SPRINT BUILDERS, CO."
                description="Take your company to new heights, imagine the endless
                possibilities or missed opportunities because you’re
                lacking proper branding for your business."
                percentage="180"
              />
            </SwiperSlide>
          </SwiperSlide>
        </Swiper>

        <div className="w-full h-full flex flex-col justify-center items-center relative mt-[18px] lg:mt-0">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <div className="h-[66px] w-[51px] lg:h-[132px] lg:w-[100px] absolute -top-[194%] -left-[56%] lg:top-0 lg:-left-[124%]">
              <Image
                src="/assets/images/action-arrow@3x.webp"
                alt="Arrow"
                height="132"
                width="100"
                className="object-contain"
              />
            </div>
            <Image
              src="/assets/images/dont-wait@3x.webp"
              alt="Don't wait"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[50px] lg:text-[100px] text-center text-white font-portlin tracking-[0.5px] leading-[.9] text-balance mt-[10px] lg:mt-[22px]">
            TAKE ACTION!
          </h1>
        </div>
        <p className="text-sm lg:text-lg leading-normal mt-4 lg:mt-[25px] text-[#a7a7bc] max-w-[480px] text-center mx-auto">
          Let&apos;s see how much additional revenue you could earn through the
          power of professional branding!
        </p>
        <div className="flex justify-center mt-[30px]">
          <Link href="/pricing" className="w-full lg:w-auto">
            <Button
              variant="secondary"
              className="mx-auto lg:px-[58px] w-full lg:w-auto"
            >
              BRAND PACKAGE
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
