// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link } from "react-router";
// import { AuthContext } from "../Provider/AuthContext";
// import { Menu, X } from "lucide-react"; 
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogOut = () => {
//     logOut()
//       .then(() => alert("Logged out successfully"))
//       .catch((err) => 
//         console.log(err)
//         );
//   };

//   return (
//     <nav className="bg-green-50 border-b border-green-200 shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Navbar container */}
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-2xl font-bold text-green-700 tracking-wide"
//           >
//             SocialSteps
//           </Link>

//           {/* Hamburger menu for mobile */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-green-700 focus:outline-none"
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>

//           {/* Menu items (Desktop only) */}
//           <div className="hidden md:flex items-center space-x-6">
//             <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">
//               Home
//             </Link>

//             <Link
//               to="/upcomming"
//               className="text-gray-700 hover:text-green-700 font-medium"
//             >
//               Upcoming Events
//             </Link>

//             <Link
//               to="/create-event"
//               className="text-gray-700 hover:text-green-700 font-medium"
//             >
//              Create Event
//             </Link>

//             {!user ? (
//               <Link
//                 to="/login"
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//               >
//                 Login
//               </Link>
//             ) : (
//               <div className="relative" ref={dropdownRef}>
//                 <img
//                   src={user.photoURL || "/default-profile.png"}
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-400"
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                 />

//                 {dropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg ring-1 ring-green-100 z-50">
//                     <div className="px-4 py-2 border-b border-gray-100 text-gray-800 font-semibold">
//                       {user.displayName || "User"}
//                     </div>

//                     <Link
//                       to="/create-event"
//                       className="block px-4 py-2 text-gray-700 hover:bg-green-50"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       Create Event
//                     </Link>

//                     <Link
//                       to="/manage-event"
//                       className="block px-4 py-2 text-gray-700 hover:bg-green-50"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       Manage Events
//                     </Link>

//                     <Link
//                       to="/joined-event"
//                       className="block px-4 py-2 text-gray-700 hover:bg-green-50"
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       Joined Events
//                     </Link>

//                     <button
//                       onClick={() => {
//                         handleLogOut();
//                         setDropdownOpen(false);
//                       }}
//                       className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 border-t border-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden pb-4 space-y-2">
//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className="block text-gray-700 hover:text-green-700 font-medium"
//             >
//               Home
//             </Link>

//             <Link
//               to="/upcoming"
//               onClick={() => setMenuOpen(false)}
//               className="block text-gray-700 hover:text-green-700 font-medium"
//             >
//               Upcoming Events
//             </Link>

//             {!user ? (
//               <Link
//                 to="/login"
//                 onClick={() => setMenuOpen(false)}
//                 className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
//               >
//                 Login
//               </Link>
//             ) : (
//               <div className="space-y-1">
//                 <div className="flex items-center gap-2">
//                   <img
//                     src={user.photoURL || "/default-profile.png"}
//                     alt="Profile"
//                     className="w-8 h-8 rounded-full border-2 border-green-400"
//                   />
//                   <span className="text-gray-800 font-semibold">
//                     {user.displayName || "User"}
//                   </span>
//                 </div>

//                 <Link
//                   to="/create-event"
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded"
//                 >
//                   Create Event
//                 </Link>

//                 <Link
//                   to="/manage-event"
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded"
//                 >
//                   Manage Events
//                 </Link>

//                 <Link
//                   to="/joined-events"
//                   onClick={() => setMenuOpen(false)}
//                   className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded"
//                 >
//                   Joined Events
//                 </Link>

//                 <button
//                   onClick={() => {
//                     handleLogOut();
//                     setMenuOpen(false);
//                   }}
//                   className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-green-50 rounded"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext, useState, useRef, useEffect } from "react"; 
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("Logged out successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <nav className="bg-green-50 border-b border-green-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-700 tracking-wide">
            SocialSteps
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-green-700 focus:outline-none"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">
              Home
            </Link>
            <Link to="/upcoming" className="text-gray-700 hover:text-green-700 font-medium">
              Upcoming Events
            </Link>
            <Link to="/create-event" className="text-gray-700 hover:text-green-700 font-medium">
             Create Event
            </Link>

            {!user ? (
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Login
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <img
                  src={user.photoURL || "/default-profile.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-green-400"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg ring-1 ring-green-100 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 text-gray-800 font-semibold">
                      {user.displayName || "User"}
                    </div>
                    <Link to="/create-event" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setDropdownOpen(false)}>Create Event</Link>
                    <Link to="/manage-event" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setDropdownOpen(false)}>Manage Events</Link>
                    <Link to="/joined-event" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setDropdownOpen(false)}>Joined Events</Link>
                    <button onClick={() => { handleLogOut(); setDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 border-t border-gray-100">Logout</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Home</Link>
            <Link to="/upcoming" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Upcoming Events</Link>
            
            {!user ? (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">Login</Link>
            ) : (
              <div className="space-y-1">
                {/* User Info */}
                <div className="flex items-center gap-2 px-2 py-1">
                  <img src={user.photoURL || "/default-profile.png"} alt="Profile" className="w-8 h-8 rounded-full border-2 border-green-400" />
                  <span className="text-gray-800 font-semibold">{user.displayName || "User"}</span>
                </div>
                {/* Menu Items Below User */}
                <Link to="/create-event" onClick={() => setMenuOpen(false)} className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Create Event</Link>
                <Link to="/manage-event" onClick={() => setMenuOpen(false)} className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Manage Events</Link>
                <Link to="/joined-events" onClick={() => setMenuOpen(false)} className="block px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Joined Events</Link>
                <button onClick={() => { handleLogOut(); setMenuOpen(false); }} className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-green-50 rounded">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
