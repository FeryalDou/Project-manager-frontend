import { Link } from "react-router-dom";
import useAuth from "./../context/useAuth";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  console.log(isLoggedIn);
  return (
    <nav className="bg-blue-200">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        <h1>Prime Project</h1>

        <ul className="flex">
          {/* <li className="mx-2">
          <Link to="/">Dashboard</Link>
        </li> */}
          {/* <li className="mx-2">
          <Link to="/projectPage">Projects</Link>{" "}
        </li> */}
          {isLoggedIn ? (
            <>
              <li className="mx-2">
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="mx-2">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="mx-2">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
