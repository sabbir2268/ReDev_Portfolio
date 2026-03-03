import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../../context/ProjectsContext";

const ManageProjects = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  const [updateDataForm, setUpdateDataForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    technologies: "",
    categories: "",
    github: "",
    live: "",
  });

  // Delete Project
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;

    try {
      const res = await fetch(`http://localhost:3000/projects/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProjects(projects.filter((project) => project._id !== id));
        alert("Project deleted successfully!");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete project");
    }
  };

const openUpdateForm = (project) => {
  setSelectedProject(project);

  setFormData({
    name: project.name || "",
    description: project.description || "",
    technologies: Array.isArray(project.technologies)
      ? project.technologies.join(", ")
      : project.technologies || "",
    categories: Array.isArray(project.categories)
      ? project.categories.join(", ")
      : project.categories || "",
    github: project.github || "",
    live: project.live || "",
  });

  setUpdateDataForm(true);
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  // Update Project
const handleUpdateSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      `http://localhost:3000/projects/${selectedProject._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          technologies: formData.technologies.split(",").map(t => t.trim()),
          categories: formData.categories.split(",").map(c => c.trim()),
        }),
      }
    );

    if (res.ok) {
      const updatedProject = {
        ...selectedProject,
        ...formData,
        technologies: formData.technologies.split(","),
        categories: formData.categories.split(","),
      };

      setProjects((prev) =>
        prev.map((p) =>
          p._id === selectedProject._id ? updatedProject : p
        )
      );

      alert("Project updated successfully!");
      setUpdateDataForm(false);
    }
  } catch (err) {
    console.error(err);
  }
};

  if (!projects || projects.length === 0) {
    return <p className="text-center mt-10">No projects available</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8">
      <div className={`max-w-5xl mx-auto p-4 sm:p-8 transition-all duration-300 ${
          updateDataForm ? "blur-sm pointer-events-none select-none" : "" }`}>
      <h2 className="text-2xl font-semibold mb-6">Manage Projects</h2>
      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left">#</th>
              <th className="px-4 py-2 border-b text-left">Project Name</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{project.name}</td>
                <td className="px-4 py-2 border-b flex gap-2 justify-center">
                  <button
                    onClick={() => openUpdateForm(project)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for small screens */}
      <div className="md:hidden flex flex-col gap-4">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">
                {index + 1}. {project.name}
              </span>
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => openUpdateForm(project)}
                className="flex-1 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      {updateDataForm && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md animate-fadeIn"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              Update Project
            </h3>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Project Name"
              className="w-full mb-3 p-2 border rounded"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="Technologies (comma separated)"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              placeholder="Categories (comma separated)"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="GitHub Link"
              className="w-full mb-3 p-2 border rounded"
            />

            <input
              type="text"
              name="live"
              value={formData.live}
              onChange={handleChange}
              placeholder="Live Link"
              className="w-full mb-3 p-2 border rounded"
            />

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setUpdateDataForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageProjects;
