import React from "react";
import { useLoaderData } from "react-router";
import EventCard from "../Components/EventCard";

const Upcomming = () => {
  const events = useLoaderData()
  console.log(events)
  
  return (
    <div className="min-h-screen bg-green-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
         Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Upcomming;
