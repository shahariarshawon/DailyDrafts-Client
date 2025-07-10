import React from "react";
import newsletterImg from "../../assets/newsletter.jpg"; 
import Swal from "sweetalert2";

const Newsletter = () => {
  const handleNewsletterSubmit=(e)=>{
    e.preventDefault();
   Swal.fire("Thank you for subscribing to our newsletter");
  }
  return (
    <div className="w-3/4 mx-auto bg-white py-16 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <img
            src={newsletterImg}
            alt="Newsletter"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Join Our Weekly Digest</h2>
          <p className="mt-4 text-gray-600">
            Stay informed with the latest blog posts, features, and announcements.
          </p>
          <form
          onSubmit={handleNewsletterSubmit}
           className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
            
              type="submit"
              className=""
            ><a  className="relative inline-block px-4 py-2 font-medium group">
    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
    <span className="relative text-black group-hover:text-white">Subscribe</span>
</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
