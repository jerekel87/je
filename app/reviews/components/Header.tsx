import Image from "next/image";

function Header({ articleLink }: { articleLink: string }) {
  return (
    <header className="bg-[#FFDE09] pt-[50px] pb-4 lg:pt-[68px] lg:pb-0 relative">
      <div className="container px-3 relative text-primary">
        <h1 className="text-[50px] lg:text-[100px] text-primary font-portlin leading-[.9]">
          INDUSTRY PEERS&apos; <br />
          STORIES
        </h1>
        <p className="text-primary text-sm lg:text-lg leading-normal lg:absolute bottom-2 left-[320px] mt-4 lg:mt-0">
          Discover firsthand accounts of our customers experience with our
          services, offering insights and reassurances about what to expect when
          you choose us.
        </p>
      </div>
      <div className="container px-3 mt-[26px]">
        <div className="flex gap-[27px] items-end">
          <div className="relative size-[80px] lg:size-[120px] shrink-0 top-[20px] lg:top-[10px]">
            <Image
              src="/assets/images/mascot-1-2.png"
              fill
              alt="Junk removal couple"
              className="object-contain"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:gap-[14px] border-t border-[#EDC500]">
            <p className="text-primary text-xs lg:text-lg leading-normal font-bold pt-4 pb-1 lg:py-[32px]">
              Trinity Junk Removal Inc revenue increased by 186% since
              rebranding
            </p>
            <div className="flex items-center gap-[14px]">
              <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-primary opacity-50" />
              <a
                href={articleLink}
                className="whitespace-nowrap leading-relaxed text-xs lg:text-sm font-medium font-mona-sans"
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
