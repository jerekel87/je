"use client";

import Image from "next/image";
import PortableText from "react-portable-text";
import { Button } from "@/app/(shared)/components/ui/button";
import { Article } from "@/sanity.types";
import { useState } from "react";
import { ARTICLES_LIMIT } from "../page";
import { getArticles } from "@/sanity/query/article";
import { urlForImage } from "@/sanity/lib/image";
import { cn } from "@/app/(shared)/lib/utils";
import Link from "next/link";

function Articles({ initialArticles }: { initialArticles: Article[] }) {
  const [articles, setArticles] = useState(initialArticles);
  const initialLastId =
    initialArticles.length >= ARTICLES_LIMIT
      ? initialArticles[initialArticles.length - 1]._id
      : "";
  const [lastId, setLastId] = useState(initialLastId);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = async () => {
    setIsLoadingMore(true);
    try {
      const articlesRes = await getArticles({ lastId });
      setArticles([...articles, ...articlesRes]);
      if (articlesRes.length > 0) {
        setLastId(articlesRes[articlesRes.length - 1]._id);
      } else {
        setLastId("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  const firstArticle = articles[0];

  return (
    <section className="max-w-[790px]">
      {firstArticle ? (
        <article className="border-b border-muted pb-[45px]">
          <header>
            <h1 className="text-[40px] lg:text-[60px] font-portlin leading-[.9]">
              {firstArticle.title}
            </h1>
          </header>
          <div className="w-full pb-[75%] relative mt-[40px] rounded-[8px] overflow-hidden">
            <Image
              src={urlForImage(firstArticle.mainImage as any)}
              alt={firstArticle.title || ""}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-base text-muted-foreground lg:text-lg mt-4 lg:mt-[40px]">
            Gone are the days of aesthetics trumping experience. Today, web
            design is all about crafting immersive experiences that connect,
            captivate, motivate, and delight.
          </p>
        </article>
      ) : (
        <p className="text-[40px] lg:text-[60px] font-portlin leading-[.9]">
          No results found.
        </p>
      )}
      {articles.slice(1).map((article) => (
        <Link
          href={`/articles/${article.slug?.current}`}
          key={article._id}
          className="cursor-pointer"
        >
          <article className="grid grid-cols-[1fr,2fr] lg:items-center gap-[10px] lg:gap-[38px] mt-4 lg:mt-[40px] border-b border-muted pb-4 lg:pb-[40px]">
            <div className="w-full">
              <div className="w-full pb-[75%] relative rounded-[8px] overflow-hidden">
                <Image
                  src={urlForImage(article.mainImage as any)}
                  alt={article.title || ""}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <header>
                <h2 className="text-base lg:text-[40px] font-portlin leading-none line-clamp-2">
                  {article.title}
                </h2>
              </header>
              <PortableText
                className="leading-[1.6] text-xs lg:text-sm mt-[10px] lg:mt-[26px] text-muted-foreground line-clamp-2"
                content={article.body as any}
              />
            </div>
          </article>
        </Link>
      ))}

      {lastId && (
        <div className="flex justify-center mt-[40px] lg:mt-[60px]">
          <Button
            variant="outline"
            className={cn("mx-auto", isLoadingMore && "!border-none")}
            onClick={loadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "Loading..." : "SHOW MORE"}
          </Button>
        </div>
      )}
    </section>
  );
}

export default Articles;
