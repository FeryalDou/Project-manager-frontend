// TaskPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectManagerApi from "../service/myApi.js";
import TaskForm from "../components/task/TaskForm.jsx";
import Task from "../components/task/Task.jsx";

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await projectManagerApi.get("/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (formData) => {
    try {
      await projectManagerApi.post("/tasks", formData);
      const response = await projectManagerApi.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await projectManagerApi.delete(`/tasks/${taskId}`);
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Tasks</h1>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 pr-4">
          <TaskForm onAddTask={handleAddTask} />
        </div>
        <div className="w-full md:w-1/2 pl-4">
          {tasks.length === 0 ? (
            <p className="text-gray-600">No tasks available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tasks.map((task) => (
                <Link to={`/TaskDetailPage/${task._id}`} key={task._id}>
                  <Task task={task} onDeleteTask={handleDeleteTask} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
