import React from "react";
const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-600"></div>
      <p className="mt-4 text-purple-700 font-semibold text-lg animate-pulse">
        Loading user info....
          
      </p>
    </div>
  );
};

export default Loader;
