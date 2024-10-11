import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
    img: string;
    title: string;
    ubi: string;
    desc: string;
    date: string;
}

const EventCard: React.FC<EventCardProps> = ({ img, title, ubi, desc, date }) => {
    return (
        <div className='border-2 border-black p-6 bg-white text-black flex flex-col justify-between shadow-lg'>
            <div>
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt='event img'
                    className='border-2 border-black mb-2'
                />
                <div className="flex justify-between text-xs mb-2">
                    <p>{date}</p>
                    <h3 className='uppercase'>@{ubi}</h3>
                </div>
                <h2 className='font-bold uppercase text-2xl mb-2'>{title}</h2>
                <p>{desc}</p>
            </div>
            <div>
                <Link className="flex bg-black text-white p-4 uppercase justify-center mt-4" href='/eventos/evento'>
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
