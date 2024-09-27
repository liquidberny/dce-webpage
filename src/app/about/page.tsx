import Image from "next/image";

const ResponsiveOval = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Imagen ovalada responsiva */}
      <div className="relative w-full max-w-md h-48 md:h-64 lg:h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className=""
            src="/dce-logo-black.svg"
            width={600} // Cambiado a 60px para dispositivos móviles
            height={600}
            alt="DCE LOGO BLACK"
          />
        </div>
      </div>

      {/* Texto descriptivo */}
      <p className="text-center text-sm md:text-base lg:text-lg font-bold mt-8 max-w-xl">
        Somos el Departamento de Ciencias exactas un conjunto de artistas bien
        psdv ya te la sabes, hacemos conciertos, presentaciones de arte,
        dinamicas y muchas mas cosas bonitas.
      </p>
    </div>
  );
};

export default ResponsiveOval;
