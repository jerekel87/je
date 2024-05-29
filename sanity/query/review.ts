"use server";

import { Review, ReviewPlatform } from "@/sanity.types";
import { client } from "../lib/client";

type ReviewRatingCount = {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
};

export async function getReviews({
  platformId = "",
  lastId = "",
  limit = 9,
} = {}): Promise<
  (Review & {
    avatarUrl: string;
    reviewPlatformLogoUrl: string;
    reviewPlatformName: string;
  })[]
> {
  let query = `*[_type == "review" && _id > $lastId] | order(_id) [0...$limit]{
    _id,
    reviewerName,
    reviewerInfo,
    rating,
    reviewText,
    reviewDate,
    "avatarUrl": avatar.asset->url,
    "reviewPlatformLogoUrl": reviewPlatform->logo.asset->url
  }`;
  if (platformId) {
    query = `*[_type == "review" && reviewPlatform._ref == $platformId && _id > $lastId] | order(_id) [0...$limit]{
        _id,
        reviewerName,
        reviewerInfo,
        rating,
        reviewText,
        reviewDate,
        "avatarUrl": avatar.asset->url,
        "reviewPlatformLogoUrl": reviewPlatform->logo.asset->url
      }`;
  }
  return client.fetch(query, { lastId, limit, platformId });
}
export async function getReviewsCountByRating(): Promise<ReviewRatingCount> {
  return client.fetch(
    `{
      "5": count(*[_type == "review" && rating == 5]),
      "4": count(*[_type == "review" && rating == 4]),
      "3": count(*[_type == "review" && rating == 3]),
      "2": count(*[_type == "review" && rating == 2]),
      "1": count(*[_type == "review" && rating == 1]),
    }`
  );
}
export async function getReviewsPlatforms(): Promise<
  (ReviewPlatform & { logoUrl: string })[]
> {
  let query = `*[_type == "reviewPlatform"]{
      _id,
      name,
      "logoUrl": logo.asset->url
    }`;

  return client.fetch(query);
}
