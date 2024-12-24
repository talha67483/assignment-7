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
      className={`  w-full h-[55px] bg-[#3366FF] flex justify-between items-center  shadow-xl opacity-[94%]  ${poopins.className}  `}
    >
      <h1 className=" text-white text-2xl font-semibold ml-7 ">fetching API</h1>
      <ul className="sm:flex space-x-5 mr-20 hidden items-center   ">
        <Link href={"/"}>
          <li className=" text-white text-xl font-medium ">Client Side </li>
        </Link>
        <Link href={"/server-side"}>
          <li className="text-white text-xl font-medium    "> Server Side </li>
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
        <div className="  w-full bg-[#3366FF] 28  absolute top-[55px] flex flex-col items-center right-0 sm:hidden   ">
          <Link href={"/"}>
            <li
              className=" text-white text-xl font-medium cursor-pointer "
              onClick={clickMenue}
            >
              Client Side{" "}
            </li>
          </Link>
          <Link href={"/server-side"}>
            <li
              className="text-white text-xl font-medium  cursor-pointer   "
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
