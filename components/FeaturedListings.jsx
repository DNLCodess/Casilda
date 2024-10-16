"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import interior1 from "@public/assets/pexels-jvdm-1457842.jpg";
import interior2 from "@public/assets/pexels-medhat-ayad-122846-439227.jpg";
import interior3 from "@public/assets/pexels-pixabay-462235.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxSize } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";

const FeaturedListings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIntervals, setSlideIntervals] = useState({});

  const listings = [
    {
      id: 1,
      price: "$540,000",
      images: [interior1, interior2, interior3],
      title: "Renovated Studio",
      details: "1200 Sq Ft",
    },
    {
      id: 2,
      price: "$4,500/mo",
      images: [interior1, interior2, interior3],
      title: "Light And Modern Apartment",
      details: "1200 Sq Ft",
    },
    {
      id: 3,
      price: "$876,000",
      images: [interior1, interior2, interior3],
      title: "Design Apartment",
      details: "2560 Sq Ft",
    },
    {
      id: 4,
      price: "$450,000",
      images: [interior1, interior2, interior3],
      title: "Spacious Apartment",
      details: "1500 Sq Ft",
    },
    {
      id: 5,
      price: "$2,500,000",
      images: [interior1, interior2, interior3],
      title: "Luxury Penthouse",
      details: "3000 Sq Ft",
    },
    {
      id: 6,
      price: "$950,000",
      images: [interior1, interior2, interior3],
      title: "Modern Family Home",
      details: "2000 Sq Ft",
    },
    {
      id: 7,
      price: "$1,200,000",
      images: [interior1, interior2, interior3],
      title: "Urban Condo",
      details: "1800 Sq Ft",
    },
    {
      id: 8,
      price: "$750,000",
      images: [interior1, interior2, interior3],
      title: "Cozy Loft",
      details: "1100 Sq Ft",
    },
    {
      id: 9,
      price: "$3,000,000",
      images: [interior1, interior2, interior3],
      title: "Beachfront Villa",
      details: "3500 Sq Ft",
    },
  ];

  // Main slider: Automatically slide every 5 seconds and keep looping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(listings.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [listings.length]);

  // Individual slider logic
  useEffect(() => {
    const initialIntervals = {};
    listings.forEach((listing) => {
      initialIntervals[listing.id] = 0;
    });
    setSlideIntervals(initialIntervals);
  }, [listings]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIntervals((prev) => {
        const updatedIntervals = { ...prev };
        listings.forEach((listing) => {
          updatedIntervals[listing.id] =
            (prev[listing.id] + 1) % listing.images.length;
        });
        return updatedIntervals;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [listings]);

  // Get the current set of 3 listings based on currentSlide
  const displayedListings = listings.slice(
    currentSlide * 3,
    currentSlide * 3 + 3
  );

  return (
    <div className="my-[10%] px-4 sm:px-0">
      <section className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-semibold text-center">
            Discover Our Featured Listings
          </h1>
          <p className="text-lg text-gray-500 text-center">
            Explore some of our exclusive listings with beautiful designs and
            prime locations.
          </p>
        </div>

        {/* Main Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px]">
          {displayedListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative h-56">
                {/* Internal slider for images */}
                <Image
                  src={listing.images[slideIntervals[listing.id]]}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
                <div className="absolute top-0 left-0 m-2 bg-lime-600 text-white text-sm px-2 py-1 rounded">
                  FEATURED
                </div>
                <div className="absolute top-0 right-0 m-2 bg-gray-500 text-white text-sm px-2 py-1 rounded">
                  FOR SALE
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{listing.price}</h1>
                <p className="text-lg">{listing.title}</p>
                <p className="text-sm text-gray-500">{listing.details}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <RxSize className="text-gray-700 h-6 w-6" />
                    <CiHeart className="text-gray-700 h-6 w-6" />
                    <IoMdAdd className="text-gray-700 h-6 w-6" />
                  </div>
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedListings;
