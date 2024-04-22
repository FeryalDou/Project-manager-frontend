import React from "react";
import ProjectCard from "../components/project/ProjectCard";
import TaskList from "../components/task/TaskList";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <ProjectCard />
        <TaskList />
      </div>
    </div>
  );
};

export default DashboardPage;
