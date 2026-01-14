import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <h2 className="text-xl font-semibold text-white tracking-wide">
          Shopify App
        </h2>

        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Shopify App — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
