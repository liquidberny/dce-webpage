'use client';

import React, { useState, useEffect } from 'react';
import MerchCard from '../components/MerchCard';
import { Product } from '../interfaces';

function Merch() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchMerch() {
      try {
        const res = await fetch('http://localhost:1337/api/merches?populate=*');
        const data = await res.json();

        if (data && data.data) {
          const merchItems = data.data.map((item: any) => {
            // Comprobamos si hay imágenes y extraemos la URL de la miniatura (o de otro formato si prefieres)
            const imageUrl = item.images?.[0]?.formats?.thumbnail?.url 
              ? `http://localhost:1337${item.images[0].formats.thumbnail.url}` 
              : '/default-image.jpg'; // Imagen por defecto si no hay ninguna

            return {
              id: item.id,
              documentId: item.documentId,
              name: item.name || 'Unnamed',
              price: item.price || 0,
              description: item.description || 'No description',
              images: imageUrl,
            };
          });
          setProducts(merchItems);
        } else {
          console.error('API response does not contain expected data structure');
        }
      } catch (error) {
        console.error('Error fetching merch:', error);
      }
    }
    fetchMerch();
  }, []);

  return (
    <div className='py-2'>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <MerchCard
            id= {product.id}
            documentId = {product.documentId}
            key={product.id}
            images={product.images} // Aquí utilizamos la URL de la imagen
            name={product.name}
            price={product.price}
            sizes={['S', 'M', 'L', 'XL']} // Puedes ajustar esto dependiendo de tu producto
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Merch;
