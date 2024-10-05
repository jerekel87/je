import Image from "next/image";
import Reviews from "./Reviews";
import ReviewsData from "./ReviewsData";
import PlatformSelector from "./PlatformSelector";
import { getReviews } from "@/sanity/query/review";
import { Suspense } from "react";

export const revalidate = 60;

async function SectionOne() {
  const reviews = await getReviews({ limit: 9 });
  return (
    <section className="relative pt-[24px] lg:pt-[140px] pb-[70px] lg:pb-[124px] bg-[#f9f8f3]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-12.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="lg:container lg:px-4 mx-auto">
        <div className="container px-4 lg:px-0 flex justify-between flex-col lg:flex-row gap-[30px]">
          <ReviewsData />
          <div className="w-full lg:max-w-[486px]">
            <div className="h-0 pb-[75.8%] relative">
              <iframe
                className="w-full h-full rounded-[6px] lg:rounded-[10px] absolute top-0 left-0"
                src="https://www.youtube.com/embed/NpEaa2P7qZI?si=8Dc3pjtkxOqg4XSZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <Suspense>
          <Reviews
            initialReviews={reviews}
            platformSelector={<PlatformSelector />}
          />
        </Suspense>
      </div>
    </section>
  );
}

export default SectionOne;
