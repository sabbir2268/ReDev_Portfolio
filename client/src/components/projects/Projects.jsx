import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { projects, projectsLoading } = useContext(ProjectsContext);
  const navigate = useNavigate();

  const handleMoreProjects = () => {
    navigate("/allProjects");
  };

  if (projectsLoading)
    return <p className="text-center mt-10">authLoading projects...</p>;
  if (!projects || projects.length === 0)
    return <p className="text-center mt-10">No projects available</p>;

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
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard project={project} key={index}></ProjectCard>
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            onClick={handleMoreProjects}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
          >
            More Projects
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
