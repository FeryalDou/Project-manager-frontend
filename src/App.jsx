import { Routes, Route } from "react-router-dom";
import React, { createContext } from "react";

/* Pages */
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
// import DashboardPage from "./pages/DashboardPage.jsx";

/*Re-Routing */
import IsUser from "./components/routing/isUser.jsx";
/* Components */
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
//import useAuth from "./context/useAuth";
//import ProjectCard from "./components/ProjectCard.jsx";

//export const SimpleContext = createContext();

function App() {
  //   const [state, setState] = useState("Some data right there!");
  //   const add = (a, b) => a + b;
  //   const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        <Route path="/projects" element={<ProjectPage />} />
        {/* <Route path="/projectPage" element={<ProjectCard />} /> */}
        <Route path="/user/" element={<IsUser />} />
      </Routes>
      {/* </SimpleContext.Provider> */}
    </>
  );
}

export default App;
