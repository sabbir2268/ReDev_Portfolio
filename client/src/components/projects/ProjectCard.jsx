import React from "react";

const ProjectCard = ({ project }) => {
  const openLink = (url) => {
    if (url) window.open(url, "_blank");
  };

  // Normalize technologies
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : project.technologies?.split(",").map((t) => t.trim()) || [];

  // Normalize categories
  const categories = Array.isArray(project.categories)
    ? project.categories
    : project.categories?.split(",").map((c) => c.trim()) || [];

  return (
    <div className="h-full">
      <div className="card flex flex-col h-full p-6 border rounded-lg shadow hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-4">{project.description}</p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full"
              >
                Type: {cat}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-auto flex gap-4">
          {project.github && (
            <button
              onClick={() => openLink(project.github)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition btn btn-sm"
            >
              GitHub
            </button>
          )}

          {project.live && (
            <button
              onClick={() => openLink(project.live)}
              className="px-4 py-1 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition btn btn-sm"
            >
              Live Link
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
