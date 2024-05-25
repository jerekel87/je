import Image from "next/image";
import Link from "next/link";
import FooterTopBg from "./FooterTopBg";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="relative">
      <div className="relative">
        <div className="absolute w-full h-full -z-10">
          <FooterTopBg />
          <div className="h-full w-full bg-primary" />
        </div>
        <div className="container px-4 lg:px-[30px] mx-auto lg:max-w-[1500px]">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 rounded-[10px] lg:left-0 lg:right-auto left-4 right-4"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #fff500, #fff)",
            }}
          >
            <div className="relative transform lg:scale-[1.09] lg:origin-bottom-left rounded-bl-[10px] w-full pb-[100%] lg:pb-0 -top-[30px] lg:top-0">
              <Image
                src="/assets/images/layer-20@3x.webp"
                fill
                alt="Rocket"
                className="object-cover lg:rounded-bl-[10px]"
              />
            </div>
            <div className="p-8 pt-0 lg:p-[100px] lg:pl-[0]">
              <h3 className="font-portlin text-[40px] xl:text-[100px] leading-[.9] text-center lg:text-left">
                SOLUTIONS THAT
                <br className="hidden lg:block" /> BOOSTS REVENUE
                <br className="hidden lg:block" /> FOR TOMORROW
              </h3>
              <p className="text-base lg:text-lg leading-[1.56] mt-[39px] text-center lg:text-left">
                <strong>We champion your success.</strong> Expect unyielding
                support, fearless strategy, and victorious branding!
              </p>
              <div className="mt-8 lg:mt-[63px] flex gap-4 lg:gap-[27px] flex-col lg:flex-row">
                <Button>CHOOSE A PACKAGE</Button>
                <Button variant="outline">REQUEST A QUOTE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary mt-[60px] lg:mt-[100px]">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-[203px]">
              <div className="relative size-[80px] lg:size-[65px] mx-auto lg:mx-0 ">
                <Image
                  src="/assets/images/je-logo.svg"
                  fill
                  alt="je logo"
                  className="absolute top-0 object-contain"
                />
              </div>

              <p className="mt-[34px] leading-[1.56] text-white">
                Jeremy Ellsworth Designs LLC is a full-service design agency
                catering to businesses and individuals, with a focus on
                delivering high-quality, professional design solutions.
              </p>
              <div className="mt-[24px] lg:mt-[34px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
                <div className="flex gap-[18px]">
                  <Image
                    src="/assets/images/217450@3x.webp"
                    height="39"
                    width="39"
                    alt="Better Business Bureau Accredited"
                    className="shrink-0 object-contain"
                  />

                  <p className="text-white font-portlin text-sm lg:text-[17px] leading-[1.09] font-medium whitespace-nowrap">
                    BETTER BUSINESS BUREAU
                    <br />
                    ACCREDITED
                  </p>
                </div>

                <div className="flex gap-[18px]">
                  <Image
                    src="/assets/images/layer-3@3x.webp"
                    height="39"
                    width="39"
                    alt="Better Business Bureau Accredited"
                    className="shrink-0 object-contain"
                  />

                  <p className="text-white font-portlin text-sm lg:text-[17px] leading-[1.09] font-medium">
                    NEW HAMPSHIRE
                    <br /> REGISTERED
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-10 lg:mt-0">
              <div>
                <h2 className="text-white font-portlin text-lg lg:text-[30px]">
                  MAIN
                </h2>
                <ul className="mt-5 lg:mt-[38px] flex flex-col gap-4 lg:gap-[26px]">
                  <li>
                    <Link
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="/portfolio"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="/packages"
                    >
                      Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="/revies"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="/articles"
                    >
                      Articles
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-white font-portlin text-lg lg:text-[30px]">
                  SOCIAL
                </h2>
                <ul className="mt-5 lg:mt-[38px] flex flex-col gap-4 lg:gap-[26px]">
                  <li>
                    <a
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="facebook.com"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="instagram.com"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="x.com"
                    >
                      Twitter/X
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="linkedin.com"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#7e7f88] text-sm lg:text-base"
                      href="youtube.com"
                    >
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-white font-portlin text-lg lg:text-[30px]">
                  CONTACT
                </h2>
                <ul className="mt-5 lg:mt-[38px] flex flex-col gap-4 lg:gap-[26px]">
                  <li>
                    <a href="#" className="font-bold text-white">
                      Schedule a call
                    </a>
                    <address className="mt-[26px] leading-[1.56] text-[#7e7f88] text-sm lg:text-base">
                      PO Box 7643 Belmont, NH USA
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#252534] mt-[30px] lg:mt-[88px]">
          <div className="container text-[#666770] text-sm flex flex-col lg:flex-row text-center lg:text-left justify-between py-[40px]">
            <span>
              © 2004-2024 Jeremy Ellsworth Designs LLC
              <br className="lg:hidden" /> All Rights Reserved
            </span>
            <span className="mt-4 lg:mt-0">
              <Link href="faq">FAQ</Link> •{" "}
              <Link href="privacy-policy">Privacy Policy</Link> •{" "}
              <Link href="users-agreement">Users Agreement</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
// function Footer() {
//   return (
//     <footer className="relative pt-[50px] lg:pt-[140px] bg-primary">
//       <div className="container mx-auto pt-[637px] lg:pt-[437px] relative lg:max-w-[1500px]">
//         <div
//           className="grid grid-cols-1 lg:grid-cols-2 rounded-[10px] absolute -top-[150px] lg:-top-[350px] z-[2] lg:left-0 lg:right-auto left-4 right-4"
//           style={{
//             backgroundImage: "linear-gradient(to bottom right, #fff500, #fff)",
//           }}
//         >
//           <div className="relative transform lg:scale-[1.09] lg:origin-bottom-left rounded-bl-[10px] w-full pb-[100%] lg:pb-0 -top-[30px] lg:top-0">
//             <Image
//               src="/assets/images/layer-20@3x.webp"
//               fill
//               alt="Rocket"
//               className="object-cover lg:rounded-bl-[10px]"
//             />
//           </div>
//           <div className="p-8 pt-0 lg:p-[100px] lg:pl-[0]">
//             <h3 className="font-portlin text-[40px] xl:text-[100px] leading-[.9] text-center lg:text-left">
//               SOLUTIONS THAT
//               <br className="hidden lg:block" /> BOOSTS REVENUE
//               <br className="hidden lg:block" /> FOR TOMORROW
//             </h3>
//             <p className="text-base lg:text-lg leading-[1.56] mt-[39px] text-center lg:text-left">
//               <strong>We champion your success.</strong> Expect unyielding
//               support, fearless strategy, and victorious branding!
//             </p>
//             <div className="mt-8 lg:mt-[63px] flex gap-4 lg:gap-[27px] flex-col lg:flex-row">
//               <Button>CHOOSE A PACKAGE</Button>
//               <Button variant="outline">REQUEST A QUOTE</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2">
//           <div className="lg:pr-[203px]">
//             <div className="relative size-[80px] lg:size-[65px] mx-auto lg:mx-0 ">
//               <Image
//                 src="/assets/images/je-logo.svg"
//                 fill
//                 alt="je logo"
//                 className="absolute top-0 object-contain"
//               />
//             </div>

//             <p className="mt-[34px] leading-[1.56] text-white">
//               Jeremy Ellsworth Designs LLC is a full-service design agency
//               catering to businesses and individuals, with a focus on delivering
//               high-quality, professional design solutions.
//             </p>
//             <div className="mt-[24px] lg:mt-[34px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
//               <div className="flex gap-[18px]">
//                 <Image
//                   src="/assets/images/217450@3x.webp"
//                   height="39"
//                   width="39"
//                   alt="Better Business Bureau Accredited"
//                   className="shrink-0 object-contain"
//                 />

//                 <p className="text-white font-portlin text-sm lg:text-[17px] leading-[1.09] font-medium whitespace-nowrap">
//                   BETTER BUSINESS BUREAU
//                   <br />
//                   ACCREDITED
//                 </p>
//               </div>

//               <div className="flex gap-[18px]">
//                 <Image
//                   src="/assets/images/layer-3@3x.webp"
//                   height="39"
//                   width="39"
//                   alt="Better Business Bureau Accredited"
//                   className="shrink-0 object-contain"
//                 />

//                 <p className="text-white font-portlin text-sm lg:text-[17px] leading-[1.09] font-medium">
//                   NEW HAMPSHIRE
//                   <br /> REGISTERED
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-3 mt-10 lg:mt-0">
//             <div>
//               <h2 className="text-white font-portlin text-lg lg:text-[30px]">
//                 MAIN
//               </h2>
//               <ul className="mt-5 lg:mt-[38px] flex flex-col gap-4 lg:gap-[26px]">
//                 <li>
//                   <Link
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="/home"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="/portfolio"
//                   >
//                     Portfolio
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="/packages"
//                   >
//                     Packages
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="/about"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="/revies"
//                   >
//                     Reviews
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="/articles"
//                   >
//                     Articles
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="text-white font-portlin text-lg lg:text-[30px]">
//                 SOCIAL
//               </h2>
//               <ul className="mt-5 lg:mt-[38px] flex flex-col gap-4 lg:gap-[26px]">
//                 <li>
//                   <a
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="facebook.com"
//                   >
//                     Facebook
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="instagram.com"
//                   >
//                     Instagram
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="x.com"
//                   >
//                     Twitter/X
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="linkedin.com"
//                   >
//                     Linkedin
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     className="text-[#7e7f88] text-sm lg:text-base"
//                     href="youtube.com"
//                   >
//                     YouTube
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h2 className="text-white font-portlin text-lg lg:text-[30px]">
//                 CONTACT
//               </h2>
//               <ul className="mt-5 lg:mt-[38px] flex flex-col gap-4 lg:gap-[26px]">
//                 <li>
//                   <a href="#" className="font-bold text-white">
//                     Schedule a call
//                   </a>
//                   <address className="mt-[26px] leading-[1.56] text-[#7e7f88] text-sm lg:text-base">
//                     PO Box 7643 Belmont, NH USA
//                   </address>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-[#252534] mt-[30px] lg:mt-[88px]">
//         <div className="container text-[#666770] text-sm flex flex-col lg:flex-row text-center lg:text-left justify-between py-[40px]">
//           <span>
//             © 2004-2024 Jeremy Ellsworth Designs LLC
//             <br className="lg:hidden" /> All Rights Reserved
//           </span>
//           <span className="mt-4 lg:mt-0">
//             <Link href="faq">FAQ</Link> •{" "}
//             <Link href="privacy-policy">Privacy Policy</Link> •{" "}
//             <Link href="users-agreement">Users Agreement</Link>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

export default Footer;
