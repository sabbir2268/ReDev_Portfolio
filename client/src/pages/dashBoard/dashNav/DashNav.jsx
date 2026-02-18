import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const DashNav = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const navLinks = [
    { path: "dashboard/addProjects", label: "Add Projects" },
    { path: "dashboard/addBlogs", label: "Add Blogs" },
    { path: "dashboard/messages", label: "Read Messages" },
  ];

  return (
    <aside className="w-64 min-h-screen px-5 py-6 border-r border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col">
      {/* Brand / Header */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-[var(--text-main)]">
          Dashboard
        </h2>
        <p className="text-sm text-muted mt-1">ReDev Admin Panel</p>
      </div>

      {/* Back Home */}
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-main)] hover:text-[var(--color-primary-strong)] transition"
      >
        ← Back to Home
      </Link>

      {/* Navigation */}
      <nav className="flex-1">
        <p className="text-xs uppercase tracking-wide text-muted mb-3">
          Manage Content
        </p>

        <ul className="space-y-1">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative block w-full rounded-xl px-4 py-2.5 text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-cyan-100 text-[var(--color-primary-strong)] font-semibold shadow-sm"
                      : "text-[var(--text-main)] hover:bg-cyan-50 hover:text-[var(--color-primary-strong)]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <button
          onClick={handleLogOut}
          className="mt-10 btn btn-outline btn-error w-full"
        >
          Logout
        </button>
      </nav>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-[var(--border-color)] text-xs text-muted text-center">
        © {new Date().getFullYear()} ReDev. All rights reserved.
      </div>
    </aside>
  );
};

export default DashNav;
