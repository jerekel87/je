import Image from "next/image";

function Header() {
  return (
    <header className="bg-[#004eed] pt-[60px] pb-4 lg:pt-[68px] lg:pb-0 relative">
      <div className="container relative text-white">
        <h1 className="text-[60px] lg:text-[100px] text-white font-portlin leading-[.9]">
          STRAIGHT FWD <br />
          <span className="text-[#fff500]">COSTING</span>
        </h1>
        <p className="text-white text-[18px] lg:absolute bottom-2 left-[320px] mt-4 lg:mt-0">
          Remember, good work isn&apos;t cheap and cheap work isn&apos;t good.
          Here at JE Designs, we want to remind you of that when considering
          your brands value.
        </p>
      </div>
      <div className="container mt-[26px]">
        <div className="flex gap-[27px] items-end">
          <div className="relative size-[80px] lg:size-[120px] shrink-0 top-[20px] lg:top-[12px]">
            <Image
              src="/assets/images/vector-smart-object@3x.webp"
              fill
              alt="hoffman-heating-cooling-v-2-mascot"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px]">
            <p className="text-white text-sm lg:text-[18px] font-bold pt-4 pb-1 lg:py-[32px] border-t border-[#2bd06b]">
              Hoffman Heating and Cooling revenue increased by 225% since
              rebranding
            </p>
            <div className="flex items-center gap-[14px]">
              <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-white opacity-50" />
              <a
                href="#"
                className="text-[#ffed00] whitespace-nowrap leading-relaxed text-xs lg:text-sm font-medium font-mona-sans"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] absolute bottom-0 left-1/2 hidden lg:block">
        <p className="text-sm lg:text-[18px] font-bold py-[32px] border-t border-[#2bd06b]">
          &nbsp;
        </p>
      </div>
    </header>
  );
}

export default Header;
