"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div style={{ height: "calc(100vh - 6rem)" }} className="relative z-10">
      <div className="bg-gray-300 w-full h-full flex justify-center items-center text-2xl text-gray-800 border-4 border-black ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-xs"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselPrevious />
          <CarouselContent>
            <CarouselItem>
              <Image
                src="/images/1.jpg"
                width={500}
                height={500}
                alt="Imagen 1"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/2.jpg"
                width={500}
                height={500}
                alt="Imagen 2"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src="/images/3.jpg"
                width={500}
                height={500}
                alt="Imagen 3"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <div className="bg-black w-[540px] h-[120px] absolute bottom-0 left-0 mb-4 ml-4 flex items-center justify-center text-white">
          <h1>No te pierdas el siguiente evento</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
