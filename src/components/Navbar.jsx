import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useAuth from "./../context/useAuth";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-green-800 to-white-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray">Prime Project</h1>
          {/* <img src={logo} alt="Logo" className="w-16 h-18 mr-3" /> */}
        </div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              to="/dashboard"
              className="text-grey hover:text-gray-400 font-semibold transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-grey hover:text-gray-400 font-semibold transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/tasks"
              className="text-grey hover:text-gray-400 font-semibold transition duration-300"
            >
              Tasks
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <button
                onClick={logout}
                className="text-grey hover:text-gray-400 font-semibold transition duration-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
