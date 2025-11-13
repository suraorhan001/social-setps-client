import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const UpdateEvent = () => {
  const event = useLoaderData();
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const [formData, setFormData] = useState({
    eventTitle: event.eventTitle,
    location: event.location,
    eventDate: event.eventDate.split("T")[0],
    eventType: event.eventType,
    thumbnail: event.thumbnail,
    description: event.description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://social-platform-server-psi.vercel.app/update-event/${event._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success) {
        alert("Event updated successfully!");
        navigate("/manage-event");
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10  p-6 rounded-xl shadow-lg">
      <h1 className="text-3xl font-semibold text-green-700 mb-6 text-center">
        Update Event
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="eventTitle"
          value={formData.eventTitle}
          onChange={handleChange}
          placeholder="Event Title"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="date"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          placeholder="Event Type"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          placeholder="Thumbnail URL"
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          className="w-full border p-3 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Update Event
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;
