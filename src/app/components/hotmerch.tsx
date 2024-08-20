import React from "react";
import MerchCard from "./MerchCard";
import Link from "next/link";
const HotMerch = () => {
  const products = [
    { name: "Producto 1", price: "$25.00", image: "/images/1.jpg" },
    { name: "Producto 2", price: "$30.00", image: "/images/2.jpg" },
    { name: "Producto 3", price: "$35.00", image: "/images/3.jpg" },
  ];

  return (
    <div className="relative h-screen bg-gray-100">
      <div className="absolute top-0 w-full bg-black text-white overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-3xl font-bold">
            <h1>
              MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH
            </h1>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-full bg-gray-300 border-4 border-black">
        <div className="flex flex-col justify-center items-center flex-grow" style={{ flexBasis: '70%' }}>
          <div className="w-full flex justify-evenly items-center mt-6 mb-4">
            {products.map((product, index) => (
              <MerchCard key={index} name={product.name} price={product.price} image={product.image} />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center" style={{ flexBasis: '20%' }}>
          <Link href="/merch" className="bg-red-500 text-white font-bold py-3 rounded-full hover:bg-red-700 transition-colors text-xl w-[85%] text-center">
            Ver catálogo completo
          </Link>
        </div>
      </div>

    </div>
  );
};

export default HotMerch;
