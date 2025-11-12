import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Social Steps</h2>
          <p className="text-gray-200">
            Join events, connect with people, and make a difference in your
            community. Stay updated with upcoming social activities.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/upcoming-events" className="hover:underline">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/joined-event" className="hover:underline">
                My Joined Events
              </Link>
            </li>
            <li>
              <Link to="/manage-event" className="hover:underline">
                Manage Events
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: support@socialsteps.com</p>
          <p>Phone: +880 123 456 789</p>
          <p className="mt-2 text-gray-200 text-sm">
            © {new Date().getFullYear()} Social Steps. All rights reserved.
          </p>
        </div>
      </div>

      <div className="bg-green-800 text-center py-4 text-gray-300 text-sm">
        Made with ❤️ by Your Name
      </div>
    </footer>
  );
};

export default Footer;
