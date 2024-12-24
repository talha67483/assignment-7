import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

const myPopins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const myInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Page = () => {
  return (
    <div className=" flex justify-center flex-col items-center h-screen ">
      <h1
        className={` ${myInter.className}  text-3xl font-semibold my-10 border-b-2 border-black    `}
      >
        Fetching API
      </h1>
      <div className=" w-80 h-40 border-[1px] border-gray-300 rounded-lg bg-white ">
        <div
          className={` ${myPopins.className} space-x-5 flex justify-center items-center h-full `}
        >
          <Link href={"/client-side"}>
            <button className=" w-32 bg-black  text-white py-3 rounded-lg font-medium text-lg hover:bg-[#212121]">
              Client Side
            </button>
          </Link>
          <Link href={"/server-side"}>
            <button className=" w-32 bg-black text-white py-3 rounded-lg font-medium text-lg hover:bg-[#212121]">
              Server side
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
