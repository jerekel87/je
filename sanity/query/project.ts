"use server";

import { Industry, Project } from "@/sanity.types";
import { client } from "../lib/client";

export async function getProjects({
  industryId = "",
  lastId = "",
  limit = 9,
} = {}): Promise<Project[]> {
  let query = `*[_type == "project" && _id > $lastId] | order(_id) [0...$limit]{
    _id,
    title,
    slug,
    mainImage
  }`;
  if (industryId) {
    query = `*[_type == "project" && industry._ref == $industryId && _id > $lastId] | order(_id) [0...$limit]{
      _id,
      title,
      slug,
      mainImage
      }`;
  }
  return client.fetch(query, { lastId, limit, industryId });
}

export async function getProject({ slug }: { slug: string }): Promise<Project> {
  let query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage
  }`;
  return client.fetch(query, { slug });
}

export async function getProjectsIndustries(): Promise<Industry[]> {
  let query = `*[_type == "industry"]{
      _id,
      title,
      description
    }`;

  return client.fetch(query);
}
