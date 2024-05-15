import Image from "next/image";
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill } from "react-icons/ri";

function SectionOne() {
  return (
    <section className="bg-[#164dcc] relative">
      <div className="container mx-auto lg:max-w-[1920px] h-full relative px-0 lg:px-[2rem]">
        <div className="relative w-max mx-auto">
          <h2 className="text-[40px] lg:text-[178px] font-portlin leading-none text-center transform -rotate-[5deg] pt-[100px] w-max">
            <span className="text-white">IGNITING </span>
            <span className="text-secondary">CREATIVITY</span>
            <span className="text-white">.</span>
            <br />
            <span className="text-secondary">FUELING </span>
            <span className="text-white">BRANDS.</span>
          </h2>
          <span className="font-guthen-bloots-personal-use text-secondary text-base lg:text-[36px] right-0 lg:right-[35px] absolute">
            Since 2005!
          </span>
        </div>
        <div className="relative mt-[40px] lg:mt-0 lg:-top-[40px] transform left-1/2 -translate-x-1/2 w-full">
          <Image
            src="/assets/images/pickup.webp"
            width="1639"
            height="617"
            alt="Pickup"
            className="relative w-[85%] transform left-1/2 -translate-x-1/2 z-[1]"
          />
          <Image
            src="/assets/images/drop-shadow.webp"
            width="1920"
            height="247"
            alt="Pickup drop shadow"
            className="absolute -bottom-[16%]"
          />
        </div>

        <div className="hidden lg:flex items-center gap-[32px] top-1/2 rotate-90 w-max -right-[140px] absolute">
          <span className="text-white font-portlin text-[28px]">CONNECT</span>
          <span className="w-[58px] h-[2px] bg-white" />
          <div className="flex items-center gap-[14px]">
            <a className="size-[50px] text-white rounded-full border-[2px] border-white flex items-center justify-center -rotate-90">
              <RiFacebookFill />
            </a>
            <a className="size-[50px] text-white rounded-full border-[2px] border-white flex items-center justify-center -rotate-90">
              <RiInstagramFill />
            </a>
            <a className="size-[50px] text-white rounded-full border-[2px] border-white flex items-center justify-center -rotate-90">
              <RiYoutubeFill />
            </a>
          </div>
        </div>

        <div className="hidden rounded-[8px] p-[20px] lg:flex gap-[14px] bg-white w-max absolute bottom-[2%]">
          <div className="rounded-full bg-secondary flex items-center justify-center size-[50px] font-bold">
            RS
          </div>
          <div>
            <p className="text-sm font-bold">Robert Son</p>
            <p className="text-xs ">
              Purchased <a className="underline font-bold">VIP Package</a>
            </p>
            <p className="text-[10px] text-muted-foreground">2 hours ago</p>
          </div>
        </div>

        <div className="text-lg mt-[40px] lg:mt-0 lg:text-[41px] text-white font-portlin w-max mx-auto">
          <p className="leading-none">MY HVAC GUY REVENUE INCREASED BY</p>
          <div className="flex items-center gap-[10px] lg:gap-[15px]">
            <p className="leading-none">218% SINCE REBRANDING</p>
            <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-white/80" />
            <a
              href="#"
              className="text-[#ffed00] leading-relaxed text-xs lg:text-sm font-medium font-mona-sans"
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

        <div className="lg:hidden flex items-center gap-[10px] w-max mx-auto mt-[40px]">
          <span className="text-white font-portlin text-base lg:text-lg">
            CONNECT
          </span>
          <span className="h-[1px] lg:h-[2px] w-4 lg:w-[32px] bg-white" />
          <div className="flex items-center gap-[10px]">
            <a className="size-[30px] text-white rounded-full border-[1px] border-white flex items-center justify-center">
              <RiFacebookFill />
            </a>
            <a className="size-[30px] text-white rounded-full border-[1px] border-white flex items-center justify-center">
              <RiInstagramFill />
            </a>
            <a className="size-[30px] text-white rounded-full border-[1px] border-white flex items-center justify-center">
              <RiYoutubeFill />
            </a>
          </div>
        </div>
      </div>

      <div className="h-[34px]" />
    </section>
  );
}

export default SectionOne;
