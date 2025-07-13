import React from "react";
import { MessageSquareQuote } from "lucide-react";

const testimonials = [
  {
    name: "Sofia González",
    feedback:
      "DailyDrafts has completely changed how I share my thoughts. It's clean, fast, and inspiring!",
  },
  {
    name: "Ethan Walker",
    feedback:
      "As a travel blogger, I love the minimal layout and how easy it is to post stories and images.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-11/12 md:w-3/4 mx-auto py-20 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="stats bg-white border rounded-2xl shadow-md transition hover:shadow-xl hover:shadow-violet-200"
          >
            <div className="stat p-4">
              <div className="stat-figure text-secondary">
                <MessageSquareQuote className="w-8 h-8 text-indigo-500" />
              </div>
              <div className="stat-title text-gray-500">Feedback</div>
              <div className="text-gray-700 text-sm italic mt-2 mb-4">
                “{testi.feedback}”
              </div>
              <div className="stat-desc font-semibold text-gray-800">
                — {testi.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
