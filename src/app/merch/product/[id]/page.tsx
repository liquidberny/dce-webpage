'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Para obtener el id de la URL
import Image from 'next/image';
import { fetchProductById } from '@/utils/api'; 
// Asegúrate de importar la función
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>(''); // Imagen principal
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const productId = Array.isArray(id) ? id[0] : id; // Asegurarse de que id sea un string
      const productData = await fetchProductById(productId);
      if (productData) {
        setProduct(productData);
        setMainImage(productData.mainImage); // Establecer la imagen principal
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  const handleMouseEnter = (img: string) => {
    setMainImage(img);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  const { name, price, description, images, sizes } = product;
  const isSingleSize = sizes.length === 1;

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {/* Contenedor de la imagen principal */}
      <div className="flex-1">
        <Image 
          src={mainImage} 
          alt="Producto" 
          width={500} 
          height={500} 
          className="w-full h-auto border-2 border-blue-500"
        />
        {/* Miniaturas de las imágenes debajo de la principal */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((img: any, index: number) => (
            <Image 
              key={index}
              src={img.thumbnail}
              alt={`Imagen ${index + 1}`}
              width={64} 
              height={64}
              className="border cursor-pointer"
              onMouseEnter={() => handleMouseEnter(img.thumbnail)}
            />
          ))}
        </div>
      </div>

      {/* Información del producto */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-lg">Precio: ${price}</p>

        <div className="mt-4">
          <p className="font-bold">Tamaño:</p>
          {isSingleSize ? (
            <p>Talla única</p>
          ) : (
            <div className="flex gap-2">
              {sizes.map((size: string) => (
                <button
                  key={size}
                  className={`border-2 px-4 py-2 ${
                    selectedSize === size ? 'border-black' : 'border-gray-300'
                  }`}
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
