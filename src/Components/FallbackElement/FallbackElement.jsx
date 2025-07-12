import React from "react";

const FallbackElement = () => {
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 transition-all">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-cyan-500 border-opacity-50 mb-6"></div>
        <p className="text-xl font-semibold">Preparing your content...</p>
        <p className="text-sm text-gray-400 mt-2">Please wait while we hydrate the page.</p>
      </div>
    );
  

 
};

export default FallbackElement;
