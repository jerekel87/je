"use server";

import { client } from "../lib/client";

export async function getFaqs({ categoryId = "" } = {}): Promise<any[]> {
  let query = `*[_type == "faq"] | order(_createdAt asc){
    _id,
    question,
    answer
  }`;
  if (categoryId) {
    query = `*[_type == "faq" && category._ref == $categoryId] | order(_createdAt asc){
      _id,
      question,
      answer
    }`;
  }
  return client.fetch(query, { categoryId });
}
