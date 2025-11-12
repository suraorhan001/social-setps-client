import React, { useEffect, useState } from "react";
import EventCard from "../Components/EventCard";

const Upcoming = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const query =
          filter || search
            ? `?${filter ? `type=${filter}&` : ""}${search ? `search=${search}` : ""}`
            : "";

        const res = await fetch(`http://localhost:3000/upcoming-social-steps${query}`);
        const data = await res.json();
        setEvents(data.data || []);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [filter, search]);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Upcoming Events
      </h1>

      {/* Filter & Search Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="border border-green-400 text-green-700 p-2 rounded-lg focus:ring-2 focus:ring-green-400"
        >
          <option value="">All Events</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Donation">Donation</option>
          <option value="Plantation">Plantation</option>
          <option value="Community">Community</option>
        </select>

        <input
          type="text"
          placeholder="Search by event name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-400 p-2 rounded-lg w-64 focus:ring-2 focus:ring-green-400"
        />
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

export default Upcoming;
