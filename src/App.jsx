import { Routes, Route } from "react-router-dom";
import React, { createContext } from "react";

/* Pages */
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import TaskDetailsPage from "./pages/TaskDetailPage.jsx";

/*Re-Routing */
import IsUser from "./components/routing/isUser.jsx";
/* Components */
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <div className="font-inter bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />{" "}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<IsUser />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route
              path="/ProjectDetailPage/:projectId"
              element={<ProjectDetailPage />}
            />
            <Route
              path="/TaskDetailPage/:taskId"
              element={<TaskDetailsPage />}
            />

            <Route path="/tasks" element={<TaskPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
