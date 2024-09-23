import React from 'react'
import EventCard from '../components/Home/EventCard'

function Eventos() {
  return (
    <div className='h-screen py-2'>
      <div className="container mx-auto grid grid-cols-3 gap-2">
        <EventCard
          img=''
          title='Humano 25'
          ubi='Parque la Ruina'
          desc='Festival de m&uacute;sica mexicano'
          date='22.03.25'
        />
        <EventCard
          img=''
          title='Valgur + Estrella del Sol'
          ubi='Parroquia Nuestra Señora del Carmen'
          desc='Valgur y Estrella del Sol presentar&aacute;n un set en la parroquia "Nuestra Señora del Carmen".'
          date='22.11.24'
        />
        <EventCard
          img=''
          title='Valgur + Estrella del Sol'
          ubi='Parroquia Nuestra Señora del Carmen'
          desc='Valgur y Estrella del Sol presentar&aacute;n un set en la parroquia "Nuestra Señora del Carmen".'
          date='22.11.24'
        />
        <EventCard
          img=''
          title='Valgur + Estrella del Sol'
          ubi='Parroquia Nuestra Señora del Carmen'
          desc='Valgur y Estrella del Sol presentar&aacute;n un set en la parroquia "Nuestra Señora del Carmen".'
          date='22.11.24'
        />
      </div>
    </div>
  )
}

export default Eventos