import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import ProjectCard from "../components/projects/ProjectCard";
import { Helmet } from "react-helmet-async";

const AllProjects = () => {
  const { projects, projectsLoading } = useContext(ProjectsContext);

  if (projectsLoading)
    return <p className="text-center mt-10">Loading projects...</p>;
  if (!projects || projects.length === 0)
    return <p className="text-center mt-10">No projects available</p>;

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    const category = project.categories || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-6 py-30">
      <Helmet>
        <title>Projects | Sabbir</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-6 text-center">All My Projects</h2>

      {Object.keys(projectsByCategory).map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsByCategory[category].map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
