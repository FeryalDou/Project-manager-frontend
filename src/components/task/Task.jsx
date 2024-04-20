import React from "react";

const Task = ({ task }) => {
  if (!task) {
    return null;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};

export default Task;