import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Nav() {
  return (
    <div className="flex items-center justify-between bg-white border-black text-black p-6 sticky top-0">
        <div className="logo">
            <Link href='/'>
                <Image 
                    className=''
                    src='/dce-logo-black.svg'
                    width={80}
                    height={80}
                    alt='DCE LOGO BLACK'
                />
            </Link>
        </div>
        <div className="links flex gap-6">
            <Link href='/eventos'>Archivo</Link>
            <Link href='/merch'>Tienda</Link>
            <Link href='/about'>Nosotres</Link>
            <Link href='/'>Calendario</Link>
            <Link href='/'>Contacto</Link>
        </div>
    </div>
  )
}

export default Nav