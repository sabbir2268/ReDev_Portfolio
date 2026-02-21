import { useContext } from "react";

import { ProjectsContext } from "../context/ProjectsContext";
import ProjectCard from "../components/projects/ProjectCard";

const AllProjects = () => {
  const { projects, projectsLoading } = useContext(ProjectsContext);

  if (projectsLoading)
    return <p className="text-center mt-10">authLoading projects...</p>;
  if (!projects || projects.length === 0)
    return <p className="text-center mt-10">No projects available</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-30">
      <h2 className="text-3xl font-bold mb-6">All My Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
