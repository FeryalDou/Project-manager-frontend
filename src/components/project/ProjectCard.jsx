import React from "react";

const ProjectCard = ({ project }) => {
  if (!project) {
    return <p>Loading</p>;
  }
  const tasksCount = project.tasks ? project.tasks.length : 0;
  return (
    <div className="border p-4">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
      <p>Tasks: {tasksCount}</p>
    </div>
  );
};

export default ProjectCard;
