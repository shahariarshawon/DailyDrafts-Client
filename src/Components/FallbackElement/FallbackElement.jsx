import React from "react";

const FallbackElement = () => {
  
    return (
      <div className="bg-gradient-to-br from-violet-100 to-pink-50 flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 transition-all">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500 border-opacity-50 mb-6"></div>
        <p className="text-3xl text-black font-semibold">Preparing your content...</p>
        <p className="text-xl text-black font-bold mt-2">Please wait while we hydrate the page.</p>
      </div>
    );
  

 
};

export default FallbackElement;
