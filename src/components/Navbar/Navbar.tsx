"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poopins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const clickMenue = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={`  w-full h-[55px] bg-[#3366FF] flex justify-between items-center  shadow-lg opacity-[94%]  ${poopins.className}  `}
    >
      <Link href={"/"}>
        <h1 className=" text-white text-2xl font-semibold ml-7 ">
          fetching API
        </h1>
      </Link>
      <ul className="sm:flex space-x-5 mr-20 hidden items-center   ">
        <Link href={"/"}>
          <li className=" text-white text-xl font-medium hover:underline  ">
            Home{" "}
          </li>
        </Link>
        <Link href={"/client-side"}>
          <li className=" text-white text-xl font-medium hover:underline  ">
            Client Side{" "}
          </li>
        </Link>
        <Link href={"/server-side"}>
          <li className="text-white text-xl font-medium hover:underline   ">
            {" "}
            Server Side{" "}
          </li>
        </Link>
      </ul>
      <div
        onClick={clickMenue}
        className="  rounded-lg    sm:hidden block mr-7  "
      >
        <a href={"#"} className=" text-5xl text-white    ">
          &#8801;
        </a>
      </div>
      {open && (
        <div className="  w-full bg-[#3366FF]  h-28  list-none space-y-2  absolute top-[55px] flex flex-col items-center right-0 sm:hidden   ">
          <Link href={"/"}>
            <li
              className=" text-white text-xl font-medium hover:underline  "
              onClick={clickMenue}
            >
              Home{" "}
            </li>
          </Link>
          <Link href={"/client-side"}>
            <li
              className=" text-white text-xl font-medium cursor-pointer hover:underline "
              onClick={clickMenue}
            >
              Client Side{" "}
            </li>
          </Link>
          <Link href={"/server-side"}>
            <li
              className="text-white text-xl font-medium  cursor-pointer  hover:underline  "
              onClick={clickMenue}
            >
              {" "}
              Server Side{" "}
            </li>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
