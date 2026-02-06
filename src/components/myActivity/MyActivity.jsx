import {
  FaGithub,
  FaLinkedin,
  FaDev,
  FaCode,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "GitHub",
    description: "Open-source & Projects",
    highlight: "40+ repositories • 5+ Full-stack apps ",
    icon: <FaGithub size={26} />,
    link: "https://github.com/sabbir2268",
  },
  {
    name: "LinkedIn",
    description: "Professional Presence",
    highlight: "Tech posts • Recruiter ready",
    icon: <FaLinkedin size={26} />,
    link: "https://linkedin.com/in/mdsabbir2268",
  },
  {
    name: "LeetCode",
    description: "Problem Solving",
    highlight: "300+ problems • DSA practice",
    icon: <FaCode size={26} />,
    link: "https://leetcode.com/u/Sabbir68/",
  },
  {
    name: "FaceBook",
    description: "Social Media",
    highlight: "Engage with developers • Share insights",
    icon: <FaFacebook size={26} />,
    link: "https://facebook.com/sabbir2268",
  },
];

const MyActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-semibold mb-3">
            Where I’m <span className="text-cyan-400">Active</span>
          </h2>
          <p className="text-muted leading-relaxed">
            I consistently build, learn, and share across multiple platforms.
            These profiles reflect my hands-on work and growth as a full-stack
            developer.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="card p-6 flex flex-col gap-4 hover:-translate-y-1 transition"
            >
              {/* Icon */}
              <div className="text-cyan-500">{profile.icon}</div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{profile.name}</h3>
                <p className="text-sm text-muted mb-2">{profile.description}</p>
                <p className="text-xs text-muted">{profile.highlight}</p>
              </div>

              {/* External indicator */}
              <span className="mt-auto text-sm font-medium text-cyan-500">
                Visit profile ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default MyActivity;
