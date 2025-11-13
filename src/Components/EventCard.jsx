import React from "react";
import { Link } from "react-router";
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({ event , hideViewDetailsButton }) => {
  const { _id, title, description, thumbnail, location, eventType, eventDate } = event;

  const formattedDate = new Date(eventDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
  className="
    relative rounded-2xl overflow-hidden
    border-2 border-green-400/60
    hover:scale-[1.02]
    transition-all duration-500
  "
>
  {/* Outline Layer */}
  <div
    className="
      absolute inset-0 rounded-2xl
      border-2 border-green-400/60
    "
  ></div>

  {/* Transparent Inner Layer */}
  <div
    className="
      relative rounded-2xl bg-transparent
      shadow-md hover:shadow-lg
      transition-shadow duration-300
    "
  >
    {/* Thumbnail */}
    <img
      src={thumbnail}
      alt={title}
      className="
        w-full h-52 object-cover rounded-t-2xl
        hover:scale-105 transition-transform duration-300
      "
    />

    {/* Content */}
    <div className="p-5 space-y-3">
      
      {/* Top Row: Event Type & Date */}
      <div className="flex justify-between items-center">
        <span
          className="
            px-3 py-1 text-xs font-semibold
            text-green-700 border border-green-400/30
            rounded-full
          "
        >
          {eventType}
        </span>

        <span className="flex items-center text-gray-500 text-sm">
          <Calendar size={16} className="mr-1 text-green-600" />
          {formattedDate}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          text-xl font-semibold text-gray-800
          hover:text-green-600 transition-colors
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Location */}
      <div className="flex items-center text-gray-500 text-sm">
        <MapPin size={16} className="mr-1 text-green-600" />
        {location}
      </div>

      {/* View Details Button */}
      <div className="pt-3">
        {!hideViewDetailsButton && (
          <Link to={`/event-details/${event.eventId || event._id}`}>
            <button
              className="
                px-4 py-2 rounded-lg font-medium
                bg-green-600 text-white
                hover:bg-green-700
                transition-colors duration-300
              "
            >
              View Details
            </button>
          </Link>
        )}
      </div>

    </div>
  </div>
</div>

  );
};

export default EventCard;
