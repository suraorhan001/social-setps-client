import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import ManageEventCard from "../Components/ManageEventCard";
import { useNavigate } from "react-router";

const ManageEvent = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.email) return;

    fetch(
      `https://social-platform-server-psi.vercel.app/my-events/${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setEvents(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      const res = await fetch(
        `https://social-platform-server-psi.vercel.app/delete-event/${id}/${user.email}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success) {
        alert("Event deleted successfully!");
        setEvents(events.filter((event) => event._id !== id));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete event");
    }
  };

  const handleUpdate = (event) => {
    navigate(`/update-event/${event._id}`);
  };

  if (loading)
    return (
     <div className="flex justify-center items-center min-h-[60vh]">
    <span className="loading loading-spinner loading-lg text-green-600"></span>
  </div>
    );

  if (!events.length)
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        You haven't created any events yet.
      </div>
    );

  return (
    <div className="min-h-screen py-12 px-4 ">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🌿 My Created Events
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <ManageEventCard
            key={event._id}
            event={event}
            onDelete={() => handleDelete(event._id)}
            onUpdate={() => handleUpdate(event)}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageEvent;
