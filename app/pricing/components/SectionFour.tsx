import React from "react";
import Image from "next/image";
import { Button } from "@/app/(shared)/components/ui/button";
import { twMerge } from "tailwind-merge";

const solutions = [
  {
    category: "Creative",
    name: "Advertising Design",
  },
  {
    category: "Creative",
    name: "Album Artwork",
  },
  {
    category: "Creative",
    name: "Billboard Design",
  },
  {
    category: "Creative",
    name: "Book and eBook Covers",
  },
  {
    category: "Creative",
    name: "Branding and Identity",
  },
  {
    category: "Creative",
    name: "Brochure Design",
  },
  {
    category: "Creative",
    name: "Business Cards Design",
  },
  {
    category: "Creative",
    name: "Catalog Design",
  },
  {
    category: "Creative",
    name: "Custom Illustrations",
  },
  {
    category: "Creative",
    name: "Direct Mail Design",
  },
  {
    category: "Creative",
    name: "Environmental Graphics",
  },
  {
    category: "Creative",
    name: "Event Invitations Design",
  },
  {
    category: "Creative",
    name: "Flyer Design",
  },
  {
    category: "Creative",
    name: "Greeting Card Design",
  },
  {
    category: "Creative",
    name: "Infographic Design",
  },
  {
    category: "Creative",
    name: "Label Design",
  },
  {
    category: "Creative",
    name: "Logo Design",
  },
  {
    category: "Creative",
    name: "Magazine / Editorial Design",
  },
  {
    category: "Creative",
    name: "Menu Design",
  },
  {
    category: "Creative",
    name: "Merchandise Design",
  },
  {
    category: "Creative",
    name: "Packaging Design",
  },
  {
    category: "Creative",
    name: "Poster Design",
  },
  {
    category: "Creative",
    name: "Presentation Design",
  },
  {
    category: "Creative",
    name: "Signage Design",
  },
  {
    category: "Creative",
    name: "Stationery Design",
  },
  {
    category: "Creative",
    name: "Social Media Banner",
  },
  {
    category: "Creative",
    name: "Trade Show Displays",
  },
  {
    category: "Creative",
    name: "Vehicle Wrap Design",
  },
  {
    category: "Creative",
    name: "Website Banner",
  },
  {
    category: "Creative",
    name: "Yard Signage Design",
  },
];

const categories = ["Creative", "Marketing", "Multimedia"];
// const categories = Array.from(
//   new Set(solutions.map((solution) => solution.category))
// );

function SectionFour() {
  return (
    <section className="bg-primary  py-[70px] lg:py-[140px]">
      <div className="container mx-auto h-full relative">
        <h2 className="text-[40px] lg:text-[100px] font-portlin leading-[0.9] text-balance text-white">
          <span className="text-secondary">FIVE-STAR</span> SOLUTIONS
        </h2>

        <p className="text-sm max-w-[546px] lg:text-lg mt-[30px] lg:mt-[40px] text-[#a7a7bc] mb-[60px] lg:mb-[124px]">
          Here you can find many of the solutions we offer that are included in
          your infinite solution package.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[100px]">
          <ul className="justify-between lg:justify-normal text-white text-xl lg:text-[40px] font-portlin flex flex-row lg:flex-col lg:w-[360px]">
            {categories.map((category) => (
              <li
                key={category}
                className={twMerge(
                  "px-4 lg:px-0 pb-4 lg:py-[22px] border-b-[3px] border-b-gray-400 border-opacity-[.2] leading-none hover:border-secondary",
                  category === "Creative" && "border-secondary"
                )}
              >
                {category}
              </li>
            ))}
          </ul>
          <ul className="columns-2 lg:columns-3 text-white gap-4 lg:gap-[100px] font-medium text-sm lg:text-lg w-full pt-2">
            {solutions.map((solution) => (
              <li key={solution.name}>
                <a className="inline-block leading-[2.5] border-b-[2px] border-b-transparent hover:border-secondary">
                  {solution.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
