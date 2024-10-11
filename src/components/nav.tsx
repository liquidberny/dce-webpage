"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu } from "react-icons/hi"; // Icono de menú hamburguesa

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white border-black text-black p-6 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image
              className=""
              src="/dce-logo-black.svg"
              width={60} // Cambiado a 60px para dispositivos móviles
              height={60}
              alt="DCE LOGO BLACK"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-6">
          <Link href="/eventos" className="hover:text-gray-600">
            Archivo
          </Link>
          <Link href="/merch" className="hover:text-gray-600">
            Tienda
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            Nosotres
          </Link>
          <Link href="/" className="hover:text-gray-600">
            Calendario
          </Link>
          <Link href="/contacto" className="hover:text-gray-600">
            Contacto
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <HiMenu className="text-3xl" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-start mt-4 space-y-2 md:hidden">
          <Link href='/eventos' onClick={toggleMenu} className="hover:text-gray-600">Archivo</Link>
          <Link href='/merch' onClick={toggleMenu} className="hover:text-gray-600">Tienda</Link>
          <Link href='/about' onClick={toggleMenu} className="hover:text-gray-600">Nosotres</Link>
          <Link href='/' onClick={toggleMenu} className="hover:text-gray-600">Calendario</Link>
          <Link href='/' onClick={toggleMenu} className="hover:text-gray-600">Contacto</Link>
        </div>
      )}
    </div>
  );
}

export default Nav;