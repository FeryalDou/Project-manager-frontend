import React, { useState, useEffect } from "react";
import projectManagerApi from "../service/myApi.js";
//import ProjectCard from "../components/ProjectCard.jsx";

function ProjectManagerPage() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectManagerApi.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project Manager Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {/* {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))} */}
      </div>
    </div>
  );
}

export default ProjectManagerPage;
