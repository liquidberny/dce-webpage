import React from "react";
import MerchCard from "../MerchCard";
import Link from "next/link";

const HotMerch = () => {
  const products = [
    { name: "Producto 1", price: "$25.00", image: "/images/1.jpg" },
    { name: "Producto 2", price: "$30.00", image: "/images/2.jpg" },
    { name: "Producto 3", price: "$35.00", image: "/images/3.jpg" },
    { name: "Producto 4", price: "$40.00", image: "/images/4.jpg" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="absolute top-0 w-full bg-black text-white overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-3xl font-bold">
            <h1>
              MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH
            </h1>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full lg:min-h-screen bg-gray-300 border-4 border-black">
        <div className="flex flex-col justify-center items-center flex-grow">
          {/* Grid adaptable con margen superior permanente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-4 w-full px-4">
            {products.map((product, index) => (
              <div key={index} className="flex justify-center">
                <MerchCard name={product.name} price={product.price} image={product.image} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mb-4">
          <Link href="/merch" className="bg-red-500 text-white font-bold py-3 rounded-full hover:bg-red-700 transition-colors text-xl w-[85%] text-center">
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotMerch;
