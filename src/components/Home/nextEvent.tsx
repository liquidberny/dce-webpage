import React from "react";
import Image from "next/image";

const NextEvent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 w-full h-full flex flex-col items-center text-xl md:text-2xl text-gray-800 border-4 border-black relative">
        {/* Rectángulo negro centrado en el margen superior con margen */}
        <div className="absolute top-4 w-[90%] sm:w-[560px] h-[100px] sm:h-[130px] bg-black flex justify-center items-center text-white">
          Siguiente evento
        </div>
        <div className="flex flex-col md:flex-row w-full h-full pt-[120px] sm:pt-[150px]">
          {/* Div rojo con imagen que ocupa la mitad del ancho */}
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="/images/evento.png"
              alt="Imagen en div rojo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Div azul con múltiples hijos */}
          <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-4">
            {/* Descripción del evento */}
            <div className="w-full sm:w-[500px] h-[150px] sm:h-[200px] bg-black flex justify-center items-center text-white mb-4">
              Descripción del evento
            </div>
            {/* Nuevo contenedor con dos divs hijos */}
            <div className="flex w-full flex-col items-center md:items-start">
              {/* Div negro alineado a la izquierda */}
              <div className="w-full sm:w-[400px] bg-black text-white text-center md:text-left p-2 mb-2">
                Ubicacion exacta:
              </div>
              {/* Div gris alineado a la derecha */}
              <div className="w-full sm:w-[600px] h-[200px] sm:h-[300px] bg-gray-500 flex justify-center items-center">
                Pon el mapa aquí
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;
