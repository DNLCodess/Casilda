import React from "react";
import Image from "next/image";
import apartment from "@public/assets/inquriy1.jpg"; // Adjust the path

const InquirySection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${apartment.src})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-full max-w-7xl mx-auto px-4 lg:px-12 py-8 gap-8">
        {/* Left Section: Info */}
        <div className="w-full lg:w-1/2 text-white space-y-8">
          <h2 className="text-3xl font-bold mb-8">
            Why Casilda Is The Perfect Choice?
          </h2>

          {/* Items */}
          {[
            {
              number: "01.",
              title: "Premium Location and Accessibility",
              description:
                "Casilda is situated in one of the most desirable areas, ensuring ease of access to essential amenities and major transport routes.",
            },
            {
              number: "02.",
              title: "Modern, Luxury Living Spaces",
              description:
                "Designed with both style and comfort in mind, Casilda offers expansive living spaces fitted with top-of-the-line amenities.",
            },
            {
              number: "03.",
              title: "Exceptional Investment Opportunity",
              description:
                "Whether you're looking for a home or an investment, Casilda offers strong potential for capital growth in a thriving real estate market.",
            },
            {
              number: "04.",
              title: "Superior Community Features",
              description:
                "Casilda boasts exceptional community amenities, from green spaces to recreational areas, perfect for families and individuals alike.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-transparent p-8 border-b border-white"
            >
              <span className="text-4xl font-bold block mb-2">
                {item.number}
              </span>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section: Inquiry Form */}
        <div className="w-full lg:w-1/2 h-full bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Real Estate Inquiry Form
          </h3>
          <form className="space-y-6">
            {/* Inquiry Type */}
            <div className="flex flex-col">
              <label
                htmlFor="inquiryType"
                className="font-medium text-gray-700"
              >
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                className="border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option value="buy">Buying</option>
                <option value="rent">Renting</option>
              </select>
            </div>

            {/* Information */}
            <div className="flex flex-col">
              <label
                htmlFor="Information"
                className="font-medium text-gray-700"
              >
                Information
              </label>
              <select
                id="Information"
                className="border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">I'm a</option>
                <option value="agent">I'm a real estate agent</option>
                <option value="property">I'm a property owner</option>
              </select>
            </div>

            {/* Name and Email */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex-grow">
                <label
                  htmlFor="firstName"
                  className="font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="lastName" className="font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </div>

            {/* Location and Zip Code */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              {/* Location Dropdown */}
              <div className="flex-grow">
                <label htmlFor="location" className="font-medium text-gray-700">
                  Location
                </label>
                <select
                  id="location"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ibadan">Ibadan</option>
                  <option value="Port-Harcourt">Port-Harcourt</option>
                </select>
              </div>

              {/* Zip Code Input */}
              <div className="flex-grow">
                <label htmlFor="zipCode" className="font-medium text-gray-700">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex-grow">
                <label htmlFor="maxPrice" className="font-medium text-gray-700">
                  Max Price
                </label>
                <input
                  type="number"
                  id="maxPrice"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Max price"
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="minSize" className="font-medium text-gray-700">
                  Minimum size (Sq Ft)
                </label>
                <input
                  type="number"
                  id="minSize"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Minimum size"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <div className="flex-grow">
                <label htmlFor="beds" className="font-medium text-gray-700">
                  Number of beds
                </label>
                <input
                  type="number"
                  id="beds"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number of beds"
                />
              </div>
              <div className="flex-grow">
                <label htmlFor="baths" className="font-medium text-gray-700">
                  Number of baths
                </label>
                <input
                  type="number"
                  id="baths"
                  className="border border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Number of baths"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquirySection;
