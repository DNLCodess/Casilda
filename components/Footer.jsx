"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="w-full bg-[#1d1f21] text-white relative">
      <footer className="w-full py-12">
        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-8 pb-8 border-b border-gray-600">
          {/* Discover Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Discover</h1>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>Lagos</li>
              <li>Abuja</li>
              <li>Ogun</li>
              <li>Ibadan</li>
              <li>Port-Harcourt</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Contact Us</h1>
            <address className="not-italic text-gray-400">
              18 Adenuga Ademulegun Cl, Chevy View Estate,
              <br />
              Chevron Drive, Lekki, Lagos State
            </address>
            <p className="text-gray-400">Phone: 08036242734</p>
            <p className="text-gray-400">Email: Johnaboderin@aol.com</p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <h1 className="text-xl font-semibold">Newsletter</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="py-3 px-4 rounded-md w-full border border-gray-400 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 rounded-md hover:bg-blue-500 transition-all focus:outline-none"
              >
                Submit
              </button>
            </form>
            <p className="text-gray-400">
              Stay updated with the latest news and offers.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col absolute bottom-0 w-full md:flex-row justify-between items-center py-4 px-3 mt-8 bg-[#0f0f0f] text-gray-400 text-sm">
          <p>© 2024 Casilda. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
