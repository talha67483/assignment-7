"use client";
import { useEffect, useState } from "react";
import Card_1 from "@/components/Cards/Card_1";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

interface Store {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate?: number;
    count?: number;
  };
}

const Page = () => {
  const [data, setData] = useState<Store[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchFunc = async () => {
      setLoading(true);
      try {
        const responce = await fetch("https://fakestoreapi.com/products");
        const parseReasponce: Store[] = await responce.json();
        setData(parseReasponce);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFunc();
  }, []);

  return (
    <>
      <Navbar />
      <div className=" flex  flex-wrap  justify-center my-8  ">
        {loading && (
          <div className=" mx-auto mt-60 ">
            <p className=" text-2xl font-semibold opacity-[80%]  ">
              Loading...
            </p>
          </div>
        )}
        <div></div>
        {data.map((val, idx) => (
          <div className="  mt-5 " key={idx}>
            <div className=" ">
              <Card_1
                image={val.image}
                price={val.price}
                title={val.title}
                description={val.description}
                category={val.category}
                rating={val.rating}
              />
            </div>
          </div>
        ))}
      </div>
      {loading || <Footer />}
    </>
  );
};

export default Page;
