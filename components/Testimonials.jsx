import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            See how our clients feel about their experience with Casilda.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-blue-500 to-teal-400 rounded-l-lg"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Jane Doe
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-4">Homebuyer</p>
            <blockquote className="text-gray-700 italic">
              "Casilda made buying my first home an enjoyable experience. The
              team was professional, knowledgeable, and made sure every detail
              was perfect. Highly recommended!"
            </blockquote>
            <div className="mt-6">
              <span className="block h-1 w-12 bg-teal-400 rounded-full"></span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-blue-500 to-teal-400 rounded-l-lg"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              John Smith
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-4">
              Property Investor
            </p>
            <blockquote className="text-gray-700 italic">
              "The professionalism at Casilda is unmatched. I found the perfect
              investment property thanks to their dedication and expertise."
            </blockquote>
            <div className="mt-6">
              <span className="block h-1 w-12 bg-teal-400 rounded-full"></span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-blue-500 to-teal-400 rounded-l-lg"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Emily Brown
            </h3>
            <p className="text-sm font-medium text-gray-500 mb-4">Renter</p>
            <blockquote className="text-gray-700 italic">
              "Casilda made renting so easy! Their attention to detail and
              customer service made the entire process stress-free."
            </blockquote>
            <div className="mt-6">
              <span className="block h-1 w-12 bg-teal-400 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
