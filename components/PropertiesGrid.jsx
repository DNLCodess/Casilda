import React from "react";
import Image from "next/image"; // Import the Next.js Image component

const PropertiesGrid = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Residential</h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row: Larger Card */}
          <div className="col-span-2">
            <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-[300px] group">
              <Image
                src="/assets/apartment.jpg"
                alt="Apartment"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out transform group-hover:scale-110" // Scaling image on hover
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                {/* Text fades out on hover */}
                <h3 className="text-lg font-bold text-white">Apartment</h3>
                <p className="text-gray-200">23 Properties</p>
                <button className="text-white mt-4">MORE DETAILS</button>
              </div>
            </div>
          </div>

          {/* Smaller Cards */}
          <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-[300px] group">
            <Image
              src="/assets/studio.jpg"
              alt="Studio"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <h3 className="text-lg font-bold text-white">Studio</h3>
              <p className="text-gray-200">7 Properties</p>
              <button className="text-white mt-4">MORE DETAILS</button>
            </div>
          </div>

          <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-[300px] group">
            <Image
              src="/assets/single.jpg"
              alt="Single Family Home"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <h3 className="text-lg font-bold text-white">
                Single Family Home
              </h3>
              <p className="text-gray-200">12 Properties</p>
              <button className="text-white mt-4">MORE DETAILS</button>
            </div>
          </div>

          <div className="relative bg-white shadow-md rounded-lg overflow-hidden h-[300px] group">
            <Image
              src="/assets/villa.jpg"
              alt="Villa"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-start p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <h3 className="text-lg font-bold text-white">Villa</h3>
              <p className="text-gray-200">10 Properties</p>
              <button className="text-white mt-4">MORE DETAILS</button>
            </div>
          </div>

          {/* Add more cards here as needed */}
        </div>
      </div>
    </div>
  );
};

export default PropertiesGrid;
