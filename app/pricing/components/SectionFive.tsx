"use client";

import Image from "next/image";
import CalComModal from "@/app/(shared)/components/CalComModal";
import { HiCheckCircle } from "react-icons/hi2";
import { Button } from "@/app/(shared)/components/ui/button";
import { useState } from "react";
import { cn } from "@/app/(shared)/lib/utils";

function SectionFive({ packages }: { packages: any[] }) {
  const [selectedPckg, setSelectedPckg] = useState(packages[0]);

  const handlePckgClick = (pckgName: string) => {
    setSelectedPckg(
      packages.find((pckg) => pckg.name === pckgName) || packages[0]
    );
  };
  return (
    <section id="package" className="relative py-[70px] lg:py-[140px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-3 mx-auto">
        <h1 className="text-[50px] lg:text-[100px] font-portlin leading-[0.9] text-balance max-w-[620px]">
          IGNITE YOUR BRANDS POTENTIAL!
        </h1>
        <p className="text-xs leading-normal lg:text-lg mt-[30px] lg:mt-[42px] text-muted-foreground max-w-[640px]">
          Elevate your business with our all-in-one branding solution. From
          concept to implementation, we&apos;ll bring your unique vision to life
          across every touchpoint.
        </p>
        {/* Card */}
        <div className="flex flex-col lg:flex-row rounded-[10px] bg-[#141423] p-[30px] lg:p-[50px] text-white mt-[30px] lg:mt-[75px] gap-[52px] justify-between">
          <div className="lg:max-w-[54%]">
            <h2 className="text-[45px] lg:text-[65px] font-portlin leading-none">
              COMPLETE BRAND PACKAGE
            </h2>

            {/* Package lists */}
            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-[30px] mt-[44px]">
              {packages.map((pckg) => (
                <li key={pckg.name} className="pb-[92.5%] relative">
                  <div
                    onClick={() => handlePckgClick(pckg.name)}
                    className={cn(
                      "group cursor-pointer hover:bg-secondary hover:text-primary rounded-[10px] border border-[#414152] w-full h-full absolute p-3 lg:p-[30px] flex flex-col justify-between gap-1",
                      selectedPckg.name === pckg.name &&
                        "bg-secondary text-primary"
                    )}
                  >
                    <span
                      className={cn(
                        "size-[43px] bg-white group-hover:bg-primary shrink-0",
                        selectedPckg.name === pckg.name && "bg-primary"
                      )}
                      style={{
                        mask: `url(${pckg.iconUrl}) no-repeat center / contain`,
                      }}
                    />
                    <p className="text-xs lg:text-[18.5px] font-medium leading-[1.19]">
                      {pckg.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs lg:text-lg text-[#a7a7bc] mt-[30px] lg:mt-[57px]">
              <span className="text-secondary">*</span>Click any service to
              explore its details and unlock the full potential of your brand
              transformation.
            </p>
          </div>

          {/* Package Details */}
          <div className="relative w-full max-w-[500px] h-full">
            <div className="lg:min-h-[900px] flex flex-col justify-between z-10 lg:-translate-y-[170px] lg:left-0 lg:absolute w-full h-min rounded-[10px] bg-secondary text-primary p-4 lg:p-[30px] max-w-[500px]">
              <div className="p-4 pb-0 lg:p-[26px] lg:pb-0">
                <h3 className="text-[50px] lg:text-[80px]  font-portlin uppercase leading-[.9] lg:leading-[70px]">
                  {selectedPckg.name}
                </h3>
                <ul className="flex flex-col gap-2 mt-[30px] lg:mt-[40px]">
                  {selectedPckg.packageItems?.map(
                    (pckgItem: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-center font-medium text-xs lg:text-lg"
                      >
                        <HiCheckCircle className="size-[14px] lg:size-[20px] mr-[10px] lg:mr-[20px] shrink-0" />
                        <p>{pckgItem}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-[10px] mt-[30px] lg:mt-[46px] p-4 lg:p-[30px] bg-primary flex flex-col items-center">
                <p className="text-[50px] lg:text-[80px] font-portlin text-white leading-none">
                  $9728
                </p>
                <CalComModal.Trigger className="w-full">
                  <Button
                    className="bg-white mt-[20px] lg:mt-[36px] w-full"
                    variant="outline"
                  >
                    ORDER NOW
                  </Button>
                </CalComModal.Trigger>
                <p className="text-xs lg:text-[15px] text-[#a7a7bc] leading-normal lg:leading-[22px] text-center mt-2 lg:mt-[22px]">
                  This is a one time payment for our complete brand package.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center relative mt-6 lg:mt-[135px]">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <Image
              src="/assets/images/custom-tailored@3x.webp"
              alt="Custom tailored"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[50px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[10px] lg:mt-[22px]">
            BRAND SOLUTION
          </h1>
        </div>
        <p className="text-xs leading-normal lg:text-lg mt-4 lg:mt-[25px] text-[#53545c] max-w-[480px] text-center mx-auto">
          Interested in a tailored package designed specifically to your
          business?{" "}
          <strong className="text-primary">
            Schedule a call with us today
          </strong>
        </p>
        <div className="flex justify-center mt-[30px]">
          <CalComModal.Trigger className="w-full lg:w-auto">
            <Button
              variant="outline"
              className="mx-auto lg:px-[58px] w-full lg:w-auto"
            >
              BOOK A CALL
            </Button>
          </CalComModal.Trigger>
        </div>
      </div>
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px]">
        <Image
          src="/assets/images/shape-7-copy-8.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div> */}
    </section>
  );
}

export default SectionFive;
