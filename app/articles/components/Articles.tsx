"use client";

import { useState } from "react";
import { Button } from "@/app/(shared)/components/ui/button";
import { Article } from "@/sanity.types";
import { getArticles } from "@/sanity/query/article";
import { urlForImage } from "@/sanity/lib/image";
import { cn } from "@/app/(shared)/lib/utils";
import Image from "next/image";
import PortableText from "react-portable-text";
import Link from "next/link";

function Articles({ initialArticles }: { initialArticles: Article[] }) {
  const [articles, setArticles] = useState(initialArticles);
  const initialLastId =
    initialArticles.length >= 9
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
            <Link
              href={`/articles/${firstArticle.slug?.current}`}
              className="hover:underline"
            >
              <h1 className="text-[40px] lg:text-[60px] font-portlin tracking-[0.5px] leading-[.92]">
                {firstArticle.title}
              </h1>
            </Link>
          </header>
          <Link
            href={`/articles/${firstArticle.slug?.current}`}
            className="hover:underline block"
          >
            <div className="w-full pb-[75%] relative mt-[40px] rounded-[8px] overflow-hidden">
              <Image
                src={urlForImage(firstArticle.mainImage as any)}
                alt={firstArticle.title || ""}
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <PortableText
            content={firstArticle.body as any}
            className="text-sm leading-normal text-muted-foreground lg:text-lg mt-4 lg:mt-[40px]"
          />
        </article>
      ) : (
        <p className="px-3 lg:px-0 text-xs lg:text-lg font-medium">
          NO RESULTS FOUND
        </p>
      )}
      {articles.slice(1).map((article) => (
        <article
          key={article._id}
          className="grid grid-cols-[1fr,2fr] lg:items-center gap-[10px] lg:gap-[38px] mt-4 lg:mt-[40px] border-b border-muted pb-4 lg:pb-[40px]"
        >
          <Link
            href={`/articles/${article.slug?.current}`}
            className="hover:underline block w-full"
          >
            <div className="w-full pb-[75%] relative rounded-[8px] overflow-hidden">
              <Image
                src={urlForImage(article.mainImage as any)}
                alt={article.title || ""}
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div>
            <header>
              <Link
                href={`/articles/${article.slug?.current}`}
                className="hover:underline"
              >
                <h2 className="text-lg lg:text-[40px] font-portlin tracking-[0.5px] leading-[1.06] line-clamp-2">
                  {article.title}
                </h2>
              </Link>
            </header>
            <PortableText
              className="text-sm lg:text-lg leading-normal mt-[10px] lg:mt-[26px] text-muted-foreground line-clamp-2"
              content={article.body as any}
            />
          </div>
        </article>
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
