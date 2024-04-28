import React from "react";

const ProjectCard = ({ project }) => {
  if (!project) {
    return <p>Loading</p>;
  }
  const tasksCount = project.tasks ? project.tasks.length : 0;
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold italic">{project.name}</h2>
      <p className="text-sm mt-2">{project.description}</p>
      <p className="text-sm mt-1 ">
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "long",
        }).format(new Date(project.startDate || "2024/05/13"))}
      </p>
      <p className="text-sm mt-1">
        End Date:{" "}
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "long",
        }).format(new Date(project.startDate || "2024/05/13"))}
      </p>
      <p className="text-sm mt-0">Tasks: {tasksCount}</p>
    </div>
  );
};

export default ProjectCard;
