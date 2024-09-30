// import Image from "next/image";

// function SectionOne() {
//   return (
//     <section className="relative py-[70px] lg:py-[140px]">
//       <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
//         <Image
//           src="/assets/images/shape-7-copy-7.svg"
//           fill
//           alt="Transition"
//           className="object-cover"
//         />
//       </div>
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[30px] lg:gap-[100px]">
//         <div>
//           <div className="w-full h-0 pb-[100%] relative">
//             <Image
//               src="/assets/images/exper-tech-environmental-copy@3x.png"
//               fill
//               alt="Unlock you brands personality"
//               className="shrink-0 object-contain w-full h-full"
//             />
//           </div>
//         </div>
//         <div>
//           <h1 className="text-[40px] lg:text-[100px] font-portlin tracking-[0.5px] leading-[0.9] text-balance">
//             UNLOCK YOUR
//             <br className="hidden lg:block" /> BRANDS
//             <br className="hidden lg:block" /> PERSONALITY.
//           </h1>
//           <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px]">
//             No contract, pause or cancel anytime with our Infinite Package.
//             Forget about employees, freelancers and agencies. You can have the
//             best designs right now, right here.
//           </p>

//           <div className="flex items-center gap-[15px] mt-[30px] lg:mt-[48px]">
//             <Image
//               src="/assets/images/mouse-left-click-01-solid-rounded.svg"
//               width="22"
//               height="20"
//               alt="Mouse left clicked"
//             />
//             <p className="text-xs lg:text-sm font-medium">
//               Scroll to unlock your revenue potential
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[1]">
//         <Image
//           src="/assets/images/shape-7-copy-8.svg"
//           fill
//           alt="Transition"
//           className="object-cover"
//         />
//       </div>
//     </section>
//   );
// }

// export default SectionOne;

import Image from "next/image";

function SectionOne() {
  return (
    <section className="relative py-6 pb-[50px] lg:py-[140px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-3 mx-auto flex flex-col lg:flex-row">
        <div className="shrink-0 lg:w-[688px]">
          <div className="w-full h-0 pb-[75.8%] relative rounded-[6px] lg:rounded-[10px] bg-black">
            <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://www.youtube.com/embed/bgtInTFNqCw?si=3ymi6XmUirRX5UZy"
                title="Vector Logo Timelapse - Got Da Munchies?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="lg:pl-[80px] mt-[28px] lg:mt-0 flex flex-col justify-center">
          <h1 className="text-[50px] lg:text-[100px] font-portlin tracking-[0.5px] leading-[0.9] text-balance">
            100% UNIQUE DESIGNS, EVERY TIME!
          </h1>
          <p className="text-sm leading-normal lg:text-lg mt-[24px] lg:mt-[31px] lg:max-w-[398px]">
            Watch as we s bring the &quot;
            <strong className="underline font-semibold">Get Da Munchies</strong>
            &quot; logo to life! This video showcases our creative process from
            initial sketch to polished vector artwork.
          </p>
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
