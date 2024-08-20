import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MerchCardProps {
  name: string;
  price: string;
  image: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ name, price, image }) => {
  return (
    <div className="border-solid border-2 border-black p-6 bg-white text-black flex flex-col justify-between w-80 h-auto">
      <div>
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
          className="border-solid border-2 border-black mb-4"
        />
        <div className="text-center">
          <h3 className="text-xl font-bold uppercase">{name}</h3>
          <p className="text-lg mb-4">{price}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className="bg-black text-white p-4 uppercase w-full text-center"
          href={`/${name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default MerchCard;
