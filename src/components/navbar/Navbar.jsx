import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { FaUserShield, FaTachometerAlt } from "react-icons/fa"; // Admin icons
import { AuthContext } from "./../../context/AuthContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const handleAdminClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/loginAsAdmin");
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/allProjects" },
    { name: "Blogs", path: "/blogs" },
    { name: "How I Build", path: "/howIBuild" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <nav
        ref={menuRef}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50
      w-[calc(100%-2rem)] max-w-7xl
      rounded-xl bg-[#0B1120]/80 backdrop-blur-md
      border border-[#1F2933] shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold tracking-wide text-gray-200"
          >
            Re.<span className="text-cyan-400">Dev</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`relative font-medium transition
                  ${
                    isActive(link.path)
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </Link>
              </li>
            ))}

            {/* Hire Me Button */}
            <Link
              to="/hireMe"
              className="px-5 py-2 rounded-full bg-cyan-400 text-[#020617] font-medium hover:bg-cyan-300 transition"
            >
              Hire Me
            </Link>

            {/* Admin Login Icon */}
            <button
              onClick={handleAdminClick}
              title={user ? "Dashboard" : "Admin Login"}
              className="ml-3 text-gray-200 hover:text-cyan-400 text-2xl transition"
            >
              {user ? <FaTachometerAlt /> : <FaUserShield />}
            </button>

            {/* Dashboard text link for logged-in users */}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#111827] border-t border-[#1F2933] rounded-b-xl shadow-lg">
            <ul className="flex flex-col gap-4 p-6">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block font-medium transition
                    ${
                      isActive(link.path)
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <Link
                to="/hireMe"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block px-5 py-2 bg-cyan-400 text-[#020617] rounded-full text-center font-medium w-50 hover:bg-cyan-300 transition"
              >
                Hire Me
              </Link>

              {/* Admin Login / Dashboard button */}
              <button
                onClick={() => {
                  handleAdminClick();
                  setOpen(false);
                }}
                className="mt-4 flex items-center gap-2 text-gray-200 hover:text-cyan-400 text-lg transition"
              >
                {user ? (
                  <>
                    <FaTachometerAlt className="text-xl" />
                    <span>Dashboard</span>
                  </>
                ) : (
                  <>
                    <FaUserShield className="text-xl" />
                    <span>Admin Login</span>
                  </>
                )}
              </button>

              {/* Dashboard text link for mobile menu */}
            </ul>
          </div>
        )}
      </nav>
    </motion.div>
  );
};

export default Navbar;
