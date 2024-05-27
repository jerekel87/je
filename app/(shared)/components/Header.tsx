"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Hamburger from "hamburger-react";
import HeaderRating from "./HeaderRating";

const navList = [
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Solutions",
    url: "/solutions",
  },
  {
    name: "Pricing",
    url: "/pricing",
  },
  {
    name: "Reviews",
    url: "/reviews",
  },
  {
    name: "Articles",
    url: "/articles",
  },
];

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center container mx-auto lg:py-[17px] py-3 px-4">
        <div className="lg:hidden mr-4">
          <Hamburger toggled={isOpen} toggle={setOpen} color="#141424" />
        </div>
        <Link href="/home">
          <div className="relative size-[50px] lg:size-[65px] mr-[45px]">
            <Image
              src="/assets/images/je-logo.svg"
              fill
              alt="je logo"
              className="absolute top-0 object-contain"
            />
          </div>
        </Link>

        <nav className="lg:flex gap-[45px] hidden">
          {navList.map((navItem, i) => (
            <Link key={i} href={navItem.url} className="font-medium">
              {navItem.name}
            </Link>
          ))}
        </nav>

        <div className="grow" />

        <div className="mr-[32px] hidden lg:block">
          <HeaderRating />
        </div>

        <Button variant="outline" className="lg:h-[60px]">
          GET STARTED
        </Button>
      </div>
      <div
        style={{ height: isOpen ? "calc(100% - 74px)" : "0" }}
        className="shadow-sm lg:shadow-none overflow-hidden w-full absolute z-10 transition-all duration-500 ease-in-out bg-white"
      >
        <nav className="flex flex-col items-center ">
          {navList.map((navItem, i) => (
            <Link
              key={i}
              href={navItem.url}
              onClick={() => setOpen(false)}
              className="font-medium mt-[45px]"
            >
              {navItem.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center mt-20">
          <HeaderRating />
        </div>
      </div>
    </header>
  );
}

export default Header;
