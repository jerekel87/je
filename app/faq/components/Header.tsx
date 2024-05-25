import Image from "next/image";

function Header() {
  return (
    <header className="bg-[#e01120] pt-[60px] pb-4 lg:pt-[68px] lg:pb-0 relative">
      <div className="container relative text-white">
        <h1 className="text-[60px] lg:text-[100px] text-white font-portlin leading-[.9]">
          FREQUENTLY <span className="text-[#fff500]">ASKED</span> <br />
          QUESTIONS
        </h1>
        <p className="text-white text-[18px] lg:absolute bottom-2 left-[386px] mt-4 lg:mt-0">
          Welcome to our Frequently Asked Questions (FAQ) page. Here,
          you&apos;ll find quick answers to common queries about our services
          and policies, all conveniently organized for easy navigation.
        </p>
      </div>
      <div className="container mt-[26px]">
        <div className="flex gap-[27px] items-end">
          <div className="relative size-[80px] lg:size-[120px] shrink-0">
            <Image
              src="/assets/images/flasman.png"
              fill
              alt="Flash man"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px]">
            <p className="text-white text-sm lg:text-[18px] font-bold pt-4 pb-1 lg:py-[32px] border-t border-[#f4312e]">
              The Flash Electric revenue increased by 150% since rebranding
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
      <div className="w-1/2 absolute bottom-0 left-1/2 hidden lg:block">
        <p className="text-sm lg:text-[18px] font-bold py-[32px] border-t border-[#f4312e]">
          &nbsp;
        </p>
      </div>
    </header>
  );
}

export default Header;