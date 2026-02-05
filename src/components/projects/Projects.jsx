import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A fully responsive portfolio website to showcase my projects and skills using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "/projects/portfolio",
  },
  {
    name: "E-Commerce App",
    description:
      "A complete e-commerce web app with user authentication, product management, and shopping cart functionality.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "/projects/ecommerce",
  },
  {
    name: "Chat Application",
    description:
      "Real-time chat application with rooms and private messaging using Socket.io and Node.js.",
    tech: ["React", "Node.js", "Socket.io", "Firebase"],
    link: "/projects/chat-app",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleMoreProjects = () => {
    navigate("/projects");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10">
          My <span className="text-cyan-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

              <p className="text-muted mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center justify-center px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button pushed to bottom */}
              <Link
                to={`${project.link}`}
                className="btn-primary inline-block mt-auto"
              >
                View Project
              </Link>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            onClick={handleMoreProjects}
            className="btn-primary btn-primary--strong"
          >
            More Projects
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
