"use client";

import ReviewCard from "@/app/(shared)/components/ReviewCard";
import Image from "next/image";
import { Review } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

function FeaturedStories({
  featuredStories,
}: {
  featuredStories: (Review & {
    reviewPlatformLogo: any;
    reviewPlatformName: string;
  })[];
}) {
  return (
    <section className="relative py-[53px] lg:py-[140px] lg:pb-[80px]">
      <div className="w-full h-[690px] bg-[linear-gradient(transparent,#f7f5ef)] absolute z-[-1] bottom-0" />
      <div className="container px-4 mx-auto  overflow-hidden">
        <div className="relative h-[92px] lg:h-[250px] w-full">
          <Image
            src="/assets/images/excellence.webp"
            alt="Excellence"
            fill
            className="object-contain"
          />
          <div className="absolute w-full h-full flex flex-col justify-center items-center">
            <div className="relative w-[100px] h-[25px] lg:w-[239px] lg:h-[52px] mx-auto">
              <Image
                src="/assets/images/experience-the-same@3x.webp"
                alt="Your industry peers"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-[50px] lg:text-[100px] text-center font-portlin tracking-[0.5px] leading-[.9] text-balance lg:mt-[4px] pb-[28px]">
              FEATURED STORIES
            </h1>
          </div>
        </div>
        <div className="hidden lg:grid grid-col-1 lg:grid-cols-3 gap-4 lg:gap-[30px] mt-4 lg:mt-0 lg:[&>*:nth-child(2)]:mt-[40px] lg:[&>*:nth-child(3)]:mt-[80px]">
          {featuredStories.map((review) => (
            <ReviewCard
              key={review._id}
              avatar={urlForImage(review.avatar as any)}
              reviewerName={review.reviewerName || ""}
              reviewerInfo={review.reviewerInfo || ""}
              rating={review.rating || 5}
              text={review.reviewText}
              platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
              platformName={review.reviewPlatformName}
            />
          ))}
        </div>
        <Swiper
          loop
          spaceBetween={16}
          slidesPerView={1.2}
          className="lg:rounded-[15px] mt-[40px] lg:!hidden !overflow-visible"
        >
          {featuredStories.map((review, i) => (
            <SwiperSlide key={i}>
              <ReviewCard
                key={review._id}
                avatar={urlForImage(review.avatar as any)}
                reviewerName={review.reviewerName || ""}
                reviewerInfo={review.reviewerInfo || ""}
                rating={review.rating || 5}
                text={review.reviewText}
                platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
                platformName={review.reviewPlatformName}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="text-xs leading-normal lg:text-lg mt-[30px] lg:mt-[40px] text-center text-[#53545c]">
          At Jeremy Ellsworth Designs LLC, we are committed to your success.
          <br className="hidden lg:block" />
          We believe that our success lies in your success, and we are dedicated
          to helping you achieve it.
        </p>
      </div>
      <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[1]">
        <Image
          src="/assets/images/shape-7-copy-14.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
    </section>
  );
}

export default FeaturedStories;
