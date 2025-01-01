import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

import React, { useState } from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  price: number;
  title: string;
  description: string;
  category: string;
  rating: {
    rate?: number;
    count?: number;
  };
}

const Card_1: React.FC<CardProps> = ({
  image,
  price,
  title,
  description,
  category,
  rating,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border rounded-lg shadow-xl p-4 w-80    sm:mx-10 bg-white    my-5  ">
      <Image
        src={image}
        alt={title}
        width={210}
        height={190}
        className="object-cover mx-9   rounded-lg"
      />
      <hr className="  mt-4 " />
      <h2
        className={` ${poppins.className} text-[#272343]  leading-[23px] text-lg font-bold mt-2`}
      >
        {title}
      </h2>
      <p
        className={` ${inter.className}    text-gray-800 opacity-[90%] text-sm my-2`}
      >
        {category}
      </p>
      <p
        className={` ${inter.className} text-gray-800 opacity-[55%] leading-[20px] text-sm`}
      >
        {isExpanded ? description : `${description.substring(0, 76)}...`}
      </p>
      <button
        onClick={toggleReadMore}
        className="text-blue-500 text-sm underline mt-2"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      <p className={` ${roboto.className}  text-[#25a247] font-bold mt-2`}>
        ${price}
      </p>
      {rating && (
        <p className="text-yellow-500 text-sm">
          Rating: {rating.rate || "N/A"} ({rating.count || 0} reviews)
          <button
            className={` ml-4 hover:bg-[#2f57cf] bg-[#3366FF] text-white w-28 h-10 rounded-lg  duration-200 hover:duration-200  hover:text-[17px] font-medium ${poppins.className}    `}
          >
            Add to cart
          </button>
        </p>
      )}
    </div>
  );
};

export default Card_1;
