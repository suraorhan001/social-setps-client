
// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link } from "react-router";
// import { AuthContext } from "../Provider/AuthContext";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import toast from "react-hot-toast";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef();

//   // Theme state
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

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
//       .then(() => toast.success("Logged out successfully"))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <nav className="bg-green-50 border-b border-green-200 shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//          <Link
//   to="/"
//   className="text-2xl font-bold bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent tracking-wide"
// >
//   SocialSteps
// </Link>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">

//             <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link>
//             <Link to="/upcomming" className="text-gray-700 hover:text-green-700 font-medium">Upcoming Events</Link>
//             <Link to="/create-event" className="text-gray-700 hover:text-green-700 font-medium">Create Event</Link>

//             {/* Theme Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="ml-4 p-2 rounded-full bg-green-200 hover:bg-green-300"
//             >
//               {theme === "light" ? (
//   <Moon size={20} />
//    ) : (
//   <Sun size={20} color="black" />
//    )}
//             </button>

//             {!user ? (
//               <Link
//                 to="/login"
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
//                     <div className="px-4 py-2 border-b text-gray-800 font-semibold">
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

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center gap-2">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-green-100 hover:bg-green-200"
//             >
//               {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
//             </button>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-green-700 focus:outline-none"
//             >
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden mt-2 pb-4 space-y-2">
            

//             {!user ? (
//               <Link to="/login" onClick={() => setMenuOpen(false)} className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</Link>
//             ) : (
//               <div className="space-y-1 mt-2">
//                 <div className="flex items-center gap-2 px-2">
//                   <img src={user.photoURL || "/default-profile.png"} alt="Profile" className="w-8 h-8 rounded-full border-2 border-green-400" />
//                   <span className="text-gray-800 font-semibold">{user.displayName || "User"}</span>
//                 </div>
//                 <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Home</Link>
//             <Link to="/upcomming" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Upcoming Events</Link>
//             <Link to="/create-event" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Create Event</Link>
//                 <Link to="/manage-event" onClick={() => setMenuOpen(false)} className="block px-2 py-1 hover:bg-green-50 rounded">Manage Events</Link>
//                 <Link to="/joined-event" onClick={() => setMenuOpen(false)} className="block px-2 py-1 hover:bg-green-50 rounded">Joined Events</Link>
//                 <button onClick={handleLogOut} className="block w-full text-left px-2 py-1 hover:bg-green-50 rounded">Logout</button>
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
import { Menu, X, Sun, Moon } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

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
      .then(() => toast.success("Logged out successfully"))
      .catch((err) => console.log(err));
    setMenuOpen(false);
  };

  return (
    <nav className="bg-green-50 border-b border-green-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-green-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent tracking-wide"
          >
            SocialSteps
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">Home</Link>
            <Link to="/upcomming" className="text-gray-700 hover:text-green-700 font-medium">Upcoming Events</Link>
            {user && <Link to="/create-event" className="text-gray-700 hover:text-green-700 font-medium">Create Event</Link>}

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-green-200 hover:bg-green-300"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} color="black" />}
            </button>

            {!user ? (
              <Link
                to="/login"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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
                    <div className="px-4 py-2 border-b text-gray-800 font-semibold">{user.displayName || "User"}</div>
                    <Link to="/create-event" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setDropdownOpen(false)}>Create Event</Link>
                    <Link to="/manage-event" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setDropdownOpen(false)}>Manage Events</Link>
                    <Link to="/joined-event" className="block px-4 py-2 text-gray-700 hover:bg-green-50" onClick={() => setDropdownOpen(false)}>Joined Events</Link>
                    <button
                      onClick={() => { handleLogOut(); setDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 border-t border-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-green-100 hover:bg-green-200">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-green-700 focus:outline-none">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            {/* Public Links */}
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Home</Link>
            <Link to="/upcomming" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Upcoming Events</Link>

            {!user ? (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</Link>
            ) : (
              <div className="space-y-1 mt-2">
                <div className="flex items-center gap-2 px-2">
                  <img src={user.photoURL || "/default-profile.png"} alt="Profile" className="w-8 h-8 rounded-full border-2 border-green-400" />
                  <span className="text-gray-800 font-semibold">{user.displayName || "User"}</span>
                </div>
                <Link to="/create-event" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-green-700 font-medium">Create Event</Link>
                <Link to="/manage-event" onClick={() => setMenuOpen(false)} className="block px-2 py-1 hover:bg-green-50 rounded">Manage Events</Link>
                <Link to="/joined-event" onClick={() => setMenuOpen(false)} className="block px-2 py-1 hover:bg-green-50 rounded">Joined Events</Link>
                <button onClick={handleLogOut} className="block w-full text-left px-2 py-1 hover:bg-green-50 rounded">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


