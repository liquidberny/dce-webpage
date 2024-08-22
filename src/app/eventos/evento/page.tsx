import React from 'react'
import Image from 'next/image'

const Evento = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-black text-white text-center p-2">
        <h1>NOMBRE EVENTO: (Inserte nombre del evento)</h1>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="p-2 text-2xl">{'<'}</button>

        <div className="flex space-x-4">
          <div className="bg-pink-200 w-40 h-40 flex items-center justify-center">
            <Image src="/ruta/de/la/imagen1.jpg" alt="Imagen 1" width={150} height={150} />
          </div>
          <div className="bg-pink-200 w-40 h-40 flex items-center justify-center">
            <Image src="/ruta/de/la/imagen2.jpg" alt="Imagen 2" width={150} height={150} />
          </div>
          <div className="bg-pink-200 w-40 h-40 flex items-center justify-center">
            <Image src="/ruta/de/la/imagen3.jpg" alt="Imagen 3" width={150} height={150} />
          </div>
        </div>

        <button className="p-2 text-2xl">{'>'}</button>
      </div>

      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          VER TODAS LAS FOTOS DEL EVENTO &lt;333
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Descripción general del evento</h2>
          <p>Inserte una descripción del evento aquí.</p>
        </div>

        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Ubicación exacta:</h2>
          <Image src="/ruta/de/la/ubicacion.jpg" alt="Mapa de ubicación" width={300} height={200} />
        </div>

        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Participantes:</h2>
          <p>Inserte los participantes aquí.</p>
        </div>

        <div className="bg-black text-white p-4">
          <h2 className="text-lg">Fecha y horario</h2>
          <p>Inserte la fecha y horario aquí.</p>
        </div>

        <div className="bg-black text-white p-4 col-span-2">
          <h2 className="text-lg">Etiquetas:</h2>
          <p>Inserte las etiquetas aquí.</p>
        </div>
      </div>
    </div>
  )
}

export default Evento
