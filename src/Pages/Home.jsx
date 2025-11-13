

import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" min-h-screen text-gray-800">

      {/* 🔹 Banner Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 leading-tight">
              Connect, Create & Celebrate Events Together
            </h1>
            <p className="text-gray-700 mb-6 text-lg">
              Discover upcoming events, join communities, and create your own moments — all in one place.
            </p>
            <Link
              to="/upcomming"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Explore Events
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co.com/R4ZKXyFj/banner1.jpg"
              alt="Community Events"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* 🔹 Feature Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">Our Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Create Events", desc: "Easily create and share your own events with your community." },
              { title: "Join Communities", desc: "Connect with like-minded people and participate in their events." },
              { title: "Manage Effortlessly", desc: "Manage all your created and joined events from a single dashboard." },
            ].map((feature, i) => (
              <div key={i} className="bg-white border-2 border-green-300 rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Gallery Section */}
      <section className=" py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-10">Event Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { src: "https://i.ibb.co.com/0VGT5jQS/c6.jpg", title: "Road Cleaning" },
              { src: "https://i.ibb.co.com/B57G8FfF/c4.jpg", title: "Tree Plantation" },
              { src: "https://i.ibb.co.com/3mjwQzYr/c7.jpg", title: "Charity Donation" },
              { src: "https://i.ibb.co.com/0j7H4c3F/blood.jpg", title: "Blood Donation" },
              { src: "https://i.ibb.co.com/WvfZK70Y/c10.jpg", title: "Beach Cleanup" },
              { src: "https://i.ibb.co.com/1GRP6gvY/c11.jpg", title: "Community Meetup" },
              { src: "https://i.ibb.co.com/3Y9j71qL/c12.jpg", title: "Art Workshop" },
              { src: "https://i.ibb.co.com/ds1j95ZT/c13.jpg", title: "Plant Nursery" },
            ].map((event, i) => (
              <motion.div
                key={i}
                className="group perspective"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer border-2 border-green-300 rounded-lg overflow-hidden">
                  {/* Front */}
                  <img
                    src={event.src}
                    alt={event.title}
                    className="absolute w-full h-full object-cover rounded-lg backface-hidden"
                  />
                  {/* Back */}
                  <div className="absolute w-full h-full bg-green-700 text-white rounded-lg flex items-center justify-center text-center p-4 rotate-y-180 backface-hidden shadow-md">
                    <h3 className="text-lg font-bold">{event.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Newsletter Section */}
      <section className="py-16 ">
        <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl border-2 border-green-300 shadow-md">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-700 mb-6">Stay updated with the latest community events and platform features.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;
