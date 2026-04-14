import React from "react";
import ErrorGif from "../assets/404.gif";
import { Link } from "react-router-dom";
import { CornerDownLeft } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      
      {/* Card */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white border border-gray-100 rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8 md:p-10 text-center">
        
        {/* Image */}
        <div className="w-40 sm:w-52 md:w-60 lg:w-64 mx-auto mb-4 sm:mb-6">
          <img
            src={ErrorGif}
            alt="404 Not Found"
            className="w-full object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-3 max-w-sm sm:max-w-md mx-auto leading-relaxed">
          Looks like this connection is lost. The page you’re trying to reach
          doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-5 sm:mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-green hover:bg-green-700 text-white text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            <CornerDownLeft size={18} />
            Back to Home
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6">
          Error Code: 404 • KeenKeeper
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;