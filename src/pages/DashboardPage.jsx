import React, { useState, useEffect } from "react";
import projectManagerApi from "../service/myApi";
import TaskList from "../components/task/TaskList";
import ProjectCard from "../components/project/ProjectCard";

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // user tasks
        const tasksResponse = await projectManagerApi.get("/tasks");
        setTasks(tasksResponse.data);

        // user project
        const projectsResponse = await projectManagerApi.get("/projects");
        setProjects(projectsResponse.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Tasks</h2>
        <TaskList tasks={tasks} />
      </div>
      <div>
        <h2>Projects</h2>
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
