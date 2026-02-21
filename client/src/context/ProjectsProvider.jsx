import React, { useEffect, useState } from "react";
import { ProjectsContext } from "./ProjectsContext";

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setProjectsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProjectsLoading(false);
      });
  }, []);

  const projectsInfo = {
    projects,
    setProjects,
    projectsLoading,
  };

  return (
    <ProjectsContext.Provider value={projectsInfo}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
