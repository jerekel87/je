import { ComponentProps, ReactNode } from "react";
import Image from "next/image";
import ReviewsMasonry from "./ReviewsMasonry";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { getReviews } from "@/sanity/query/review";
import { unstable_noStore } from "next/cache";

async function Reviews({
  subheader,
  footerText,
  footerButton,
}: {
  subheader?: ReactNode;
  footerText?: ReactNode;
  footerButton?: ReactNode;
}) {
  unstable_noStore();
  const reviews = await getReviews({ limit: 9 });
  return (
    <section className="relative pt-[70px] lg:pt-[140px] pb-[124px] bg-[#f9f8f3]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-12.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-[791px]">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <Image
              src="/assets/images/your-industry-peers@3x.webp"
              alt="Your industry peers"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[40px] lg:text-[100px] text-center font-portlin leading-[.9] text-balance mt-[12px] lg:mt-[22px]">
            SUCCESS STORIES
          </h1>
          {subheader}
        </div>
        <div>
          <ReviewsMasonry reviews={reviews} />
        </div>
        <div className="mx-auto max-w-[791px] text-center">
          {footerText}
          {footerButton}
        </div>
      </div>
      {/* <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[2]">
        <Image
          src="/assets/images/shape-7-copy-14.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div> */}
    </section>
  );
}

function Subheader({ children }: ComponentProps<"p">) {
  return (
    <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] mb-[60px] lg:mb-[70px] text-center text-[#53545c]">
      {children}
    </p>
  );
}
function FooterText({ children }: ComponentProps<"p">) {
  return (
    <p className="text-sm lg:text-lg mt-[30px] lg:mt-[40px] text-[#53545c]">
      {children}
    </p>
  );
}
function FooterButton({
  children,
  className,
  ...otherProps
}: ComponentProps<"button">) {
  return (
    <Button
      variant="outline"
      className={twMerge("mt-[30px] lg:mt-[40px]", className)}
      {...otherProps}
    >
      {children}
    </Button>
  );
}

Reviews.Subheader = Subheader;
Reviews.FooterText = FooterText;
Reviews.FooterButton = FooterButton;

export default Reviews;
