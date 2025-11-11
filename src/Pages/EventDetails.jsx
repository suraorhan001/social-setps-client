import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const EventDetails = () => {
    const {user} = use(AuthContext)
    const navigate = useNavigate()
  const data = useLoaderData()
  const event = data?.result
  console.log(event)


const handleJoin = (event) => {
  
  if (!user || !user.email) {
    alert("Please log in to join this event.");
    navigate('/login')
    return;
  }

  const joinData = {
    userEmail: user.email,
    eventId: event._id,
    eventTitle: event.eventTitle || event.title,
    eventDate: event.eventDate,
    location: event.location,
    thumbnail: event.thumbnail,
  };

  
  fetch("http://localhost:3000/join-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(joinData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.message === "Already joined this event") {
        alert("You’ve already joined this event!");
      } else if (data?.message === "Event joined successfully!" ) {
        alert("Joined Successfully!");
        navigate('/joined-event')
      } else {
        alert( "Something went wrong!");
      }
    })
    .catch((err) => {
      console.error("Error joining event:", err);
      alert("Server error! Please try again later.");
    });
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

        <button onClick={()=>handleJoin(event)}
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
