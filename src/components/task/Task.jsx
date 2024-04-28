import React, { useState } from "react";
import TaskStatusIcon from "./TaskStatusIcon";

const Task = ({ task, onUpdateTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mt-2"
          />
          <button
            onClick={handleUpdate}
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3 className="font-semibold">{task.title}</h3>
          <p className="text-gray-600 mt-2">{task.description}</p>
          <p className="text-sm mt-1 ">
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "long",
            }).format(new Date(task.startDate || "2024/05/13"))}
          </p>
          <TaskStatusIcon status={task.status} />
          <div className="mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteTask(task._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
