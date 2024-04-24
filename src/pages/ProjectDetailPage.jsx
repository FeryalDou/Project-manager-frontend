import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectManagerApi from "../service/myApi.js";

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await projectManagerApi.get(`/projects/${projectId}`);
        setProject(response.data);
        setEditedProject(response.data);
      } catch (error) {
        console.error("Error fetching project details", error);
      }
    };
    fetchProjectDetails();
  }, [projectId]);

  const handleDeleteProject = async () => {
    try {
      await projectManagerApi.delete(`/projects/${projectId}`);
    } catch (error) {
      console.error("Error deleting project", error);
    }
  };

  const handleUpdateProject = async () => {
    try {
      await projectManagerApi.put(`/projects/${projectId}`, editedProject);
      setIsEditing(false);
      setProject(editedProject);
    } catch (error) {
      console.error("Error updating project", error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedProject(project);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  if (!projectId) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return project ? (
    <div className="container mx-auto px-4 py-8 border border-gray-300 rounded-lg max-w-lg mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedProject.name}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        ) : (
          project.name
        )}
      </h1>
      <p className="text-gray-700 mb-4">
        {isEditing ? (
          <textarea
            name="description"
            value={editedProject.description}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        ) : (
          project.description
        )}
      </p>
      <div className="flex justify-between">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdateProject}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDeleteProject}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold my-4">Tasks</h2>
        <ul>
          {project.tasks &&
            project.tasks.map((task) => (
              <li key={task._id}>
                <p>{task.title}</p>
                <p>{task.description}</p>
                <p>{task.endDate}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
