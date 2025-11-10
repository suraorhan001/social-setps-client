// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../Provider/AuthContext";

// const EventCreate = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [eventType, setEventType] = useState("");
//   const [thumbnail, setThumbnail] = useState("");
//   const [location, setLocation] = useState("");
//   const [eventDate, setEventDate] = useState(null);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
    






//     // Validate all fields
//     if (!title || !description || !eventType || !thumbnail || !location || !eventDate) {
//       setError("All fields are required!");
//       return;
//     }

//     const today = new Date();
//     if (eventDate < today) {
//       setError("Event date must be in the future!");
//       return;
//     }

//     // Event object
//     const newEvent = {
//       title,
//       description,
//       eventType,
//       thumbnail,
//       location,
//       eventDate: eventDate.toISOString(),
//       createdBy: user.email,
//     };

//     console.log("New Event:", newEvent);

//     // Success message
//     alert("Event created successfully!");
//     navigate("/upcomming"); // Redirect to upcoming events page
//   };

//   return (
//     <div className="min-h-screen bg-green-50 py-16">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
//         <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
//           Create New Event
//         </h2>

//         {error && (
//           <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Event Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter event title"
//               name="title"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Write a short description"
//               name="description"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Event Type</label>
//             <select
//               value={eventType}
//               onChange={(e) => setEventType(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                name="eventType"
//             >
//               <option value="">Select type</option>
//               <option value="Cleanup">Cleanup</option>
//               <option value="Plantation">Plantation</option>
//               <option value="Donation">Donation</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Thumbnail Image URL</label>
//             <input
//               type="text"
//               value={thumbnail}
//               onChange={(e) => setThumbnail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter image URL"
//                name="thumbnail"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Location</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholder="Enter location"
//               name="location"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Event Date</label>
//             <DatePicker
//               selected={eventDate}
//               onChange={(date) => setEventDate(date)}
//               minDate={new Date()}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               placeholderText="Select a future date"
//               name="eventDate"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
//           >
//             Create Event
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EventCreate;





import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthContext";

const EventCreate = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

 
  const [eventDate, setEventDate] = useState(null);
  const [error, setError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!eventDate) {
    setError("Please select an event date!");
    return;
    }
    const today = new Date();
    if (eventDate < today) {
      setError("Event date must be in the future!");
      return;
    }

    // Event object
    const newEvent = {
      title:e.target.title.value ,
      description:e.target.title.value, 
      eventType:e.target.eventType.value,
      thumbnail:e.target.thumbnail.value,
      location:e.target.location.value,
      eventDate:eventDate.toISOString(),
      createdBy: user.email,
    };

    fetch('http://localhost:3000/upcoming-social-steps',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(newEvent)
    }).then(res => res.json())
    .then(data =>{
      console.log(data)
    })
    .catch(err =>{
      console.log(err)
    })
    
    //console.log("New Event:", newEvent);

    // Success message
    alert("Event created successfully!");
    navigate("/upcomming"); 
  };

  return (
    <div className="min-h-screen bg-green-50 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Create New Event
        </h2>

        {error && (
          <p className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Event Title</label>
            <input
              type="text"
              
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter event title"
              name="title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
            
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write a short description"
              name="description"
              required

            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Event Type</label>
            <select
             
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
               name="eventType"
               required

            >
              <option value="">Select type</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Thumbnail Image URL</label>
            <input
              
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter image URL"
               name="thumbnail"
              required

            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Location</label>
            <input
              type="text"
             
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter location"
              name="location"
              required

            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
j              minDate={new Date()}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholderText="Select a future date"
              name="eventDate"
             

            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventCreate;

