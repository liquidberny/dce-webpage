'use client';

import React, { useState, useEffect } from 'react';
import MerchCard from '@/components/MerchCard';
import { Product } from '@/interfaces';
import { fetchMerch } from '@/utils';

function Merch() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getMerch = async () => {
      const merchItems = await fetchMerch();
      setProducts(merchItems);
    };
    getMerch();
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
