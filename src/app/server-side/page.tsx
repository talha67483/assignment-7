import Card_2 from "@/components/Cards/Card_2";
import React from "react";
interface Books {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const page = async () => {
  const responce = await fetch("https://simple-books-api.glitch.me/books/");
  const parseResponce: Books[] = await responce.json();

  return (
    <div className=" flex flex-wrap justify-center my-10  ">
      {parseResponce.map((val, idx) => (
        <div key={idx} className="  ">
          <Card_2
            id={val.id}
            name={val.name}
            type={val.type}
            available={val.available}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
