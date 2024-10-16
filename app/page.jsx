import Navbar from "@/components/Navbar";
import React from "react";
import bg1 from "@/public/assets/bg1.jpg";
import Image from "next/image";
import FeaturedListings from "@components/FeaturedListings";
import Footer from "@components/Footer";
import PropertiesGrid from "@components/PropertiesGrid";
import InquirySection from "@components/InquirySection";
import MeetOurAgents from "@components/MeetOurAgent";
import "animate.css/animate.min.css";
import Testimonials from "@components/Testimonials";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-slate-200">
      <Navbar />
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 z-10">
          <Image
            src={bg1}
            layout="fill"
            objectFit="cover"
            className="opacity-80"
            alt="Background"
          />
          <div className="bg-gradient-to-t from-black to-transparent opacity-60 absolute inset-0 z-20"></div>
        </div>
        <div className="relative z-30 flex flex-col items-center justify-center h-full gap-4 md:gap-8 text-white text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight drop-shadow-lg animate__animated animate__fadeInDown animate__delay-1s transform transition-transform duration-500 hover:scale-105">
            Welcome to <span className="text-[#FFD700]">Casilda</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-lg mx-auto leading-relaxed drop-shadow-md animate__animated animate__fadeInUp animate__delay-1s">
            "Discover your dream home with Casilda – where luxury living meets
            exceptional service in every property we offer."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 z-30">
            <div className="bg-white w-full h-[70px] rounded-lg flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-110">
              <h1 className="text-black text-lg font-bold transition-colors duration-300 hover:text-[#FFD700]">
                All Status
              </h1>
            </div>
            <div className="bg-[#2749a1] w-full h-[70px] rounded-lg flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-110">
              <h1 className="text-white text-lg font-bold transition-colors duration-300 hover:text-[#FFD700]">
                For Rent
              </h1>
            </div>
            <div className="bg-white w-full h-[70px] rounded-lg flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-110">
              <h1 className="text-black text-lg font-bold transition-colors duration-300 hover:text-[#FFD700]">
                For Sale
              </h1>
            </div>
          </div>
        </div>
      </section>
      <FeaturedListings />
      <PropertiesGrid />
      <InquirySection />
      <MeetOurAgents />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
