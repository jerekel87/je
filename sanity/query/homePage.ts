"use server";

import { HomePage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getHomePageSetting(): Promise<HomePage> {
  let query = `*[_type == "homePage"][0]{
    _id,
    articleLink,
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
    ourSolutions[]{
      name,
      description,
      images,
      content,
      button
    },
    projects[]->{
      title,
      slug,
      mainImage
    },
    sketchConcept{
      sketchBefore,
      sketchAfter
    }
  }`;
  return client.fetch(query);
}
