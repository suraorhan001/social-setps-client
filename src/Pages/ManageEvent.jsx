// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Provider/AuthContext";
// import EventCard from "../Components/EventCard";

// const ManageEvent = () => {
//   const { user } = useContext(AuthContext);
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user || !user.email) return;

//     fetch(`http://localhost:3000/my-events/${user.email}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) setEvents(data.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching events:", err);
//         setLoading(false);
//       });
//   }, [user]);

//   if (loading) return <div className="text-center mt-10 text-lg">Loading your events...</div>;

//   if (!events.length)
//     return (
//       <div className="text-center mt-20 text-gray-600 text-lg">
//         You haven't created any events yet.
//       </div>
//     );

//   return (
//     <div className="min-h-screen py-12 px-4 bg-gray-50">
//       <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
//         🌿 My Created Events
//       </h1>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {events.map(event => (
//           <EventCard
//             key={event._id}
//             event={event}
//             hideJoinButton={true}         
//             hideViewDetailsButton={true}  
//             isManagePage={true}          
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageEvent;




import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import ManageEventCard from "../Components/ManageEventCard";

const ManageEvent = () => {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !user.email) return;

    fetch(`http://localhost:3000/my-events/${user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setEvents(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      const res = await fetch(`http://localhost:3000/delete-event/${id}/${user.email}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        alert("Event deleted successfully!");
        setEvents(events.filter(event => event._id !== id));
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete event");
    }
  };

  const handleUpdate = (event) => {
    // You can open a modal or navigate to update form page
    alert(`Update form will open for "${event.eventTitle}"`);
  };

  if (loading) return <div className="text-center mt-10 text-lg">Loading your events...</div>;

  if (!events.length)
    return <div className="text-center mt-20 text-gray-600 text-lg">You haven't created any events yet.</div>;

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🌿 My Created Events
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
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

