"use server";

import { Industry, Project, Review } from "@/sanity.types";
import { client } from "../lib/client";

export async function getProjects({
  industrySlug = "",
  lastCreatedAt = "",
  limit = 9,
  sortBy = "Most Recent",
} = {}): Promise<Project[]> {
  let sortByValue = "desc";
  let operator = "<";

  switch (sortBy) {
    case "Most Recent":
      sortByValue = "desc";
      operator = "<";
      break;
    case "Oldest First":
      sortByValue = "asc";
      operator = ">";
      break;
  }

  let query = `*[_type == "project" ${lastCreatedAt ? `&& _createdAt ${operator} $lastCreatedAt` : ""}] | order(_createdAt ${sortByValue}) [0...$limit]{
    ...
  }`;
  if (industrySlug && industrySlug !== "all") {
    query = `*[_type == "project" && industry->slug.current == $industrySlug ${lastCreatedAt ? `&& _createdAt ${operator} $lastCreatedAt` : ""}] | order(_createdAt ${sortByValue}) [0...$limit]{
        ...
      }`;
  }
  return client.fetch(query, { lastCreatedAt, limit, industrySlug });
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
    ...,
    industry->,
    reviews[]->{
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
      ...
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
