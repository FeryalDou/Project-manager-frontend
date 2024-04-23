import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectManagerApi from "../service/myApi.js";

function ProjectDetailsPage() {
  const { projectId } = useParams();
  //console.log("projectId:", projectId);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await projectManagerApi.get(`/projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project details", error);
      }
    };
    fetchProjectDetails();
  }, [projectId]);

  if (!projectId) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return project ? (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex justify-between"></div>
      <div>
        <h2 className="text-2xl font-bold my-4">Tasks</h2>
        <ul>
          {project.tasks &&
            project.tasks.map((task) => (
              <li key={task._id}>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.endDate}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
