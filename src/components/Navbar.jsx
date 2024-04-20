import { Link } from "react-router-dom";
import useAuth from "./../context/useAuth";
import logo from "../assets/logo2.png"; // Importez votre logo ici

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-grey-400 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
          <h1 className="text-xl font-bold text-gray-800">Prime Project</h1>
        </div>
        <ul className="flex items-center">
          {isLoggedIn ? (
            <>
              <li className="mx-2">
                <button
                  onClick={logout}
                  className="bg-beige-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-beige-400 transition duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="mx-2">
                <Link
                  to="/signup"
                  className="text-gray-800 hover:text-gray-900 font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Signup
                </Link>
              </li>
              <li className="mx-2">
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-gray-900 font-semibold py-2 px-4 rounded transition duration-300"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
