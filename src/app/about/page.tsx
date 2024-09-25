import Image from 'next/image';

const ResponsiveOval = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Imagen ovalada responsiva */}
      <div className="relative w-full max-w-md h-48 md:h-64 lg:h-80">
        <Image
          src="/images" // Cambia esto por la ruta de tu imagen
          alt="DCE logo pero grande"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          placeholder="blur"
          blurDataURL="/placeholder-image.png" // Ruta a una imagen borrosa para el placeholder
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">
            DCE logo pero grande
          </p>
        </div>
      </div>

      {/* Texto descriptivo */}
      <p className="text-center text-sm md:text-base lg:text-lg font-bold mt-8 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default ResponsiveOval;
