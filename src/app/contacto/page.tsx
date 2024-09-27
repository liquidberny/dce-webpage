import Image from "next/image";

const Contacto = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Logo ovalado */}
      <div className="flex items-center justify-center">
        <div className="w-48 h-48 flex items-center justify-center">
          <Image
            src="/dce-logo-black.svg"
            width={180}
            height={180}
            alt="DCE LOGO BLACK"
          />
        </div>
      </div>

      {/* Texto de contacto */}
      <div className="ml-8">
        <p className="text-lg font-bold">Nos puedes contactar por estos medios</p>
        <p>Email: contacto@dce.com</p>
        <p>Call: +52 123456789</p>
        <p>Message: Whatsapp</p>
        <br />
        <p>Únete a nuestro discord:</p>
        <p>(link)</p>
        <br />
        <p>Síguenos en insta</p>
      </div>
    </div>
  );
};

export default Contacto;
