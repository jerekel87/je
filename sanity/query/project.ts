"use server";

import { Industry, Project, Review } from "@/sanity.types";
import { client } from "../lib/client";

export async function getProjects({
  industryId = "",
  lastId = "",
  limit = 9,
} = {}): Promise<Project[]> {
  let query = `*[_type == "project" && _id > $lastId] | order(_createdAt desc) [0...$limit]{
    _id,
    title,
    slug,
    mainImage
  }`;
  if (industryId) {
    query = `*[_type == "project" && industry._ref == $industryId && _id > $lastId] | order(_createdAt desc) [0...$limit]{
      _id,
      title,
      slug,
      mainImage
      }`;
  }
  return client.fetch(query, { lastId, limit, industryId });
}

export async function getProject({ slug }: { slug: string }): Promise<
  Project & {
    industry: { title: string };
    reviews: (Review & {
      reviewPlatformLogo: any;
      reviewPlatformName: any;
    })[];
  }
> {
  let query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    descriptionOne,
    mainImage,
    descriptionTwo,
    sliderImages,
    secondaryImage,
    industry-> {
      title,
      slug
    },
    "reviews": reviews[]->{
      _id,
      reviewerName,
      reviewerInfo,
      rating,
      reviewText,
      reviewDate,
      avatar,
      "reviewPlatformLogo": reviewPlatform->logo,
      "reviewPlatformName": reviewPlatform->name
    }
  }`;
  return client.fetch(query, { slug });
}

export async function getProjectsIndustries(): Promise<Industry[]> {
  let query = `*[_type == "industry"] | order(title asc){
      _id,
      title,
      percentageIncrease,
      description
    }`;

  return client.fetch(query);
}

export async function getProjectsIndustry(id: string): Promise<Industry> {
  let query = `*[_type == "industry" && _id == $id][0]{
      _id,
      title,
      description,
      percentageIncrease
    }`;

  return client.fetch(query, { id });
}
