import React, { useState, useEffect } from "react";
import TaskStatusIcon from "./TaskStatusIcon";
import projectManagerApi from "../../service/myApi";

function TaskForm({ task }) {
  const [allProject, setAllProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "todo",
    project: "",
    startDate: "",
    endDate: "",
  });

  async function fetchAllProjects() {
    try {
      const response = await projectManagerApi.get("/projects");
      setAllProject(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await projectManagerApi.post("/tasks", formData);
      setFormData({
        name: "",
        description: "",
        status: "todo",
        project: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      console.error("Failed to submit task form", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-10 mb-2"
    >
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700 mr-2"
        >
          Status:
        </label>
        <select
          id="status"
          name="status"
          value={formData.status || "todo"}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mr-2"
        >
          <option value="todo">To Do</option>
          <option value="in progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <TaskStatusIcon status={formData.status || "todo"} />
      </div>
      <div>
        <label
          htmlFor="project"
          className="block text-sm font-medium text-gray-700"
        >
          Project:
        </label>
        <select
          id="project"
          name="project"
          value={formData.project || ""}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
          {allProject &&
            allProject.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date:
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="endDate"
          className="block text-sm font-medium text-gray-700"
        >
          End Date:
        </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}

export default TaskForm;
