"use client";

import ReviewCard from "@/app/(shared)/components/ReviewCard";
import { Review } from "@/sanity.types";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ReviewsMasonry({
  reviews,
}: {
  reviews: (Review & {
    avatarUrl: string;
    reviewPlatformLogoUrl: string;
    reviewPlatformName: string;
  })[];
}) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry className="masonry-container">
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            avatar={review.avatarUrl}
            reviewerName={review.reviewerName || ""}
            reviewerInfo={review.reviewerInfo || ""}
            rating={review.rating || 5}
            text={review.reviewText}
            platformLogoUrl={review.reviewPlatformLogoUrl}
            platformName={review.reviewPlatformName}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
export default ReviewsMasonry;
