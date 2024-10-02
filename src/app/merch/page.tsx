import React from 'react';
import MerchCard from '../components/MerchCard'

function Merch() {
  return (
    <div className='py-2'>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MerchCard
          img="/images/camiseta.png"
          name="Camiseta Logo DCE"
          price="$25.00"
          sizes={['S', 'M', 'L', 'XL']}
          desc="Camiseta con el logo oficial del evento DCE. Algodón 100% de alta calidad."
        />
        <MerchCard
          img="/images/gorra.png"
          name="Gorra Edición Especial"
          price="$15.00"
          sizes={['Única']}
          desc="Gorra ajustable edición especial del evento. Disponible en color negro y blanco."
        />
        <MerchCard
          img="/images/hoodie.png"
          name="Hoodie Logo DCE"
          price="$40.00"
          sizes={['M', 'L', 'XL']}
          desc="Hoodie con el logo oficial del evento DCE. Mantente abrigado con estilo."
        />
      </div>
    </div>
  );
}

export default Merch;
