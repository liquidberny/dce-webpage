import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/interfaces';

const MerchCard: React.FC<Product> = ({ id, documentId, images, name, price, description }) => {
    return (
        <div className='border-2 border-black p-6 bg-white text-black flex flex-col justify-between shadow-lg'>
            <div>
                <Image
                    src={images}
                    width={500}
                    height={500}
                    alt='merch img'
                    className='border-2 border-black mb-2'
                />
                <h2 className='font-bold uppercase text-2xl mb-2'>{name}</h2>
                <p className='text-lg mb-2'>Precio: {price}</p>
                <p>{description}</p>
            </div>
            <div>
                <Link className="flex bg-black text-white p-4 uppercase justify-center mt-4" href={`/merch/product/${documentId}`}>
                    Ver Producto
                </Link>
            </div>
        </div>
    );
};

export default MerchCard;
