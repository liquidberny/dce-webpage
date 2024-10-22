"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchLastThreeEvents } from "@/utils/eventApi";
import { Event } from "@/interfaces";

const Hero = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventItems = await fetchLastThreeEvents();
      setEvents(eventItems);
    };
    getEvents();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <div style={{ height: "calc(100vh - 6rem)" }} className="relative z-10">
      <div className="bg-gray-300 w-full h-full flex justify-center items-center text-2xl text-gray-800 border-4 ">
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
            {events.map((event) => (
              <CarouselItem key={event.id}>
                <Image
                  src={event.images}
                  width={500}
                  height={500}
                  alt={event.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <div className="bg-black w-[90%] max-w-[540px] h-[120px] sm:h-[100px] md:h-[80px] absolute bottom-0 left-0 mb-4 ml-4 flex flex-row items-center justify-center text-white">
          <div className="flex flex-row items-center">
            <span className="text-white animate-bounce">⬇</span>
            <span className="text-white animate-bounce">⬇</span>
            <span className="text-white animate-bounce">⬇</span>
            <h1 className="text-center text-sm sm:text-lg md:text-xl">
              Siguiente evento: {events.at(0)?.name}
            </h1>   
            <span className="text-white animate-bounce">⬇</span>
            <span className="text-white animate-bounce">⬇</span>
            <span className="text-white animate-bounce">⬇</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
