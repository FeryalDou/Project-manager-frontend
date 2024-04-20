import React, { useState, useEffect } from "react";
import projectManagerApi from "../service/myApi.js";
import TaskForm from "../components/task/TaskForm.jsx";
import TaskList from "../components/task/TaskList.jsx";

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
      // Refresh the task list after adding
      const response = await projectManagerApi.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  const handleUpdateTask = async (taskId, formData) => {
    try {
      await projectManagerApi.put(`/tasks/${taskId}`, formData);
      // Refresh the task list after updating
      const response = await projectManagerApi.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await projectManagerApi.delete(`/tasks/${taskId}`);
      // Refresh the task list after deletion
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tasks</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="mt-8">
        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks available.</p>
        ) : (
          <TaskList
            tasks={tasks}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default TaskPage;
