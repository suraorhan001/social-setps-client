import React from "react";

const EventDetails = () => {

  const event = {
    title: "Beach Cleanup Drive",
    description:
      "Join us for a fun and productive day cleaning up the local beach. Let's make our environment cleaner and greener together!",
    eventType: "Cleanup",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    location: "Sunny Beach, California",
    eventDate: "2025-12-15T10:00:00.000Z",
    createdBy: "alice@example.com",
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-80 object-cover rounded-2xl mb-6 shadow-lg"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4 tracking-tight">
          {event.title}
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 mb-6">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-600">📍 Location:</span>
            <span>{event.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-600">🗓 Date:</span>
            <span>{new Date(event.eventDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-600">🌿 Type:</span>
            <span>{event.eventType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-600">👤 Created By:</span>
            <span>{event.createdBy}</span>
          </div>
        </div>

        <button
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
