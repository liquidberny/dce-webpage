import React from 'react';
import EventCard from '../components/Home/EventCard';

function Eventos() {
  return (
    <div className='py-2'>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <EventCard
          img='/images/event1.jpg'
          title='Humano 25'
          ubi='Parque la Ruina'
          desc='Festival de música mexicano'
          date='22.03.25'
        />
        <EventCard
          img='/images/event2.jpg'
          title='Valgur + Estrella del Sol'
          ubi='Parroquia Nuestra Señora del Carmen'
          desc='Valgur y Estrella del Sol presentarán un set en la parroquia "Nuestra Señora del Carmen".'
          date='22.11.24'
        />
        <EventCard
          img='/images/event3.jpg'
          title='Valgur + Estrella del Sol'
          ubi='Parroquia Nuestra Señora del Carmen'
          desc='Valgur y Estrella del Sol presentarán un set en la parroquia "Nuestra Señora del Carmen".'
          date='22.11.24'
        />
        <EventCard
          img='/images/event4.jpg'
          title='Valgur + Estrella del Sol'
          ubi='Parroquia Nuestra Señora del Carmen'
          desc='Valgur y Estrella del Sol presentarán un set en la parroquia "Nuestra Señora del Carmen".'
          date='22.11.24'
        />
      </div>
    </div>
  );
}

export default Eventos;
