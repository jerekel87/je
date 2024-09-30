"use client";

import Image from "next/image";
import ReactPlayer from "react-player";
import ShareModal from "@/app/(shared)/components/ShareModal";
import { Article } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";

function SectionOneMedia({ article }: { article: Article }) {
  return (
    <div className="relative mt-6 lg:mt-[58px]">
      <div className="hidden lg:flex absolute -right-[100px] top-[50px] z-[1] flex-col items-center">
        <ShareModal pathname={`articles/${article.slug?.current}`} />
        <p className="mt-[10px] text-sm font-bold">Share</p>
      </div>

      <div className="w-full h-0 pb-[75.8%] relative">
        <div className="w-full h-0 pb-[75.8%] relative rounded-[6px] lg:rounded-[10px] bg-black overflow-hidden">
          {article.mainVideoLink ? (
            <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", objectFit: "contain" }}
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              />
            </div>
          ) : (
            <Image
              src={urlForImage(article.mainImage as any)}
              alt={article.title || ""}
              fill
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default SectionOneMedia;
