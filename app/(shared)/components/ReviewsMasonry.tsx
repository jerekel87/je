"use client";

import ReviewCard from "@/app/(shared)/components/ReviewCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function ReviewsMasonry() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry className="masonry-container">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Masonry>
    </ResponsiveMasonry>
  );
}
export default ReviewsMasonry;
