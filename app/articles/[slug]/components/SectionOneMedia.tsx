"use client";

import { RxShare2 } from "react-icons/rx";
import { RWebShare } from "react-web-share";

function SectionOneMedia() {
  return (
    <div className="relative mt-[48px] lg:mt-[58px]">
      <div className="w-full h-0 pb-[75.8%] relative">
        <div className="rounded lg:rounded-[15px] top-0 left-0 absolute w-full h-full overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=8Dc3pjtkxOqg4XSZ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
export default SectionOneMedia;
