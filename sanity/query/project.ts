"use server";

import { Project } from "@/sanity.types";
import { client } from "../lib/client";

export async function getProjects({
  industryId = "",
  lastId = "",
  limit = 9,
} = {}): Promise<
  (Project & {
    mainImageUrl: string;
  })[]
> {
  let query = `*[_type == "project" && _id > $lastId] | order(_id) [0...$limit]{
    _id,
    title,
    slug,
    "mainImageUrl": mainImage.asset->url
  }`;
  if (industryId) {
    query = `*[_type == "project" && industry._ref == $industryId && _id > $lastId] | order(_id) [0...$limit]{
      _id,
      title,
      slug,
      "mainImageUrl": mainImage.asset->url
      }`;
  }
  return client.fetch(query, { lastId, limit, industryId });
}
