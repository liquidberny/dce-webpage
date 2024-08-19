import React from "react";
import Image from "next/image";

const NextEvent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-300 w-full h-full flex flex-col items-center text-2xl text-gray-800 border-4 border-black relative">
        {/* Rectángulo negro centrado en el margen superior con margen */}
        <div className="absolute top-4 w-[560px] h-[130px] bg-black flex justify-center items-center text-white">
          Siguiente evento
        </div>
        <div className="flex w-full h-full pt-[150px]">
          {/* Div rojo con imagen que ocupa la mitad del ancho */}
          <div className="w-1/2 relative">
            <Image
              src="/images/evento.png"
              alt="Imagen en div rojo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Div azul con múltiples hijos */}
          <div className="w-1/2 relative flex flex-col justify-center items-center">
            {/* Descripción del evento */}
            <div className="w-[500px] h-[200px] bg-black flex justify-center items-center text-white mb-4">
              Descripción del evento
            </div>
            {/* Nuevo contenedor con dos divs hijos */}
            <div className="flex w-full flex-col">
              {/* Div negro alineado a la izquierda */}
              <div className="w-[400px] flex justify-center  bg-black text-white ">
                Ubicacion exacta:
              </div>
              {/* Div gris alineado a la derecha */}
              <div className="w-[600px] h-[300px] ml-auto bg-gray-500">Pon el mapa aqui</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
