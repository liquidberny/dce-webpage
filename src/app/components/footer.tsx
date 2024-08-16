import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-white border-black text-black p-6 sticky top-0">
      <Link href='/'>
        <Image 
          className=''
          src='/dce-logo-black.svg'
          width={320}
          height={160}
          alt='DCE LOGO BLACK'
        />
      </Link>
    </div>
  )
}

export default Footer;
