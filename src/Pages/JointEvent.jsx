import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import EventCard from "../Components/EventCard";

const JointEvent = () => {
  const { user } = useContext(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !user.email) return;

    fetch(
      `https://social-platform-server-psi.vercel.app/joined-events/${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setJoinedEvents(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching joined events:", err);
        setLoading(false);
      });
  }, [user]);

  //   if (!user) {
  //     return (
  //       <div className="text-center mt-20 text-xl text-red-500">
  //         Please log in to see your joined events.
  //       </div>
  //     );
  //   }

  if (loading) {
    return (
      <div className="text-center mt-20 text-lg">
       <div className="flex justify-center items-center min-h-[60vh]">
    <span className="loading loading-spinner loading-lg text-green-600"></span>
  </div>
      </div>
    );
  }

  if (joinedEvents.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        You haven’t joined any events yet.
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🌿 My Joined Events
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {joinedEvents.map((event) => (
          <EventCard
            event={event}
            key={event._id}
            hideViewDetailsButton={true}
          ></EventCard>
        ))}
      </div>
    </div>
  );
};

export default JointEvent;
