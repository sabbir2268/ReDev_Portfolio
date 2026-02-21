import React, { useContext } from "react";
import { ProjectsContext } from "../../../context/ProjectsContext";

const ManageProjects = () => {
  const { projects, setProjects } = useContext(ProjectsContext);

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

  // Update Project
  const handleUpdate = (project) => {
    alert(`Edit project: ${project.name} (implement your update form here)`);
  };

  if (!projects || projects.length === 0) {
    return <p className="text-center mt-10">No projects available</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8">
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
                    onClick={() => handleUpdate(project)}
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
                onClick={() => handleUpdate(project)}
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
  );
};

export default ManageProjects;
