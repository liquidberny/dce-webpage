import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from "@/interfaces";

const EventCard: React.FC<Event> = ({ id, documentId, images, name, ubication, description, date, time }) => {
    return (
        <div className='border-2 border-black p-6 bg-white text-black flex flex-col justify-between shadow-lg'>
            <div>
                <Image
                    src={images}
                    width={500}
                    height={500}
                    alt='event images'
                    className='border-2 border-black mb-2'
                />
                <div className="flex justify-between text-xs mb-2">
                    <p>{date}</p>
                    <h3 className='uppercase'>@{ubication}</h3>
                </div>
                <div className="flex justify-between text-xs mb-2">
                    <p>{time}</p>
                </div>
                <h2 className='font-bold uppercase text-2xl mb-2'>{name}</h2>
                <p>{description}</p>
            </div>
            <div>
                <Link className="flex bg-black text-white p-4 uppercase justify-center mt-4" href={`/eventos/${documentId}`}>
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
