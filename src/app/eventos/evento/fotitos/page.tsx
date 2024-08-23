import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Fotitos = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center bg-black text-white p-4">
        <h1>FOTOS DE EVENTO</h1>
        <Link href="/eventos/evento">
          <button className="bg-pink-500 text-white py-2 px-4 rounded">
            VOLVER A VER LA INFO DE EVENTO
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen1.jpg" alt="Imagen 1" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen2.jpg" alt="Imagen 2" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen3.jpg" alt="Imagen 3" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen4.jpg" alt="Imagen 4" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen5.jpg" alt="Imagen 5" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen6.jpg" alt="Imagen 6" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen7.jpg" alt="Imagen 7" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen8.jpg" alt="Imagen 8" width={150} height={150} />
        </div>
        <div className="bg-pink-200 w-full h-64 flex items-center justify-center">
          <Image src="/ruta/de/la/imagen9.jpg" alt="Imagen 9" width={150} height={150} />
        </div>
      </div>
    </div>
  )
}

export default Fotitos
