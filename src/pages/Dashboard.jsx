import React from "react";

const Dashboard = () => {
  const token = localStorage.getItem("token");

  // If token missing → show error message
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-red-600 text-white px-6 py-4 rounded-xl shadow-lg text-center max-w-md">
          <h2 className="text-xl font-bold mb-1">Login Required</h2>
          <p className="text-sm">
            There was a problem with your login. Please login again to continue.
          </p>
        </div>
      </div>
    );
  }

  // If token exists → show dashboard
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-10 rounded-2xl shadow-2xl text-center">

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Welcome to your Dashboard 👋
        </h1>

        <div className="inline-block px-4 py-1 rounded-full bg-green-600/80 text-white text-sm font-medium mb-4">
          You are logged in successfully
        </div>

        <p className="text-gray-300 max-w-lg mx-auto">
          You now have access to protected routes and features of the application.
        </p>

        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400">
          Token-based authentication active ✔️
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
