import React from "react";
import { Poppins } from "next/font/google";
const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Card_2 = ({ id, name, type, available }: Books) => {
  return (
    <div
      className={` ${roboto.className} bg-white w-72 sm:w-80  my-10 min-h-32 rounded-md  space-y-4 mx-4 px-4 border-[1px] border-green-500 `}
    >
      <h1 className=" text-lg text-yellow-600 "> Name : {name} </h1>
      <h2 className=" text-lg text-red-500 "> Type : {type} </h2>
      <h3 className=" text-lg text-zinc-500  "> Id : {id} </h3>
      <h4 className=" text-blue-600 ">
        Available : {available ? "Yes" : "No"}
      </h4>
    </div>
  );
};

export default Card_2;
