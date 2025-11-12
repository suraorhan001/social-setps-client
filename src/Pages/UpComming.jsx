// import React from "react";
// import { useLoaderData } from "react-router";
// import EventCard from "../Components/EventCard";

// const Upcomming = () => {
//   const events = useLoaderData()
//   const [event, setEvent] = useState([]);
//   const [filterType, setFilterType] = useState(""); // filter state
//   const [loading, setLoading] = useState(true);
//   console.log(events)
  
//   return (
//     <div className="min-h-screen bg-green-50 py-16 px-6">
//       <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
//          Upcoming Events
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {events.map((event) => (
//           <EventCard key={event._id} event={event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Upcomming;



import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

const Upcomming = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState(""); // filterType
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/upcoming-social-steps${filter ? `?type=${filter}` : ""}`
        );
        const data = await res.json();
        setEvents(data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [filter]);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        🌿 Upcoming Events
      </h1>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border border-green-400 text-green-700 p-2 rounded-lg focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Events</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donetion</option>
          <option value="Community">Community</option>
        </select>
      </div>

      {/* Event Cards */}
      {loading ? (
        <p className="text-center text-gray-500">Loading events...</p>
      ) : events.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Upcomming;


