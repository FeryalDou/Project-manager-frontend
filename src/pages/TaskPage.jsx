import React, { useState, useEffect } from "react";
import projectManagerApi from "../service/myApi.js";
import TaskForm from "../components/task/TaskForm.jsx";
import TaskList from "../components/task/TaskList.jsx";
import TaskStatusIcon from "../components/task/TaskStatusIcon.jsx";

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

  const handleUpdateTask = async (taskId, formData) => {
    try {
      await projectManagerApi.put(`/tasks/${taskId}`, formData);
      const response = await projectManagerApi.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error updating task", error);
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
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full">
            {tasks.length === 0 ? (
              <p className="text-gray-600">No tasks available.</p>
            ) : (
              <div className="flex justify-center">
                <TaskList
                  tasks={tasks}
                  onUpdateTask={handleUpdateTask}
                  onDeleteTask={handleDeleteTask}
                />
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <TaskForm onAddTask={handleAddTask} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
