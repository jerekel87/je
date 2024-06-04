"use client";

import { RxShare2 } from "react-icons/rx";
import { RWebShare } from "react-web-share";

function SectionOneMedia() {
  return (
    <div className="relative mt-[48px] lg:mt-[58px]">
      <div className="w-full h-0 pb-[75.8%] relative">
        <iframe
          className="w-full h-full rounded lg:rounded-[10px] absolute top-0 left-0"
          src="https://www.youtube.com/embed/NpEaa2P7qZI?si=8Dc3pjtkxOqg4XSZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="hidden lg:block absolute -right-[105px] top-[40px]">
        <RWebShare
          data={{
            text: "Like humans, flamingos make friends for life",
            url: "https://on.natgeo.com/2zHaNup",
            title: "Flamingos",
          }}
        >
          <div className="flex flex-col items-center">
            <button className="flex items-center justify-center size-[70px] border-[1px] rounded-full border-muted">
              <RxShare2 className="size-[25px]" />
            </button>
            <p className="mt-[10px] text-sm font-bold">Share</p>
          </div>
        </RWebShare>
      </div>
    </div>
  );
}
export default SectionOneMedia;
