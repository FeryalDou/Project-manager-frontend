import React from "react";

const ProjectCard = ({ project }) => {
  if (!project) {
    return <p>Loading</p>;
  }
  return (
    <div className="border p-4">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
      <p>Tasks: {project.tasks.length}</p>
    </div>
  );
};

export default ProjectCard;
