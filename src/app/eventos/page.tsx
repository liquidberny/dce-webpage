"use client";
import React, { useState, useEffect } from "react";
import EventCard from "@/components/Home/EventCard";
import { Event } from "@/interfaces";
import { fetchEvents } from "@/utils/eventApi";

function Eventos() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const eventItems = await fetchEvents();
      setEvents(eventItems);
    };
    getEvents();
  }, []);

  return (
    <div className="py-2">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard
            id={event.id}
            key={event.id}
            documentId={event.documentId}
            images={event.images}
            name={event.name}
            ubication={event.ubication}
            description={event.description}
            price={event.price}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>
    </div>
  );
}

export default Eventos;
