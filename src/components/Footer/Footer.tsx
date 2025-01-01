import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full text-center py-4  bg-white flex justify-center min-h-20 items-center text-[#272343]   ">
      <div className=" space-y-2 ">
        <h1>Copyrights &copy; 2024 www.My Website.com All rights reserved. </h1>
        <h2 className=" mx-28 my-2 space-y-3   space-x-3 ">
          <span className=" border-black border-b-2  ">Privacy Policy </span>
          <span className=" border-black border-b-2 inline-block ">
            Terms of Use
          </span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
