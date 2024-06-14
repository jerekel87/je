import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import RevenueCalculator from "./RevenueCalculator";
import { twMerge } from "tailwind-merge";

function SectionTwo() {
  const data = true;

  return (
    <section
      id="revenueCalculator"
      className="relative py-[70px] lg:py-[140px] bg-[#fff500]"
    >
      <div className="container px-0 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-x-0 gap-[40px] lg:gap-[100px]">
        <div className={twMerge("container lg:px-0", data && "lg:hidden")}>
          <div className="relative">
            <h1 className="text-[40px] lg:text-[100px] font-portlin leading-[0.9] text-balance">
              REVENUE
              <br />
              CALCULATOR
            </h1>
            <div className="absolute left-[120px] top-0 lg:left-[298px] lg:top-[24px] w-[80px] h-[34px] lg:w-[172px] lg:h-[42px] mx-auto">
              <Image
                src="/assets/images/estimates-only@3x.webp"
                alt="Unique brands"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px]">
            Plug in the numbers and lets see how much revenue your business
            could earn from having a professional logo with proper branding.
          </p>

          <ul className="flex flex-col gap-3 lg:gap-4 mt-[40px] lg:mt-[50px] text-xs lg:text-base font-medium">
            <li className="flex items-start lg:items-center gap-2 lg:gap-4">
              <HiCheckCircle className="size-[20px] shrink-0" />
              How much more you could earn with enhanced branding
            </li>
            <li className="flex items-start lg:items-center gap-2 lg:gap-4">
              <HiCheckCircle className="size-[20px] shrink-0" />
              Make calculated branding decisions with just a few clicks
            </li>
            <li className="flex items-start lg:items-center gap-2 lg:gap-4">
              <HiCheckCircle className="size-[20px] shrink-0" />
              Get instant results to guide your next steps
            </li>
            <li className="flex items-start lg:items-center gap-2 lg:gap-4">
              <HiCheckCircle className="size-[20px] shrink-0" />
              Business at any revenue level, no figures needed
            </li>
          </ul>
        </div>
        <div
          className={twMerge(
            "px-2 flex lg:pl-0 lg:relative items-center justify-end",
            data && "col-span-2"
          )}
        >
          <div
            className={twMerge(
              "w-full lg:max-w-[475px] relative",
              data && "lg:max-w-full"
            )}
          >
            <RevenueCalculator />
            <div className="hidden 2xl:flex lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[100%] w-[164px] items-center">
              <Image
                src="/assets/images/Rectangle-removebg-preview.png"
                height="591"
                width="342"
                alt="Revenue calculator"
                className="object-contain -translate-x-[11.8%]"
              />
            </div>
          </div>
          {/* <div className="relative 2xl:absolute lg:top-1/2 2xl:-translate-y-1/2 2xl:left-[100%] w-[25%] flex items-center">
            <Image
              src="/assets/images/Rectangle-removebg-preview.png"
              height="591"
              width="342"
              alt="Revenue calculator"
              className="object-contain -translate-x-[11.8%]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
