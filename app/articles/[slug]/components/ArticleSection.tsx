"use client";

import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import ReactPlayer from "react-player";
import PortableText from "react-portable-text";

function ArticleSection({ articleSection }: { articleSection: any }) {
  return (
    <section className="mt-[50px] lg:mt-[70px]">
      {(articleSection.videoLink || articleSection.image) && (
        <div className="w-full h-0 pb-[75.8%] relative rounded-[6px] lg:rounded-[10px] bg-black overflow-hidden">
          {articleSection.videoLink ? (
            <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: "absolute", objectFit: "contain" }}
                url={articleSection.videoLink}
              />
            </div>
          ) : (
            <Image
              src={urlForImage(articleSection.image as any)}
              alt=""
              fill
              className="object-cover"
            />
          )}
        </div>
      )}

      {articleSection.body && (
        <PortableText
          content={articleSection.body}
          className="lg:px-[58px] mt-6 lg:mt-[40px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px]"
        />
      )}
    </section>
  );
}

export default ArticleSection;
