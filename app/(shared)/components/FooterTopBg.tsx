"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

function FooterTopBg() {
  const pathname = usePathname();
  const isFAQPage = pathname.includes("faq");
  const topBgColor = isFAQPage ? "#fff" : "#f9f8f3";
  return (
    <div
      className="h-[135px] lg:h-[235px] w-full relative"
      style={{ backgroundColor: topBgColor }}
    >
      <div className="absolute w-full h-[27px] lg:h-[37px] -bottom-[6px] z-[2]">
        {topBgColor === "#f9f8f3" ? (
          <Image
            src="/assets/images/shape-7-copy-14.svg"
            fill
            alt="Transition"
            className="object-cover"
          />
        ) : (
          <Image
            src="/assets/images/shape-7-copy-8.svg"
            fill
            alt="Transition"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default FooterTopBg;