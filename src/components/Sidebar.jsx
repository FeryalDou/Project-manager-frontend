import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo2.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false); // Fonction pour fermer la barre latérale

  return (
    <div
      className={`fixed inset-y-0 left-0 ${
        isOpen ? "w-64" : "w-16"
      } transition-width duration-300 bg-beige-400 shadow-xl z-30`}
    >
      <button
        onClick={toggleSidebar}
        className={`absolute top-10 right-[-3px] w-8 h-8 mt-12 bg-beige-300 flex items-center justify-center rounded-tr-lg rounded-br-lg ${
          isOpen ? "" : "rotate-180"
        } transition-transform duration-300`}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <div className="h-full flex items-center justify-center">
        {isOpen && (
          <div>
            <h1 className="text-xl font-bold text-gray-800 p-5 text-center">
              Menu
            </h1>
            <ul className="space-y-2 text-lg">
              <li>
                <Link
                  to="/dashboard"
                  className="block py-3 px-5 text-center text-gray-800 hover:text-gray-900 transition duration-300"
                  onClick={closeSidebar} // Ajoutez onClick pour fermer la barre latérale lors du clic sur un lien
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block py-3 px-5 text-center text-gray-800 hover:text-gray-900 transition duration-300"
                  onClick={closeSidebar} // Ajoutez onClick pour fermer la barre latérale lors du clic sur un lien
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/tasks"
                  className="block py-3 px-5 text-center text-gray-800 hover:text-gray-900 transition duration-300"
                  onClick={closeSidebar}
                >
                  Tasks
                </Link>
              </li>
            </ul>
            <div className="flex-col  justify-center p-5">
              <img src={logo} alt="Logo" className="w-52 h-38 mr-2" />
              <p className="text-sm  text-gray-600">© 2024 Prime Project</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
