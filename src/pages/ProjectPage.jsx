import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectManagerApi from "../service/myApi.js";
import ProjectCard from "../components/project/ProjectCard.jsx";
import ProjectForm from "../components/project/ProjectForm.jsx";

function ProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectManagerApi.get("/projects");
        console.log("Projects response:", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchProjects();
  }, []);
  console.log("Projects state:", projects);

  const handleFormSubmit = async (formData) => {
    try {
      await projectManagerApi.post("/projects", formData);
      const response = await projectManagerApi.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error adding project", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <ProjectForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default ProjectPage;
