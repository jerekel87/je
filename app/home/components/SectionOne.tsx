import Image from "next/image";
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import "../style.css";

function SectionOne({ articleLink }: { articleLink: string }) {
  return (
    <section className="bg-[#164dcc] relative overflow-hidden static-background">
      <div className="z-[1] relative">
        <div className="hidden z-[1] lg:flex items-center gap-[32px] top-1/2 rotate-90 w-max -right-[134px] absolute">
          <span className="text-white font-portlin uppercase tracking-[0.5px] text-[40px] leading-[0.7]">
            CONNECT
          </span>
          <span className="w-[58px] h-[2px] bg-white" />
          <div className="flex items-center gap-[14px]">
            <a
              href="https://www.facebook.com/jnellsworth"
              target="_blank"
              className="size-[50px] text-white hover:text-[#164dcc] hover:bg-white rounded-full border-[2px] border-white flex items-center justify-center -rotate-90"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.instagram.com/jnellsworth"
              target="_blank"
              className="size-[50px] text-white hover:text-[#164dcc] hover:bg-white rounded-full border-[2px] border-white flex items-center justify-center -rotate-90"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.youtube.com/@jeremyellsworthdesignsllc"
              target="_blank"
              className="size-[50px] text-white hover:text-[#164dcc] hover:bg-white rounded-full border-[2px] border-white flex items-center justify-center -rotate-90"
            >
              <RiYoutubeFill />
            </a>
          </div>
        </div>
        <div className="container mx-auto lg:max-w-[1920px] h-full relative px-0 lg:px-[2rem]">
          <div className="relative w-max mx-auto">
            <h1 className="text-[78.8px] md:text-[108px] xl:text-[178px] font-portlin uppercase tracking-[0.5px] leading-[.84] text-center transform -rotate-[5deg] pt-[30px] lg:pt-[74px] w-max">
              <span className="text-white">IGNITING </span>
              <br className="lg:hidden" />
              <span className="text-secondary">CREATIVITY</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-secondary">FUELING </span>
              <br className="lg:hidden" />
              <span className="text-white">BRANDS.</span>
            </h1>
            <div className="hidden lg:block lg:absolute w-[70px] h-[20px] xl:w-[165px] xl:h-[35px] right-0 lg:right-[24px]">
              <Image
                src="/assets/images/since-2005.webp"
                alt="Since 2005"
                fill
                quality="100"
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative w-[212%] mt-0 lg:-top-[6px] transform left-[50%] -translate-x-1/2 lg:w-full">
            <Image
              src="/assets/images/truck-lightblue-2.png"
              width="2816"
              height="1447"
              alt="background"
              className="absolute w-[75.3%] -left-[3%] -top-[6%]"
            />
            <Image
              src="/assets/images/pickup-2.webp"
              width="1639"
              height="617"
              alt="Pickup"
              className="relative w-[75.3%] transform left-1/2 -translate-x-1/2 z-[1]"
            />
            <Image
              src="/assets/images/pickup-dropshadow-2.webp"
              width="1920"
              height="247"
              alt="Pickup drop shadow"
              className="absolute -bottom-[20%] left-[2.8%] w-[94.8%]"
            />
          </div>

          <div className="relative -top-[12px] lg:-top-[36px] text-xl lg:text-[41px] text-white font-portlin uppercase tracking-[0.5px] w-max mx-auto">
            <p className="leading-none">MY HVAC GUY REVENUE INCREASED BY</p>
            <div className="flex items-center gap-[10px] lg:gap-[15px]">
              <p className="leading-none">218% SINCE REBRANDING</p>
              <div className="h-[1px] lg:h-[2px] w-4 lg:w-[32px] bg-white opacity-50 mt-[6px]" />
              <a
                href={articleLink}
                className="text-[#ffed00] leading-relaxed text-xs lg:text-sm font-medium font-mona-sans mt-[6px] capitalize"
              >
                Read Article
              </a>
            </div>
            <div className="relative w-[40px] h-[12px] lg:w-[76px] lg:h-[24px]">
              <Image
                src="/assets/images/shape-13-copy.svg"
                fill
                alt="218% increased"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20px] lg:hidden" />
    </section>
  );
}

export default SectionOne;
