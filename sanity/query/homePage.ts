"use server";

import { HomePage } from "@/sanity.types";
import { client } from "../lib/client";

export async function getHomePageData(): Promise<HomePage> {
  let query = `*[_type == "homePage"][0]{
    _id,
    sketchBefore,
    sketchAfter
  }`;
  return client.fetch(query);
}
