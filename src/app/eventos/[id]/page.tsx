'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Para obtener el id de la URL
import Image from 'next/image'
import Link from 'next/link'
import { fetchEventById } from '@/utils/eventApi';
import { Event } from '@/interfaces';

const Evento = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<Event>();
  const [mainImage, setMainImage] = useState<string>(''); // Imagen principal


  useEffect(() => {
    const loadProduct = async () => {
      const eventId = Array.isArray(id) ? id[0] : id; // Asegurarse de que id sea un string
      const eventData = await fetchEventById(eventId);
      if (eventData) {
        setEvent(eventData);
        setMainImage(eventData.mainImage); // Establecer la imagen principal
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (!event) {
    return <p>Cargando evento...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-black text-white text-center p-2 capitalize">
        <h1>{(event.name)}</h1>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="p-2 text-2xl">{'<'}</button>

        <div className="flex space-x-4">
          <div className="bg-pink-200 w-40 h-40 flex items-center justify-center">
            <Image src={mainImage} alt="Imagen 1" width={150} height={150} />
          </div>
          <div className="bg-pink-200 w-40 h-40 flex items-center justify-center">
            <Image src={mainImage} alt="Imagen 2" width={150} height={150} />
          </div>
          <div className="bg-pink-200 w-40 h-40 flex items-center justify-center">
            <Image src={mainImage} alt="Imagen 3" width={150} height={150} />
          </div>
        </div>

        <button className="p-2 text-2xl">{'>'}</button>
      </div>

      <div className="text-center mt-4">
        <Link href="/eventos/evento/fotitos">
          <button className="bg-pink-500 text-white py-2 px-4 rounded">
          VER TODAS LAS FOTOS DEL EVENTO &lt;333
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Descripción general del evento</h2>
          <p>{event.description}</p>
        </div>

        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Ubicación exacta:</h2>
          <p>{event.ubication}</p>
          <Image src="/ruta/de/la/ubicacion.jpg" alt="Mapa de ubicación" width={300} height={200} />
        </div>

        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Participantes:</h2>
          <p>Inserte los participantes aquí.</p>
        </div>

        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Fecha y horario</h2>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </div>
      </div>
    </div>
  )
}

export default Evento
