import StarRating from "@/app/(shared)/components/StarRating";
import Image from "next/image";

function SectionTwo() {
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
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[60%,40%]">
        <div>
          <div className="w-full h-0 pb-[75.8%] relative">
            <iframe
              className="w-full h-full rounded lg:rounded-[10px] absolute top-0 left-0"
              src="https://www.youtube.com/embed/BpuC_iyq0l8?si=OlMMryosVIVaaC-Q"
              title="Igniting Creativity. Fueling Brands."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="mt-[40px] lg:mt-[47px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
            <div className="flex gap-[18px] items-center">
              <Image
                src="/assets/images/217450@3x.webp"
                height="48"
                width="48"
                alt="Better Business Bureau Accredited"
                className="shrink-0 object-contain"
                quality={100}
              />

              <div>
                <p className="font-portlin lg:text-[24.3px] text-[#005e88] leading-[.8] whitespace-nowrap">
                  BETTER BUSINESS BUREAU
                </p>
                <div className="flex items-end gap-[10px] lg:gap-[15px] mt-[6px]">
                  <p className="font-portlin lg:text-[24.3px] text-[#005e88] leading-[.8]">
                    ACCREDITED
                  </p>
                  <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] bg-gray-400 self-center mt-1" />
                  <a
                    href="#"
                    className="leading-none lg:leading-none text-xs lg:text-sm font-medium font-mona-sans whitespace-nowrap"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
            <svg
              className="hidden lg:block"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
            >
              <path
                fillRule="evenodd"
                stroke="#ADADAD"
                strokeWidth="2"
                fill="#0D539A"
                d="m2 1.1 82 82.899"
              />
            </svg>
            <div className="flex gap-[18px] items-center">
              <Image
                src="/assets/images/layer-3@3x.webp"
                height="48"
                width="48"
                alt="NH Registered"
                className="shrink-0 object-contain"
                quality={100}
              />

              <div>
                <p className="font-portlin lg:text-[24.3px] leading-[.8]">
                  NH REGISTERED
                </p>
                <div className="flex items-end gap-[10px] lg:gap-[15px] mt-[8px] lg:mt-[10px]">
                  <div className="h-[1px] lg:h-[2px] w-2 lg:w-[32px] self-center bg-gray-400" />
                  <a
                    href="#"
                    className="leading-none lg:leading-none text-xs lg:text-sm font-medium font-mona-sans"
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pl-[86px] mt-[40px] lg:mt-0">
          <h1 className="text-[40px] lg:text-[100px] font-portlin leading-[0.9] text-balance">
            YOUR <span className="text-nowrap">FIVE-STAR</span> CREATIVE PARTNER
          </h1>
          <div className="mt-4 lg:mt-[37px]">
            <StarRating
              value={5}
              text={<StarRating.Text>5/5</StarRating.Text>}
            />
          </div>
          <p className="text-sm lg:text-lg mt-[31px]">
            We are your quintessential five-star creative design agency, fully
            equipped and ready to expertly tackle any project you envision.
          </p>
        </div>
      </div>
      <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px]">
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

export default SectionTwo;
