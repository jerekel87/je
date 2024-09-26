import Image from "next/image";

function Header({ articleLink }: { articleLink: string }) {
  return (
    <header className="bg-[#e01120] pt-[50px] pb-4 lg:pt-[68px] lg:pb-0 relative">
      <div className="container px-3 relative text-white">
        <h1 className="text-[50px] lg:text-[100px] text-white font-portlin tracking-[0.4px] leading-[.9]">
          FREQUENTLY <span className="text-[#fff500]">ASKED</span> <br />
          QUESTIONS
        </h1>
        <p className="text-white text-sm lg:text-lg leading-normal lg:absolute bottom-2 left-[386px] mt-4 lg:mt-0">
          Welcome to our Frequently Asked Questions (FAQ) page. Here,
          you&apos;ll find quick answers to common queries about our services
          and policies, all conveniently organized for easy navigation.
        </p>
      </div>
      <div className="container px-3 mt-[26px]">
        <div className="flex gap-[27px] items-end">
          <div className="relative size-[80px] lg:size-[120px] shrink-0 top-[20px] lg:top-[10px]">
            <Image
              src="/assets/images/flasman.png"
              fill
              alt="Flash man"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px]  border-t border-[#f4312e]">
            <p className="text-white text-xs lg:text-lg leading-normal font-bold pt-4 pb-1 lg:py-[32px]">
              The Flash Electric revenue increased by 150% since rebranding
            </p>
            <div className="flex items-center gap-[14px]">
              <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-white opacity-50" />
              <a
                href={articleLink}
                className="text-[#ffed00] whitespace-nowrap leading-relaxed text-xs lg:text-sm font-medium font-mona-sans"
              >
                Read Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
