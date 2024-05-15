import React from "react";
import Image from "next/image";

function SectionThreeItem({
  imageUrl,
  title,
  description,
  percentage,
}: {
  imageUrl: string;
  title: string;
  description: string;
  percentage: string;
}) {
  return (
    <div className="mb-[60px] lg:mb-[102px] lg:pl-[50px]">
      <div className="relative w-full pb-[100%]">
        <Image
          src={imageUrl}
          fill
          alt={`${percentage}% revenue increase`}
          className="object-cover rounded-sm lg:rounded-[8px] absolute"
        />
      </div>
      <div className="flex gap-[15px] mt-[28px] lg:mt-[38px] max-w-[480px]">
        <span className="whitespace-nowrap self-start p-1 lg:p-[8px] text-sm lg:text-[19px] font-bold leading-none rounded-[5px] bg-secondary inline-block">
          ▲ {percentage}%
        </span>
        <h3 className="text-white text-2xl lg:text-[35px] font-portlin leading-[.9]">
          {title}
        </h3>
      </div>
      <p className="text-sm lg:text-lg mt-[25px] text-[#a7a7bc] max-w-[480px]">
        {description}
      </p>
    </div>
  );
}

export default SectionThreeItem;
