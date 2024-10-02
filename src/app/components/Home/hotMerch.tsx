import React from "react";
import MerchCard from "../MerchCard";
import Link from "next/link";

const HotMerch = () => {
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
          <MerchCard
            img="/images/camiseta.png"
            name="Camiseta Logo DCE"
            price="$25.00"
            sizes={["S", "M", "L", "XL"]}
            desc="Camiseta con el logo oficial del evento DCE. Algodón 100% de alta calidad."
          />
          <MerchCard
            img="/images/gorra.png"
            name="Gorra Edición Especial"
            price="$15.00"
            sizes={["Única"]}
            desc="Gorra ajustable edición especial del evento. Disponible en color negro y blanco."
          />
          <MerchCard
            img="/images/hoodie.png"
            name="Hoodie Logo DCE"
            price="$40.00"
            sizes={["M", "L", "XL"]}
            desc="Hoodie con el logo oficial del evento DCE. Mantente abrigado con estilo."
          />
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
