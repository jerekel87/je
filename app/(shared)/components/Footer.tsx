"use client";

import Image from "next/image";
import Link from "next/link";
import FooterTopBg from "./FooterTopBg";
import CalComModal from "./CalComModal";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function Footer() {
  const MainList = () => (
    <ul className="lg:mt-[38px] flex flex-col gap-4 lg:gap-[20px]">
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/home"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/projects"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/pricing"
        >
          Packages
        </Link>
      </li>
      {/* <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/about"
        >
          About
        </Link>
      </li> */}
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/reviews"
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="/articles"
        >
          Articles
        </Link>
      </li>
    </ul>
  );

  const SocialList = () => (
    <ul className="lg:mt-[38px] flex flex-col gap-4 lg:gap-[20px]">
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://web.facebook.com/jnellsworth"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.instagram.com/jnellsworth"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="http://www.x.com/jnellsworth_"
        >
          Twitter/X
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.linkedin.com/company/jeremy-ellsworth-designs-llc/"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          className="text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base"
          href="https://www.youtube.com/@jeremyellsworthdesignsllc"
        >
          YouTube
        </a>
      </li>
    </ul>
  );

  const ContactList = () => (
    <ul className="lg:mt-[38px] flex flex-col gap-4 lg:gap-[20px]">
      <li>
        <CalComModal.Trigger>
          <a
            href="#"
            className="font-bold text-white text-center lg:text-left inline-block w-full"
          >
            Schedule a call
          </a>
        </CalComModal.Trigger>
        <address className="mt-[26px] lg:mt-[20px] leading-[1.56] text-[#7e7f88] text-sm text-center lg:text-left inline-block w-full lg:text-base">
          PO Box 7643 Belmont, NH USA
        </address>
      </li>
    </ul>
  );
  return (
    <footer className="relative static-background">
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 sm:size-[800px] xl:size-[908px] mx-auto top-[122px]">
        <Image
          src="/assets/images/footer-circular.webp"
          fill
          alt="Circular effect"
          className="object-contain"
        />
      </div>
      <div className="relative">
        <div className="absolute w-full h-full -z-10">
          <FooterTopBg />
          <div className="h-full w-full bg-primary" />
        </div>
        <div className="container px-2 lg:px-[30px] mx-auto lg:max-w-[1414px]">
          <div
            className="relative grid grid-cols-1 lg:grid-cols-2 rounded-[10px] lg:left-0 lg:right-auto bg-[#fff500] static-background"
            // style={{
            //   backgroundImage:
            //     "linear-gradient(to bottom right, #fff500, #fff)",
            // }}
          >
            <div className="relative transform row-start-2 lg:row-start-auto rounded-l-[10px] w-full pb-[100%] lg:pb-0 lg:top-0 overflow-hidden">
              <Image
                src="/assets/images/layer-20@3x.webp"
                fill
                alt="Rocket"
                className="object-cover lg:rounded-bl-[10px] lg:hidden"
              />
              <Image
                src="/assets/images/layer-7@2x.webp"
                fill
                alt="Jeremy"
                className="hidden lg:block object-cover lg:rounded-bl-[10px]"
              />
              <div className="absolute w-full bottom-0 p-[28px] lg:hidden mt-8 lg:mt-[63px] gap-4 lg:gap-[27px] grid grid-cols-2">
                <Button>BUSINESS TIPS</Button>
                <CalComModal.Trigger>
                  <Button variant="outline" className="bg-white w-full">
                    GET A QUOTE
                  </Button>
                </CalComModal.Trigger>
              </div>
            </div>
            <div className="relative z-[1] p-[26px] pt-[35px] lg:p-[86px] lg:pb-[100px] lg:pl-[0]">
              <h3 className="font-portlin uppercase tracking-[0.5px] text-[50px] xl:text-[100px] leading-[.9]">
                SOLUTIONS THAT
                <br className="hidden lg:block" />{" "}
                <span className="relative inline-block boosts-bg text-white z-[1]">
                  BOOSTS
                </span>{" "}
                REVENUE
                <br className="hidden lg:block" /> FOR TOMORROW
              </h3>
              <p className="text-sm leading-normal lg:text-lg mt-[22px] lg:mt-[28px] max-w-[470px]">
                <strong>We champion your success.</strong> Expect unyielding
                support, fearless strategy, and victorious branding!
              </p>
              <div className="hidden lg:flex mt-8 lg:mt-[58px] gap-4 lg:gap-[27px] flex-row">
                <Link href="/articles">
                  <Button className="lgmin-w-[210px]">BUSINESS TIPS</Button>
                </Link>
                <CalComModal.Trigger>
                  <Button variant="outline" className="lg:min-w-[210px]">
                    GET A QUOTE
                  </Button>
                </CalComModal.Trigger>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary mt-[60px] lg:mt-[100px]">
        <div className="container px-4 mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-[203px]">
              <div className="relative size-[56px] lg:size-[65px] mx-auto lg:mx-0 ">
                <Image
                  src="/assets/images/je-logo.png"
                  fill
                  alt="je logo"
                  className="absolute top-0 object-contain"
                />
              </div>

              <p className="text-xs lg:text-base text-center lg:text-left mt-[23px] text-white leading-[1.58] max-w-[400px]">
                Jeremy Ellsworth Designs LLC is a full-service design agency
                catering to businesses and individuals, with a focus on
                delivering high-quality, professional design solutions.
              </p>
              <div className="mt-[24px] lg:mt-[34px] flex flex-col lg:flex-row lg:items-center gap-[20px] lg:gap-[40px]">
                {/* <div className="flex gap-[18px]">
                  <Image
                    src="/assets/images/217450@3x.webp"
                    height="39"
                    width="39"
                    alt="Better Business Bureau Accredited"
                    className="shrink-0 object-contain"
                  />

                  <p className="text-white font-portlin uppercase tracking-[0.5px] text-sm lg:text-[17px] leading-[1.09] font-medium whitespace-nowrap">
                    BETTER BUSINESS BUREAU
                    <br />
                    ACCREDITED
                  </p>
                </div> */}

                <div className="flex gap-[14px] lg:gap-[18px] flex-col lg:flex-row items-center">
                  <Image
                    src="/assets/images/layer-3@3x.webp"
                    height="39"
                    width="39"
                    alt="Better Business Bureau Accredited"
                    className="shrink-0 object-contain"
                  />

                  <p className="text-white text-center  lg:text-left font-portlin uppercase tracking-[0.5px] text-sm lg:text-[17px] leading-[1.09] font-medium">
                    NEW HAMPSHIRE
                    <br /> REGISTERED
                    <span className="lg:hidden">LLC BUSINESS</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-3 mt-10 lg:mt-0">
              <div>
                <h2 className="text-white font-portlin uppercase tracking-[0.5px] text-lg lg:text-[30px]">
                  MAIN
                </h2>
                <MainList />
              </div>
              <div>
                <h2 className="text-white font-portlin uppercase tracking-[0.5px] text-lg lg:text-[30px]">
                  SOCIAL
                </h2>
                <SocialList />
              </div>
              <div>
                <h2 className="text-white font-portlin uppercase tracking-[0.5px] text-lg lg:text-[30px]">
                  CONTACT
                </h2>
                <ContactList />
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full mt-[40px] lg:hidden"
            >
              <AccordionItem
                value="main"
                className="border-[#252534] border-b-0"
              >
                <AccordionTrigger className="text-white border-[#252534] text-[30px] border-t border-b-0 font-normal py-[24px] px-0 leading-none !no-underline lg:text-[50px]">
                  <span className="font-portlin uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                    MAIN MENU
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-0 overflow-visible pb-[24px]">
                  <MainList />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="social"
                className="border-[#252534] border-b-0"
              >
                <AccordionTrigger className="text-white border-[#252534] text-[30px] border-t border-b-0 font-normal py-[24px] px-0 leading-none !no-underline lg:text-[50px]">
                  <span className="font-portlin uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                    SOCIAL MEDIA
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-0 overflow-visible pb-[24px]">
                  <SocialList />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="contact" className="border-[#252534]">
                <AccordionTrigger className="text-white border-[#252534] text-[30px] border-t border-b-0 font-normal py-[24px] px-0 leading-none !no-underline lg:text-[50px]">
                  <span className="font-portlin uppercase tracking-[0.5px] leading-none whitespace-nowrap w-[30%]">
                    CONTACT
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-0 overflow-visible pb-[24px]">
                  <ContactList />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="lg:border-t lg:border-[#252534] lg:mt-[88px]">
          <div className="relative z-[1] container px-4 text-[#666770] text-xs flex flex-col lg:flex-row text-center lg:text-left justify-between py-[40px]">
            <span>
              © 2004-2024 Jeremy Ellsworth Designs LLC
              <br className="lg:hidden" /> All Rights Reserved
            </span>
            <span className="mt-4 lg:mt-0">
              <Link href="/faq">FAQ</Link> •{" "}
              <Link href="/faq#policy">Privacy Policy</Link> •{" "}
              <Link href="/faq">Users Agreement</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
