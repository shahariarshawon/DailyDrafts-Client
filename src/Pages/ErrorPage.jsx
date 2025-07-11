import React from "react";
import { Link } from "react-router"; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <h1 className="text-[160px] font-extrabold text-white drop-shadow-lg animate-bounce leading-none">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Oops! Page not found
      </h2>
      <p className="text-white text-lg mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track!
      </p>

      <Link
        to="/"
        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-white rounded-full hover:text-indigo-600 group hover:bg-white transition duration-300"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute left-0 flex items-center justify-end w-10 h-10 duration-300 transform -translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </span>
        <span className="relative">Back to Home</span>
      </Link>

      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
    </div>
  );
};

export default ErrorPage;
