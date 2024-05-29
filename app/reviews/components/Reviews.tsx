"use client";

import ReviewsMasonry from "@/app/(shared)/components/ReviewsMasonry";
import { Button } from "@/app/(shared)/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import PlatformSelector from "./PlatformSelector";
import { cn } from "@/app/(shared)/lib/utils";
import { Review } from "@/sanity.types";
import { getReviews } from "@/sanity/query/review";
import { useState } from "react";
import { REVIEWS_LIMIT } from "./SectionOne";
import { LoaderCircle } from "lucide-react";

function Reviews({
  initialReviews,
}: {
  initialReviews: (Review & {
    avatarUrl: string;
    reviewPlatformLogoUrl: string;
    reviewPlatformName: string;
  })[];
}) {
  const [reviews, setReviews] = useState(initialReviews);
  const initialLastId =
    initialReviews.length >= REVIEWS_LIMIT
      ? initialReviews[initialReviews.length - 1]._id
      : "";
  const [lastId, setLastId] = useState(initialLastId);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  const loadMore = async () => {
    setIsLoadingMore(true);
    try {
      const reviewsRes = await getReviews({ lastId });
      setReviews([...reviews, ...reviewsRes]);
      if (reviewsRes.length > 0) {
        setLastId(reviewsRes[reviewsRes.length - 1]._id);
      } else {
        setLastId("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const handlePlaformChange = async (value: string) => {
    setIsLoadingReviews(true);
    try {
      const reviewsRes = await getReviews({
        platformId: value == "all" ? "" : value,
      });
      setReviews(reviewsRes);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingReviews(false);
    }
  };

  return (
    <>
      <div className="px-4 lg:px-0 flex justify-between flex-col lg:flex-row gap-4 mt-[80px] pt-[48px] border-t border-[#e8e7e6]">
        <h1 className="text-[40px] lg:text-[60px] font-portlin">
          SUCCESS STORIES
        </h1>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-[30px]">
          <PlatformSelector onChange={handlePlaformChange} />
          <Select>
            <SelectTrigger className="w-full lg:w-[282px]">
              <SelectValue placeholder="Recent Reviews" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="px-4 lg:px-0 mt-[46px]">
        {isLoadingReviews ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <ReviewsMasonry reviews={reviews} />
        )}
      </div>
      {lastId && (
        <div className="mx-auto max-w-[791px] text-center">
          <Button
            variant="outline"
            className={cn(
              "mt-[30px] lg:mt-[40px]",
              isLoadingMore && "!border-none"
            )}
            onClick={loadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "Loading..." : "SHOW MORE"}
          </Button>
        </div>
      )}
    </>
  );
}

export default Reviews;
