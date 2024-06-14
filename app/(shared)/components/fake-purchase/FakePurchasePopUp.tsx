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

  useEffect(() => {
    const timeAgo = new TimeAgo("en-US");

    const randomName = uniqueNamesGenerator(customConfig);
    setFakeName(randomName);

    const randomDate = getRandomDateWithin24Hours();
    setTimeAgo(timeAgo.format(randomDate));
  }, []);

  return (
    <Link
      href="/pricing"
      className="lg:min-w-[262px] w-[90%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:w-max shadow-sm  border-[1px] border-input rounded-[8px] p-[20px] flex gap-[14px] bg-white fixed bottom-4 lg:bottom-[30px] lg:left-[30px]"
    >
      <div className="rounded-full bg-secondary flex items-center justify-center size-[50px] font-bold">
        {generateAvatarInitials(fakeName)}
      </div>
      <div>
        <p className="text-sm font-bold">{fakeName}</p>
        <p className="text-xs ">
          Purchased <span className="underline font-bold">VIP Package</span>
        </p>
        <p className="text-[10px] text-muted-foreground">{timeAgo}</p>
      </div>
    </Link>
  );
}

export default FakePurchasePopUp;
