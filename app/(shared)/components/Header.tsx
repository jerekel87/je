"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Hamburger from "hamburger-react";
import HeaderRating from "./HeaderRating";
import CalComModal from "./CalComModal";

export const navList = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Solutions",
    url: "/home#solutions",
  },
  {
    name: "Brand Package",
    url: "/pricing",
  },
  {
    name: "Stories",
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
    <>
      <header className="hidden lg:block fixed top-0 z-10 bg-white w-full shadow-[0px_9.5px_6.5px_0_rgba(0,0,0,0.02)]">
        <div className="flex items-center container mx-auto lg:py-[17px] py-3 px-4">
          <div className="lg:hidden mr-4">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#141424" />
          </div>
          <Link href="/home">
            <div className="relative size-[50px] lg:size-[65px] mr-[45px]">
              <Image
                src="/assets/images/je-logo.png"
                fill
                alt="je logo"
                className="absolute top-0 object-contain"
              />
            </div>
          </Link>

          <nav className="lg:flex gap-[45px] hidden">
            {navList
              .filter((i) => i.url !== "/home")
              .map((navItem, i) => (
                <Link key={i} href={navItem.url} className="font-semibold">
                  {navItem.name}
                </Link>
              ))}
          </nav>

          <div className="grow" />

          <div className="mr-[32px] hidden lg:block">
            <HeaderRating />
          </div>

          <CalComModal.Trigger>
            <Button variant="outline" className="lg:h-[60px]">
              GET A QUOTE
            </Button>
          </CalComModal.Trigger>
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
      <div className="hidden lg:block h-[100px] w-full" />
    </>
  );
}

export default Header;
