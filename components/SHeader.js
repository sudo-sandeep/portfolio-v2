"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { heebo } from "@/fonts/font";
import { NAV_LINKS } from "@/config/global";
import Link from "next/link";
import { useState, useEffect } from "react";

const SHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);
  return (
    <header className={`text-dark bg-offWhite fixed top-0 left-0 z-20 w-full md:px-12 lg:px-20`}>
      <div className="flex px-4 justify-between items-center h-[70px]">
        <Link
          href="/"
          className={`${heebo.className} uppercase font-extrabold text-2xl`}
        >
          Portfolio
        </Link>
        <span
          className="cursor-pointer flex justify-center items-center relative pr-4 md:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <GiHamburgerMenu
            size={28}
            className={`${
              showMenu ? "opacity-0" : "opacity-100"
            } transition-all duration-200 absolute`}
          />
          <MdClose
            size={28}
            className={`${
              showMenu ? "opacity-100" : "opacity-0"
            } transition-all duration-300 absolute`}
          />
        </span>
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              href={item.route}
              className="cursor-pointer font-semibold hover:text-primary transition-colors duration-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`h-[calc(100vh-70px)] top-16 left-0 px-8 transition-all duration-500 absolute bg-offWhite w-full font-semibold ${
          showMenu ? "translate-x-0" : "-translate-x-[200%]"
        }`}
      >
        <ul className="pb-6 pt-4">
          {NAV_LINKS.map((item) => (
            <li key={item.id} className="py-4">
              <Link href={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default SHeader;
