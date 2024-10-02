import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MerchCardProps {
    img: string;
    name: string;
    price: string;
    sizes: string[];
    desc: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ img, name, price, sizes, desc }) => {
    return (
        <div className='border-2 border-black p-6 bg-white text-black flex flex-col justify-between shadow-lg'>
            <div>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt='merch img'
                    className='border-2 border-black mb-2'
                />
                <h2 className='font-bold uppercase text-2xl mb-2'>{name}</h2>
                <p className='text-lg mb-2'>Precio: {price}</p>
                <p className='mb-2'>Tallas disponibles: {sizes.join(', ')}</p>
                <p>{desc}</p>
            </div>
            <div>
                <Link className="flex bg-black text-white p-4 uppercase justify-center mt-4" href='/merch/product'>
                    Ver Producto
                </Link>
            </div>
        </div>
    );
};

export default MerchCard;
