import React from "react";

const ProjectCard = ({ project }) => {
  const openLink = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="h-full">
      <div className="card flex flex-col h-full p-6 border rounded-lg shadow hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

        {/* Description with consistent height and ellipsis */}
        <p className="text-gray-600 mb-4 line-clamp-4">{project.description}</p>

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.split(",").map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-4">
          {project.github && (
            <button
              onClick={() => openLink(project.github)}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              GitHub
            </button>
          )}
          {project.live && (
            <button
              onClick={() => openLink(project.live)}
              className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
            >
              Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
