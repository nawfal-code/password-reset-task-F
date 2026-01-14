import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 px-10 py-12 rounded-2xl shadow-2xl max-w-lg">

        <h1 className="text-6xl font-extrabold text-white mb-3">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-2">
          Page not found
        </h2>

        <p className="text-sm text-gray-300 mb-6">
          The page you are looking for might be removed, renamed, or temporarily unavailable.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
