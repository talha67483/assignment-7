// import React from "react";
// import Image from "next/image";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
// import { CiStar } from "react-icons/ci";
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

// interface Store {
//   id?: string;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating?: {
//     rate?: number;
//     count?: number;
//   };
// }

// const Card_1 = ({
//   title,
//   price,
//   description,
//   category,
//   image,
//   rating,
// }: Store) => {
//   return (
//     <div className=" w-[360px] rounded-lg h-[490px]  bg-white ">
//       <div className=" mx-[95px]  ">
//         <Image src={image} alt="Image" width={150} height={10} />
//       </div>
//   <div className=" mt-30 mx-2 space-y-3 ">
//         <h1
//           className={` ${roboto.className} text-[17px] opacity-[60%] mt-5  font-semibold  `}
//         >
//           {category}
//         </h1>
//         <h1
//           className={` ${inter.className} font-bold text-[18px] leading-[22px] `}
//         >
//           {title}
//         </h1>
//         <p
//           className={` ${poppins.className}  text-[14px] opacity-[50%] leading-[19px] `}
//         >
//           {description}
//         </p>
//         <h2 className=" text-[18px] font-semibold "> ${price}</h2>
//         <div className=" flex  justify-between items-center text-[#2a272e] font-semibold ">
//           <div className="  flex items-center text- ">
//             <span className="  ">
//               <CiStar className=" text-yellow-400 text-3xl font-bold   " />{" "}
//             </span>
//             <span> {rating?.rate}</span>
//             <span className=" mx-2 ">({rating?.count} reviews ) </span>
//           </div>
//   <button
//     className={`hover:bg-[#2f57cf] bg-[#3366FF] text-white w-28 h-10 rounded-lg  duration-200 hover:duration-200  hover:text-[17px] font-medium ${poppins.className}    `}
//   >
//     Add to cart
//   </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card_1;

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
    <div className="border rounded-lg shadow-2xl p-4 w-80   sm:mx-9 bg-white my-10  ">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="object-cover  rounded-lg"
      />
      <hr className=" text-3xl mt-10 " />
      <h2
        className={` ${poppins.className} leading-[23px] text-lg font-bold mt-2`}
      >
        {title}
      </h2>
      <p
        className={` ${inter.className}  text-gray-700 opacity-[90%] text-sm my-2`}
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
