"use server";

import { Article } from "@/sanity.types";
import { client } from "../lib/client";

export async function getArticles({ lastId = "", limit = 9 } = {}): Promise<
  Article[]
> {
  let query = `*[_type == "article" && _id > $lastId] | order(_id) [0...$limit]{
    title,
    slug,
    mainImage,
    body
  }`;
  return client.fetch(query, { lastId, limit });
}

export async function getArticle({ slug }: { slug: string }): Promise<Article> {
  let query = `*[_type == "article" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    body
  }`;
  return client.fetch(query, { slug });
}
