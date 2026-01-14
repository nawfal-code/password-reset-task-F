import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token=localStorage.getItem("token");
  return (
   





    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">

        {/* Hero Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 rounded-2xl shadow-2xl p-10">

          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Welcome to <span className="text-blue-400">Shopify App</span>
          </h1>

          <p className="mt-4 text-gray-300 text-sm md:text-base">
            A simple, modern authentication app built with React and Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 transition"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded-lg font-semibold border border-gray-500 hover:bg-gray-700 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
