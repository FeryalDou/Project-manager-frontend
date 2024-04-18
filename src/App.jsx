import { Routes, Route } from "react-router-dom";

/* Pages */
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProjectManagerPage from "./pages/ProjectManagerPage.jsx";
//import DashboardPage from "./pages/DashboardPage.jsx";

/*Re-Routing */

/* Components */
import Navbar from "./components/Navbar.jsx";
import React, { useState } from "react";
import useAuth from "./context/useAuth";

//export const SimpleContext = createContext();

function App() {
  const [state, setState] = useState("Some data right there!");
  const add = (a, b) => a + b;
  const { user } = useAuth();

  return (
    <>
      {/* <SimpleContext.Provider
        value={{
          data: "",
          state,
          setState,
          add,
          someClass: "",
        }}
      > */}
      {/* Place your components that need access to the SimpleContext here */}
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        <Route path="/projectManager" element={<ProjectManagerPage />} />
      </Routes>
      {/* </SimpleContext.Provider> */}
    </>
  );
}

export default App;
