"use client";

import { useEffect, useState } from "react";
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import {
  generateAvatarInitials,
  getRandomDateWithin24Hours,
} from "@/app/(shared)/lib/utils";
import Link from "next/link";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useRouter } from "next/navigation";
import CalComModal from "@/app/pricing/components/CalComModal";

TimeAgo.addDefaultLocale(en);

const customConfig: Config = {
  dictionaries: [names, names],
  separator: " ",
  length: 2,
  style: "capital",
};

function FakePurchasePopUp() {
  const [fakeName, setFakeName] = useState("");
  const [timeAgo, setTimeAgo] = useState("");

  const router = useRouter();

  const randomNum = Math.floor(Math.random() * 3) + 1;

  const renderLink = (randomNum: number) => {
    switch (randomNum) {
      case 1:
        return (
          <p className="text-xs leading-none">
            Purchased <span className="underline font-bold">VIP Package</span>
          </p>
        );

      case 2:
        return (
          <CalComModal className="text-xs leading-none underline font-bold" />
        );

      default:
        return <p className="text-xs leading-none">Requested a quote</p>;
    }
  };

  const handleClick = (randomNum: number) => {
    if (randomNum === 1 || randomNum == 3) {
      router.push("/pricing");
    }
  };

  useEffect(() => {
    const timeAgo = new TimeAgo("en-US");

    const randomName = uniqueNamesGenerator(customConfig);
    setFakeName(randomName);

    const randomDate = getRandomDateWithin24Hours();
    setTimeAgo(timeAgo.format(randomDate));
  }, []);

  return (
    <div
      onClick={() => handleClick(randomNum)}
      className="cursor-pointer text-primary lg:min-w-[262px] w-[90%] lg:w-max shadow-sm  border-[1px] border-input rounded-[8px] p-[20px] flex gap-[14px] bg-white "
    >
      <div className="rounded-full bg-secondary flex items-center justify-center size-[50px] font-bold">
        {generateAvatarInitials(fakeName)}
      </div>
      <div className="flex flex-col gap-[6px] items-start">
        <p className="text-[15px] font-bold leading-none">{fakeName}</p>
        {renderLink(randomNum)}
        <p className="text-[10px] leading-none text-[#a6a6a6]">{timeAgo}</p>
      </div>
    </div>
  );
}

export default FakePurchasePopUp;
