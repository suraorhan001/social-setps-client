import React from "react";
import { Link } from "react-router";
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({ event }) => {
  const { _id, title, description, thumbnail, location, eventType, eventDate } = event;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-green-100">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
      />

      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
            {eventType}
          </span>
          <span className="flex items-center text-gray-500 text-sm">
            <Calendar size={16} className="mr-1" />
            {formattedDate}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 hover:text-green-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex items-center text-gray-500 text-sm">
          <MapPin size={16} className="mr-1 text-green-600" />
          {location}
        </div>

        <div className="pt-3">
          <Link
            to={`/event/${_id}`}
            className="inline-block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
