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
        // Récupération des tâches de l'utilisateur
        const tasksResponse = await projectManagerApi.get("/tasks");
        setTasks(tasksResponse.data);

        // Récupération des projets de l'utilisateur
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
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Projets</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        <div className="w-full max-w-screen-lg">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Tâches</h2>
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
