"use client";

import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { Review } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ReviewsMasonry({
  reviews,
}: {
  reviews: (Review & {
    reviewPlatformLogo: any;
    reviewPlatformName: string;
  })[];
}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry className="masonry-container">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            avatar={urlForImage(review.avatar as any)}
            reviewerName={review.reviewerName || ""}
            reviewerInfo={review.reviewerInfo || ""}
            rating={review.rating || 5}
            text={review.reviewText}
            platformLogoUrl={urlForImage(review.reviewPlatformLogo)}
            platformName={review.reviewPlatformName}
            images={review.images}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
export default ReviewsMasonry;
