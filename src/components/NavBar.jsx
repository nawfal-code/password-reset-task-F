import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const NavBar = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();          // clears context + localStorage
    navigate("/login");
  };

  const isLoggedIn = Boolean(token);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Shopify App
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-200 font-medium">

            <li>
              <Link className="hover:text-white" to="/">
                Home
              </Link>
            </li>

            {!isLoggedIn && (
              <>
                <li>
                  <Link className="hover:text-white" to="/register">
                    Register
                  </Link>
                </li>

                <li>
                  <Link className="hover:text-white" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-4 py-1 rounded-lg hover:bg-red-700"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 text-gray-200 font-medium">

            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>

            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/register" onClick={() => setOpen(false)}>
                    Register
                  </Link>
                </li>

                <li>
                  <Link to="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <li>
                <button
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                  className="bg-red-600 px-4 py-1 rounded-lg"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
