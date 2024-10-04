"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Product = () => {
  // Imagen principal que se muestra
  const [mainImage, setMainImage] = useState('/images/1.jpg'); // Imagen por defecto

  // Talla seleccionada
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Función para cambiar la imagen principal
  const handleMouseEnter = (img: string) => {
    setMainImage(img);
  };

  // Función para seleccionar la talla
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  // Ejemplo de imágenes disponibles
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ];

  const sizes = ['S', 'M', 'L', 'XL']; // Tallas disponibles

  const isSingleSize = false; // Cambia esto a true si el producto es de talla única

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {/* Contenedor de la imagen principal */}
      <div className="flex-1">
        <Image 
          src={mainImage} 
          alt="Producto" 
          width={500} // Ajusta según tu necesidad
          height={500} // Ajusta según tu necesidad
          className="w-full h-auto border-2 border-blue-500"
        />
        {/* Miniaturas de las imágenes debajo de la principal */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((img, index) => (
            <Image 
              key={index}
              src={img}
              alt={`Imagen ${index + 1}`}
              width={64} // Tamaño pequeño para las miniaturas
              height={64}
              className="border cursor-pointer"
              onMouseEnter={() => handleMouseEnter(img)}
            />
          ))}
        </div>
      </div>

      {/* Información del producto */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Nombre del Producto</h1>
        <p className="text-lg">Precio: $99.99</p>
        <p className="text-md">Fecha: 04 Oct 2024</p>

        <div className="mt-4">
          <p className="font-bold">Tamaño:</p>
          {isSingleSize ? (
            <p>Talla única</p>
          ) : (
            <div className="flex gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`border-2 px-4 py-2 ${
                    selectedSize === size ? 'border-black' : 'border-gray-300'
                  }`} // Borde negro si está seleccionada, gris si no
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="bg-gray-400 px-6 py-2 mt-6 text-white hover:bg-gray-600">
          COMPRAR COMPRAR COMPRAR
        </button>

        <div className="mt-4">
          <h2 className="font-bold">Descripción del Producto:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
