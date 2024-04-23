import React, { useState, useEffect } from "react";
import projectManagerApi from "../service/myApi";
import TaskList from "../components/task/TaskList";
import ProjectCard from "../components/project/ProjectCard";
//import Calendar from "../components/Calendar";

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const tasksResponse = await projectManagerApi.get("/tasks");
        setTasks(tasksResponse.data);

        const projectsResponse = await projectManagerApi.get("/projects");
        setProjects(projectsResponse.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'utilisateur",
          error
        );
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div>
        <div>{/* <Calendar /> */}</div>
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border border-gray-300 rounded-lg p-4"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <div className="w-full max-w-screen-lg mt-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Tasks</h2>
            <div className="border border-gray-300 rounded-lg p-4">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
