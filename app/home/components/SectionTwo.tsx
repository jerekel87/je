"use client";

import Image from "next/image";
import ReactPlayer from "react-player";

function SectionTwo() {
  return (
    <section className="relative py-6 lg:py-[140px] pb-0 lg:pb-0">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px] static-background-hard before:z-[1] before:h-[86%] before:top-[5px]">
        <Image
          src="/assets/images/shape-7-copy-7-1.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-[60%,40%]">
        <div>
          <div className="w-full h-0 pb-[75.8%] relative rounded-[6px] lg:rounded-[10px] bg-black">
            <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", objectFit: "contain" }}
                url="https://www.youtube.com/watch?v=BpuC_iyq0l8&ab_channel=JeremyEllsworthDesignsLLC"
                controls
                light="/assets/images/commercial-thumbnail.jpg"
                playing
              />
            </div>
          </div>
          {/* <div className="mt-[40px] lg:mt-[47px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
            <div className="flex gap-[18px] items-center">
              <Image
                src="/assets/images/217450@3x.webp"
                height="49"
                width="49"
                alt="Better Business Bureau Accredited"
                className="shrink-0 object-contain"
                quality={100}
              />

              <div>
                <p className="font-portlin uppercase tracking-[0.5px] lg:text-[28px] text-[#005e88] leading-[.8] whitespace-nowrap">
                  BETTER BUSINESS BUREAU
                </p>
                <div className="flex items-end gap-[10px] lg:gap-[15px] mt-[6px]">
                  <p className="font-portlin uppercase tracking-[0.5px] lg:text-[28px] text-[#005e88] leading-[.8]">
                    ACCREDITED
                  </p>
                  <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-gray-400 self-center mt-1" />
                  <a
                    href="#"
                    className="leading-none lg:leading-none text-xs lg:text-sm font-medium font-mona-sans whitespace-nowrap"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
            <svg
              className="hidden lg:block"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
            >
              <path
                fillRule="evenodd"
                stroke="#ADADAD"
                strokeWidth="2"
                fill="#0D539A"
                d="m2 1.1 82 82.899"
              />
            </svg>
            <div className="flex gap-[18px] items-center">
              <Image
                src="/assets/images/layer-3@3x.webp"
                height="49"
                width="49"
                alt="NH Registered"
                className="shrink-0 object-contain"
                quality={100}
              />

              <div>
                <p className="font-portlin uppercase tracking-[0.5px] lg:text-[28px] leading-[.8]">
                  NH REGISTERED
                </p>
                <div className="flex items-end gap-[10px] lg:gap-[15px] mt-[8px] lg:mt-[10px]">
                  <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] self-center bg-gray-400" />
                  <a
                    href="#"
                    className="leading-none lg:leading-none text-xs lg:text-sm font-medium font-mona-sans"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="lg:pl-[86px] mt-[28px] lg:mt-0 flex flex-col justify-center">
          <h1 className="text-[50px] lg:text-[100px] font-portlin uppercase tracking-[0.5px] leading-[0.9] text-balance">
            INNOVATING{" "}
            <span className="relative inline-block beyond-bg lg:-rotate-[3deg]">
              BEYOND
            </span>{" "}
            BOUNDARIES
          </h1>
          {/* <div className="mt-4 lg:mt-[37px]">
            <StarRating
              value={5}
              text={<StarRating.Text>5/5</StarRating.Text>}
            />
          </div> */}
          <p className="text-sm lg:text-lg mt-[24px] lg:mt-[31px]">
            Watch as we transform brands with cutting-edge design, bringing bold
            ideas to life. See why we&apos;re the top choice for standout visual
            branding in today&apos;s market.
          </p>
          {/* <CalComModal.Trigger>
            <Button
              className="mt-[25px] lg:mt-[40px] lg:px-[48px] min-w-[225px] w-full lg:w-auto"
              variant="secondary"
            >
              GET A QUOTE
            </Button>
          </CalComModal.Trigger> */}
        </div>
      </div>
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[1]">
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

export default SectionTwo;
