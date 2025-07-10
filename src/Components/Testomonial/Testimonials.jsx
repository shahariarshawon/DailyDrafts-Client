// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Sofia González",
    feedback: "DailyDrafts has completely changed how I share my thoughts. It's clean, fast, and inspiring!",
  },
  {
    name: "Ethan Walker",
    feedback: "As a travel blogger, I love the minimal layout and how easy it is to post stories and images.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-11/12 md:w-3/4 mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition"
          >
            <p className="text-gray-600 italic">“{testi.feedback}”</p>
            <h4 className="mt-4 font-semibold text-gray-800">— {testi.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
