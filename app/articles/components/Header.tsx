import Image from "next/image";

function Header() {
  return (
    <header className="bg-[#00508f] pt-[60px] pb-4 lg:pt-[68px] lg:pb-0 relative">
      <div className="container relative text-white">
        <h1 className="text-[60px] lg:text-[100px] text-white font-portlin leading-[.9]">
          CURRATED <span className="text-[#fff500]">BRAND</span> <br /> ARTICLES
        </h1>
        <p className="text-white text-[18px] lg:absolute bottom-2 left-[358px] mt-4 lg:mt-0">
          Our designers and developers create logos and produce professional,
          consistent print and digital collateral that show the world our
          clients are the real deal.
        </p>
      </div>
      <div className="container mt-[26px]">
        <div className="flex gap-[27px] items-end">
          <div className="relative size-[80px] lg:size-[120px] shrink-0">
            <Image
              src="/assets/images/HVAC-guy.webp"
              fill
              alt="HVAC-guy"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px] border-t border-[#2463A7]">
            <div className="flex lg:items-center gap-4 lg:gap-[24px]">
              <div className="relative mt-4 lg:mt-0 h-[20px] lg:h-[38px] w-[41px] lg:w-[78px] shrink-0">
                <Image
                  src="/assets/images/my-hvac-guy-llc-02@3x.webp"
                  fill
                  alt="HVAC-guy"
                  className="object-contain"
                />
              </div>
              <p className="text-white text-sm lg:text-[18px] font-bold pt-4 pb-1 lg:py-[32px]">
                My HVAC Guy revenue increased by 218% since rebranding
              </p>
            </div>
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
      <div className="w-[75%] absolute bottom-0 left-[25%] hidden lg:block">
        <p className="text-sm lg:text-[18px] font-bold py-[32px] border-t border-[#2463A7]">
          &nbsp;
        </p>
      </div>
    </header>
  );
}

export default Header;