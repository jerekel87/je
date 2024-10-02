import { ComponentProps, ReactNode } from "react";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { getReviews } from "@/sanity/query/review";
import ReviewsMasonry from "./ReviewsMasonry";
import Image from "next/image";

export const revalidate = 60;
async function Reviews({
  subheader,
  footerText,
  footerButton,
}: {
  subheader?: ReactNode;
  footerText?: ReactNode;
  footerButton?: ReactNode;
}) {
  const reviews = await getReviews({ limit: 9 });
  return (
    <section className="relative pt-[70px] lg:pt-[140px] pb-[60px] lg:pb-[124px] bg-[#f9f8f3] static-background-hard">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px] static-background-hard before:z-[1] before:top-[12%] before:h-[86%]">
        <Image
          src="/assets/images/shape-7-copy-12.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 mx-auto relative z-[1]">
        <div className="mx-auto max-w-[800px]">
          <div className="relative w-[100px] h-[25px] lg:w-[200px] lg:h-[50px] mx-auto">
            <Image
              src="/assets/images/your-industry-peers@3x.webp"
              alt="Your industry peers"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[50px] lg:text-[100px] text-center font-portlin tracking-[0.5px] leading-[.9] text-balance mt-[12px] lg:mt-[4px]">
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
    <p className="relative z-[1] text-sm leading-normal lg:text-lg mt-[24px] lg:mt-[40px] mb-[40px] lg:mb-[70px] text-center text-[#53545c]">
      {children}
    </p>
  );
}
function FooterText({ children }: ComponentProps<"div">) {
  return (
    <div className="text-sm lg:text-lg mt-[30px] lg:mt-[60px] text-[#53545c] flex justify-center">
      {children}
    </div>
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
      className={twMerge(
        "mt-[30px] lg:mt-[40px] w-full lg:w-auto bg-white",
        className
      )}
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
