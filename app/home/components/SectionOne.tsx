import Image from "next/image";
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import "../style.css";

function SectionOne() {
  return (
    <section className="bg-[#164dcc] relative overflow-hidden static-background">
      <div className="z-[1] relative">
        <div className="hidden z-[1] lg:flex items-center gap-[32px] top-1/2 rotate-90 w-max -right-[134px] absolute">
          <span className="text-white font-portlin text-[28px]">CONNECT</span>
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
            <h1 className="text-[52px] sm:text-[82px] md:text-[108px] xl:text-[178px] font-portlin leading-[.84] text-center transform -rotate-[5deg] pt-[74px] w-max">
              <span className="text-white">IGNITING </span>
              <span className="text-secondary">CREATIVITY</span>
              <span className="text-white">.</span>
              <br />
              <span className="text-secondary">FUELING </span>
              <span className="text-white">BRANDS.</span>
            </h1>
            <div className="w-[70px] h-[20px] xl:w-[120px] xl:h-[40px] right-0 lg:right-[35px] absolute">
              <Image
                src="/assets/images/since-2005.webp"
                alt="Since 2005"
                fill
                quality="100"
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative w-[110%] mt-[40px] lg:mt-0 lg:-top-[27px] transform left-1/2 -translate-x-1/2 lg:w-full">
            <Image
              src="/assets/images/pickup.webp"
              width="1639"
              height="617"
              alt="Pickup"
              className="relative w-[86%] transform left-1/2 -translate-x-1/2 z-[1]"
            />
            <Image
              src="/assets/images/drop-shadow.webp"
              width="1920"
              height="247"
              alt="Pickup drop shadow"
              className="absolute -bottom-[15.7%]"
            />
          </div>

          <div className="text-lg mt-[40px] lg:mt-0 lg:text-[41px] text-white font-portlin w-max mx-auto">
            <p className="leading-none">MY HVAC GUY REVENUE INCREASED BY</p>
            <div className="flex items-center gap-[10px] lg:gap-[15px]">
              <p className="leading-none">218% SINCE REBRANDING</p>
              <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-white opacity-50 mt-[6px]" />
              <a
                href="#"
                className="text-[#ffed00] leading-relaxed text-xs lg:text-sm font-medium font-mona-sans mt-[6px]"
              >
                Read Article
              </a>
            </div>
            <div className="relative w-[42px] h-[16px] lg:w-[76px] lg:h-[24px]">
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
      <div className="h-[34px]" />
    </section>
  );
}

export default SectionOne;
