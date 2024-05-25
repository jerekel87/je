import Image from "next/image";

function SectionFour() {
  return (
    <section className="relative pt-[70px] lg:pt-[140px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto">
        <div className="mx-auto max-w-[640px]">
          <div className="relative w-[100px] h-[34px] lg:w-[153px] lg:h-[52px] mx-auto">
            <Image
              src="/assets/images/unique-brands@3x.webp"
              alt="Unique brands"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[40px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            AWESOME PROJECTS
          </h1>
          <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] mb-[60px] lg:mb-[124px] text-center">
            We are your quintessential five-star creative design agency, fully
            equipped and ready to expertly tackle any project you envision.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <div className="relative w-full pb-[85.5%] bg-gray-400">
          <Image
            src="/assets/images/proj2.svg"
            fill
            alt="Project"
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative w-full pb-[85.5%] bg-gray-400">
          <Image
            src="/assets/images/proj3.svg"
            fill
            alt="Project"
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative w-full pb-[85.5%] bg-gray-400">
          <Image
            src="/assets/images/proj4.svg"
            fill
            alt="Project"
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative w-full pb-[85.5%] bg-gray-400">
          <Image
            src="/assets/images/proj5.svg"
            fill
            alt="Project"
            className="object-contain"
            quality={100}
          />
        </div>
        <div className="relative w-full pb-[85.5%] bg-gray-400 col-span-2 lg:col-span-1">
          <Image
            src="/assets/images/proj1.svg"
            fill
            alt="Project"
            className="object-contain"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
