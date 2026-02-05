import React from "react";
import profilePhoto from "../../assets/images/rehan-suit-croped.jpg";
import { Link } from "react-router";
import { motion } from "framer-motion";
const About = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Git",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-30 md:py-36">
        <div className="md:flex md:items-center md:gap-16">
          {/* Photo */}
          <div className="flex justify-center md:justify-start mb-10 md:mb-0">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="profilePhoto"
                className="w-72 h-80 object-cover rounded-2xl border border-gray-200 shadow-xl transition-transform duration-300 hover:scale-105"
              />
              {/* subtle glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-cyan-400/20" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-800">
              Hi, I’m <span className="text-cyan-500">Rehan</span>
            </h2>

            <p className="mt-3 text-xl text-gray-700 font-medium">
              Software Engineer & Full-Stack Developer
            </p>
            <p className="mt-1 text-sm text-gray-700 ">From Bangladesh</p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I build clean, scalable, and user-focused web applications using
              modern technologies. I enjoy turning complex problems into simple,
              maintainable solutions with strong attention to performance and
              code quality.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              My focus is on writing readable code, building reliable systems,
              and continuously improving through real-world projects.
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap">
              {skills.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center justify-center mr-2 mb-2 px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                to={"/Cv.pdf"}
                target="blank"
                className="px-6 py-2 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition"
              >
                Download CV
              </Link>

              <Link
                to={"/about"}
                className="px-6 py-2 rounded-full bg-cyan-50 text-cyan-600 font-medium  border border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
