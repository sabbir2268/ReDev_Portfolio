import { useContext } from "react";
import { ProjectsContext } from "../../../context/ProjectsContext";
import { Link } from "react-router-dom";

const DashHome = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[var(--text-main)]">
          Dashboard
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-5">
          <p className="text-muted text-sm">Total Projects</p>
          <h2 className="text-3xl font-bold mt-2">{projects.length}</h2>
          <p className="text-accent-soft text-sm mt-1">Live & draft projects</p>
        </div>

        <div className="card p-5">
          <p className="text-muted text-sm">Messages</p>
          <h2 className="text-3xl font-bold mt-2">23</h2>
          <p className="text-accent-soft text-sm mt-1">
            Contact form inquiries
          </p>
        </div>

        <div className="card p-5">
          <p className="text-muted text-sm">Profile Views</p>
          <h2 className="text-3xl font-bold mt-2">1.2k</h2>
          <p className="text-accent-soft text-sm mt-1">Last 30 days</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card p-6">
        <h2 className="section-title">Quick Actions</h2>

        <div className="flex flex-wrap gap-4 mt-4">
          <Link to={"dashboard/addProjects"} className="btn-primary">
            + Add Project
          </Link>
          <Link to={"dashboard/manageProjects"} className="btn-primary">
            Manage Projects
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card p-6">
        <h2 className="section-title">Recent Activity</h2>

        <ul className="mt-4 space-y-3 text-sm">
          <li className="text-muted">
            • New message received from contact form
          </li>
          <li className="text-muted">• Project “Portfolio Website” updated</li>
          <li className="text-muted">
            • Blog “React Performance Tips” published
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashHome;
