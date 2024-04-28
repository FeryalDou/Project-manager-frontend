import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectManagerApi from "../service/myApi.js";

function TaskDetailsPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await projectManagerApi.get(`/tasks/${taskId}`);
        setTask(response.data);
        setEditedTask(response.data);
      } catch (error) {
        console.error("Error fetching task details", error);
      }
    };
    fetchTaskDetails();
  }, [taskId]);

  const handleUpdateTask = async () => {
    try {
      await projectManagerApi.put(`/tasks/${taskId}`, editedTask);
      setTask(editedTask);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleStatusChange = async (newStatus) => {
    try {
      const updatedTask = { ...editedTask, status: newStatus };
      await projectManagerApi.put(`/tasks/${taskId}`, updatedTask);
      setTask(updatedTask);
    } catch (error) {
      console.error("Error updating task status", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      await projectManagerApi.delete(`/tasks/${taskId}`);
      navigate("/tasks");
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  if (!task) {
    return <div className="bg-white text-center mt-8">Loading...</div>;
  }

  return (
    <div className="bg-white container mx-auto px-4 py-8 border border-gray-300 rounded-lg max-w-lg my-8">
      <h1 className="text-3xl font-bold mb-4">
        {isEditing ? (
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        ) : (
          task.title
        )}
      </h1>
      <p className="text-gray-700 mb-4">
        {isEditing ? (
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        ) : (
          task.description
        )}
      </p>
      <div className="flex justify-between items-center">
        <div>
          {["To Do", "In Progress", "Done"].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`mr-2 ${
                task.status === status
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } py-1 px-3 rounded focus:outline-none`}
            >
              {status}
            </button>
          ))}
        </div>
        <div>
          {isEditing ? (
            <>
              <button
                onClick={handleUpdateTask}
                className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            >
              Edit
            </button>
          )}
          <button
            onClick={handleDeleteTask}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
