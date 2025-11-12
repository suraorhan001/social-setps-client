import React from "react";

const ManageEventCard = ({ event, onDelete, onUpdate })=>
    {
   

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300">
      <img
        src={event.thumbnail}
        alt={event.eventTitle}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-semibold text-green-600 mb-2">{event.eventTitle}</h2>
      <p className="text-gray-600 mb-1">📍 Location: {event.location}</p>
      <p className="text-gray-600 mb-1">🗓 Date: {new Date(event.eventDate).toLocaleDateString()}</p>
      <p className="text-gray-600 mb-1">🌿 Type: {event.eventType}</p>
      <p className="text-gray-600 mb-3">👤 Created By: {event.createdBy}</p>
      <p className="text-gray-700 mb-3">{event.description}</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={onUpdate}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Update
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageEventCard;
