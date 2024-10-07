"use client";

import CalComModalTrigger from "@/app/(shared)/CalComModalTrigger";
import { Button } from "@/app/(shared)/components/ui/button";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player";
import PortableText from "react-portable-text";

function ArticleSection({ articleSection }: { articleSection: any }) {
  return (
    <section className="mt-[50px] lg:mt-[70px]">
      {(articleSection.videoLink || articleSection.image) &&
      articleSection.videoLink ? (
        <div className="w-full h-0 pb-[75.8%] relative rounded-[6px] lg:rounded-[10px] bg-black overflow-hidden">
          <div className="w-full pb-[56.4%] absolute top-1/2 -translate-y-1/2">
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ position: "absolute", objectFit: "contain" }}
              url={articleSection.videoLink}
            />
          </div>
        </div>
      ) : articleSection.image ? (
        <Image
          src={urlForImage(articleSection.image as any)}
          alt="Image"
          width="900"
          height="900"
          className="rounded-[6px] lg:rounded-[10px] overflow-hidden"
        />
      ) : null}

      {articleSection.title && (
        <h2 className="text-[30px] lg:text-[60px] leading-none font-portlin uppercase tracking-[0.5px] mt-[30px] lg:mt-[40px] lg:px-[58px]">
          {articleSection.title}
        </h2>
      )}

      {articleSection.body && (
        <PortableText
          content={articleSection.body}
          className="lg:px-[58px] mt-6 lg:mt-[40px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px]"
        />
      )}

      {/* {(articleSection.primaryButton?.text ||
        articleSection.secondaryButton?.text) && (
        <div className="flex flex-col lg:flex-row lg:w-max lg:items-center gap-3 lg:gap-[27px] mt-6 lg:mt-[44px] lg:px-[58px]">
          {articleSection.primaryButton?.link ? (
            <Link href={articleSection.primaryButton.link}>
              <Button className="w-full lg:w-max">
                {articleSection.primaryButton.text || "CHOOSE A PACKAGE"}
              </Button>
            </Link>
          ) : (
            <CalComModalTrigger>
              {articleSection.primaryButton?.text || "REQUEST A QUOTE"}
            </CalComModalTrigger>
          )}
          {articleSection.secondaryButton?.link ? (
            <Link href={articleSection.secondaryButton.link}>
              <Button variant="outline" className="w-full lg:w-max">
                {articleSection.secondaryButton.text || "CHOOSE A PACKAGE"}
              </Button>
            </Link>
          ) : (
            <CalComModalTrigger variant="outline">
              {articleSection.secondaryButton?.text || "REQUEST A QUOTE"}
            </CalComModalTrigger>
          )}
        </div>
      )} */}
      {(articleSection.primaryButton?.text ||
        articleSection.secondaryButton?.text) && (
        <div className="flex flex-col lg:flex-row lg:w-max lg:items-center gap-3 lg:gap-[27px] mt-6 lg:mt-[44px] lg:px-[58px]">
          {articleSection.primaryButton?.text &&
            (articleSection.primaryButton?.link ? (
              <Link href={articleSection.primaryButton.link}>
                <Button className="w-full lg:w-max">
                  {articleSection.primaryButton.text || "CHOOSE A PACKAGE"}
                </Button>
              </Link>
            ) : (
              <CalComModalTrigger>
                {articleSection.primaryButton?.text || "REQUEST A QUOTE"}
              </CalComModalTrigger>
            ))}
          {articleSection.secondaryButton.text &&
            (articleSection.secondaryButton?.link ? (
              <Link href={articleSection.secondaryButton.link}>
                <Button variant="outline" className="w-full lg:w-max">
                  {articleSection.secondaryButton.text || "CHOOSE A PACKAGE"}
                </Button>
              </Link>
            ) : (
              <CalComModalTrigger variant="outline">
                {articleSection.secondaryButton?.text || "REQUEST A QUOTE"}
              </CalComModalTrigger>
            ))}
        </div>
      )}
    </section>
  );
}

export default ArticleSection;
