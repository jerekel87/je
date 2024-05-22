import Image from "next/image";

function SectionOne() {
  return (
    <section className="relative py-[70px] lg:py-[140px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px] lg:gap-[100px]">
        <div>
          <div className="w-full h-0 pb-[100%] relative">
            <Image
              src="/assets/images/exper-tech-environmental-copy@3x.png"
              fill
              alt="Unlock you brands personality"
              className="shrink-0 object-contain w-full h-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-[40px] lg:text-[100px] font-portlin leading-[0.9] text-balance">
            UNLOCK YOUR
            <br className="hidden lg:block" /> BRANDS
            <br className="hidden lg:block" /> PERSONALITY.
          </h2>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px]">
            No contract, pause or cancel anytime with our Infinite Package.
            Forget about employees, freelancers and agencies. You can have the
            best designs right now, right here.
          </p>

          <div className="flex items-center gap-[15px] mt-[30px] lg:mt-[48px]">
            <Image
              src="/assets/images/mouse-left-click-01-solid-rounded.svg"
              width="22"
              height="20"
              alt="Mouse left clicked"
            />
            <p className="text-xs lg:text-sm font-medium">
              Scroll to unlock your revenue potential
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[1]">
        <Image
          src="/assets/images/shape-7-copy-8.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default SectionOne;
