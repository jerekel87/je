"use server";

import { PricingPage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getPricingPageSetting(): Promise<PricingPage> {
  let query = `*[_type == "pricingPage"][0]{
    _id,
    articleLink,
    sketchConcept{
      sketchBefore,
      sketchAfter
    },
    projects[]->{
      title,
      slug,
      mainImage
    },
    featuredStories[]->{
      _id,
      reviewerName,
      reviewerInfo,
      rating,
      reviewText,
      reviewDate,
      avatar,
      "reviewPlatformLogo": reviewPlatform->logo,
      "reviewPlatformName": reviewPlatform->name
    },
    packages[]{
      name,
      "iconUrl": icon.asset->url,
      packageItems[]
    }
  }`;
  return client.fetch(query);
}
