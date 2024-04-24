import React from "react";
import TaskStatusIcon from "./TaskStatusIcon";
const Task = ({ task }) => {
  if (!task) {
    return null;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <p className="italic bg-green-50 text-sm mt-2 text-gray-600">
        {task.name}
      </p>
      <p className="text-sm mt-2 text-gray-600">{task.description}</p>
      <p className="text-sm mt-2 text-gray-600">
        {new Intl.DateTimeFormat(undefined, {
          dateStyle: "long",
        }).format(new Date(task.startDate || "2024/05/13"))}
      </p>
      <TaskStatusIcon status={task.status} />
    </div>
  );
};

export default Task;
