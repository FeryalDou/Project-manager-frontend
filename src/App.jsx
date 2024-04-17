import { Routes, Route } from "react-router-dom";

/* Pages */
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
//import DashboardPage from "./pages/DashboardPage.jsx";

/*Re-Routing */

/* Components */
import Navbar from "./components/Navbar.jsx";

import { createContext, useState } from "react";
import useAuth from "./context/useAuth";

export const SimpleContext = createContext();

function App() {
  const [state, setState] = useState("Some data right there!");
  const add = (a, b) => a + b;
  const { user } = useAuth();

  return (
    <>
      <SimpleContext.Provider
        value={{
          data: "toto",
          state,
          setState,
          add,
          someClass: "beautiful",
        }}
      >
        {/* Place your components that need access to the SimpleContext here */}
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Routes>
      </SimpleContext.Provider>
    </>
  );
}

export default App;
