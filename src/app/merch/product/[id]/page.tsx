'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Para obtener el id de la URL
import Image from 'next/image';

const Product = () => {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [product, setProduct] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>(''); // Imagen principal que se muestra
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Talla seleccionada

  useEffect(() => {
    // Realizar consulta a la API con el id del producto
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:1337/api/merches/${id}?populate=*`);
        const data = await res.json();

        if (data && data.data) {
          const item = data.data;

          // Asignar la imagen principal y otras propiedades del producto
          const imageUrl = item.images?.[0]?.formats?.thumbnail?.url 
            ? `http://localhost:1337${item.images[0].formats.thumbnail.url}` 
            : '/default-image.jpg';

          setProduct({
            name: item.name || 'Unnamed',
            price: item.price || 0,
            description: item.description || 'No description',
            images: item.images.map((img: any) => `http://localhost:1337${img.formats.thumbnail.url}`), // Lista de imágenes
            sizes: item.sizes || ['S', 'M', 'L', 'XL'], // Ejemplo de tallas
          });

          setMainImage(imageUrl); // Establecer imagen principal
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Función para cambiar la imagen principal al pasar el mouse
  const handleMouseEnter = (img: string) => {
    setMainImage(img);
  };

  // Función para seleccionar la talla
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  if (!product) {
    return <p>Cargando producto...</p>; // Mostrar mensaje mientras se cargan los datos
  }

  const { name, price, description, images, sizes } = product;
  const isSingleSize = sizes.length === 1; // Si solo hay una talla, consideramos que es talla única

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
          {images.map((img: string, index: number) => (
            <Image 
              key={index}
              src={img}
              alt={`Imagen ${index + 1}`}
              width={64} 
              height={64}
              className="border cursor-pointer"
              onMouseEnter={() => handleMouseEnter(img)}
            />
          ))}
        </div>
      </div>

      {/* Información del producto */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-lg">Precio: ${price}</p>
        <p className="text-md">Fecha: 04 Oct 2024</p>

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
