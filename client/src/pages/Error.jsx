import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-cyan-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;