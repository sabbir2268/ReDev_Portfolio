import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/yourusername",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
      label: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@yourusername",
      label: "YouTube",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "How I Build", path: "/howibuild" },
    { name: "Hire Me", path: "/hireMe" },
  ];

  return (
    <footer className="border-t border-[#1F2933] bg-[#020617]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-8 py-14 grid gap-10 md:grid-cols-2"
      >
        {/* LEFT: Brand Card */}
        <div className="p-6 rounded-2xl border border-[#1F2933] bg-[#0B1120] flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-200">
              Re.<span className="text-cyan-400">Dev</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Consistency is the key to mastering web development.
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-6 mt-6 border-t border-[#1F2933] flex items-center gap-4 text-xl text-gray-300">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="hover:text-cyan-400 transition social-icon"
              >
                {link.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="ml-auto p-2 rounded-full border border-[#1F2933]
          hover:border-cyan-400 hover:text-cyan-400 transition"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* RIGHT: Quick Links Card */}
        <div className="p-6 rounded-2xl border border-[#1F2933] bg-[#0B1120] flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-gray-200 mb-6">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-4 text-gray-400 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-cyan-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1F2933] py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Re.Dev — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
