import React, { useState } from "react";
import { API_URL } from "../api";
const AddProjects = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    technologies: "",
    categories: "Landing-page", // default selected
    github: "",
    live: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Server response:", data);
      alert("Project Added Successfully 🚀");
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({
      name: "",
      description: "",
      technologies: "",
      categories: "Landing-page",
      github: "",
      live: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Project Name */}
        <div>
          <label className="block mb-2 font-medium">Project Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter project name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter project description"
          />
        </div>

        {/* Technologies */}
        <div>
          <label className="block mb-2 font-medium">Tools / Technologies</label>
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Example: React, Node.js, MongoDB"
          />
        </div>

        {/* Categories Dropdown */}
        <div>
          <label className="block mb-2 font-medium">Category</label>
          <select
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option value="Landing-page">Landing Page</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Full-Stack">Full Stack</option>
          </select>
        </div>

        {/* GitHub Link */}
        <div>
          <label className="block mb-2 font-medium">GitHub Link</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="https://github.com/your-repo"
          />
        </div>

        {/* Live Link */}
        <div>
          <label className="block mb-2 font-medium">Live Link</label>
          <input
            type="url"
            name="live"
            value={formData.live}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="https://your-live-site.com"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjects;
