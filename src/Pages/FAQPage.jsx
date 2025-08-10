import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is DailyDrafts?",
    answer:
      "DailyDrafts is a blogging platform where users can create, read, and manage blogs. You can also add blogs to your wishlist and view featured posts.",
  },
  {
    question: "Do I need an account to read blogs?",
    answer:
      "No. You can browse and read all public blogs without creating an account. However, you need to be logged in to add blogs, add to wishlist, or view featured blogs.",
  },
  {
    question: "How can I create a blog?",
    answer:
      "Once logged in, go to the 'Add Blog' page from the navbar. You can upload a thumbnail, add a title, and write your blog using the rich text editor.",
  },
  {
    question: "Is DailyDrafts free to use?",
    answer:
      "Yes! DailyDrafts is completely free to use for both readers and writers.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-gradient-to-br from-pink-50 to-violet-100 min-h-screen px-4 py-30 md:px-16 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked <span className="text-indigo-600">Questions</span>
      </h2>

      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-gray-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 hover:bg-gray-50"
            >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openIndex === index ? "rotate-180 text-indigo-600" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="p-4 py-4 text-gray-600 border-t border-gray-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
