import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
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

  if (!projects) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link to={`/ProjectDetailPage/${project._id}`} key={project._id}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
        <div className="mt-8 flex-row m-10 p-10">
          <ProjectForm />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
