'use client'
import React, { useState, useEffect } from "react";
import MerchCard from "@/components/MerchCard";
import Link from "next/link";
import { fetchLastThreeProducts } from '@/utils';
import { Product } from '@/interfaces';

const HotMerch = () => {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    const getMerch = async () => {
      const merchItems = await fetchLastThreeProducts();
      setProducts(merchItems);
    };
    getMerch();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Banner superior */}
      <div className="absolute top-0 w-full bg-black text-white overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-3xl font-bold">
            <h1>
              MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH MERCH
            </h1>
          </span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col justify-between w-full lg:min-h-screen bg-gray-300 border-4 border-black">
        {/* Grid adaptable con margen superior permanente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 mt-16">
        {products.map((product) => (
          <MerchCard
            id= {product.id}
            documentId = {product.documentId}
            key={product.id}
            images={product.images} // Aquí utilizamos la URL de la imagen
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
        </div>

        {/* Botón 'Ver catálogo completo' */}
        <div className="flex justify-center items-center mb-4">
          <Link
            href="/merch"
            className="bg-red-500 text-white font-bold py-3 rounded-full hover:bg-red-700 transition-colors text-xl w-[85%] text-center"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotMerch;
