import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-200  rounded-lg p-4 m-2	">
      <h3 className="italic text-2xl">{project.name}</h3>

      <p>{project.id}</p>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
