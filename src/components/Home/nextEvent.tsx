"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchLastEvent } from "@/utils/eventApi";
import { Event } from "@/interfaces";

const NextEvent = () => {
  const [event, setEvent] = useState<Event | null>(null); // Estado inicial nulo

  useEffect(() => {
    const getEvent = async () => {
      const eventItem = await fetchLastEvent();
      setEvent(eventItem);
    };
    getEvent();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-100">
      <div className="bg-gray-300 w-full h-full flex flex-col items-center text-xl md:text-2xl text-gray-800 border-4 relative">
        <div className="absolute top-4 w-[90%] sm:w-[560px] h-[80px] bg-black flex justify-center items-center text-white">
          <p>{event?.name || 'Evento no disponible'}</p> {/* Accede directamente al nombre del evento */}
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full pt-[120px]">
          {/* Imagen del evento */}
          <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
            <Image
              src={event?.images || "/images/evento.png"} // Usa la imagen del evento o una por defecto
              alt="Imagen del evento"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Información del evento */}
          <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center p-4">
            <div className="w-full sm:w-[500px] h-[150px] sm:h-[200px] bg-black flex justify-center items-center text-white mb-4">
              {event?.description}
            </div>
            <div className="flex w-full flex-col items-center lg:items-start">
              <div className="w-full sm:w-[400px] bg-black text-white text-center lg:text-left p-2 mb-2">
                Ubicación: {event?.ubication || 'Ubicación no disponible'}
              </div>
              {/* Mapa responsivo */}
              <div className="w-full sm:w-[600px] lg:w-[550px] h-auto bg-gray-500 flex justify-center items-center">
                <iframe
                  src={event?.map}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[350px] aspect-video"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
