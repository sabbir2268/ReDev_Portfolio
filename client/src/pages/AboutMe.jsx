import { motion } from "framer-motion";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Card = ({ children }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="card p-8 mt-10"
  >
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-30">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-accent">Me</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Know who I am, what I’ve learned, what I’ve achieved, the mistakes
          I’ve made, and where I’m heading next.
        </p>
      </motion.div>

      {/* Grid */}

      {/* Current Profession */}
      <Card>
        <h2 className="section-title">Current Profession</h2>
        <p className="text-muted">
          Hello! I’m <span className="text-strong">Md Sabbir Rahman</span>, a{" "}
          <span className="text-accent">Software Engineering student</span> at{" "}
          <span className="text-accent">Daffodil International University</span>
          .
        </p>
        <p className="text-muted mt-3">
          Currently in my{" "}
          <span className="text-accent">3rd year (7th semester)</span> with a{" "}
          <span className="text-accent">CGPA of 3.36</span>, having completed
          all coursework to date.
        </p>
        <p className="text-muted mt-3">
          Alongside academics, I work as a{" "}
          <span className="text-strong">full-stack developer</span>, building
          scalable and performance-focused web applications.
        </p>
        <p className="text-muted mt-3">
          My core stack includes{" "}
          <span className="text-accent">
            React, Next.js, Node.js, Express, MongoDB
          </span>{" "}
          and <span className="text-accent">Tailwind CSS</span>.
        </p>
      </Card>

      {/* Experience */}
      <Card>
        <h2 className="section-title">Experience</h2>

        <p className="text-muted">
          With over{" "}
          <span className="text-strong">three years of experience</span> in web
          development, I have primarily focused on crafting{" "}
          <span className="text-strong">
            modern, maintainable frontend applications
          </span>{" "}
          and <span className="text-strong">robust UI architectures</span>.
        </p>

        <p className="text-muted mt-3">
          Over the last <span className="text-strong">six months</span>, I have
          strengthened my <span className="text-strong">backend expertise</span>
          , working extensively with{" "}
          <span className="text-strong">
            APIs, authentication flows, databases, and integrated systems
          </span>
          .
        </p>

        {/* CTA */}
        <div className="mt-6">
          <Link to="/allProjects" className="btn-primary">
            My Projects
          </Link>
        </div>
      </Card>

      {/* Achievements */}
      <Card>
        <h2 className="section-title">Achievements</h2>

        <ul className="space-y-2 text-muted">
          {/* Frontend & UI */}
          <li>
            <span className="text-strong">Frontend & UI:</span> Built
            responsive, mobile-first interfaces; created reusable components;
            optimized performance & UX
          </li>

          {/* Backend & Data */}
          <li>
            <span className="text-strong">Backend & Data:</span> Developed
            backend services with{" "}
            <span className="text-accent">Node.JS & Express</span>; managed
            <span className="text-accent"> MongoDB</span> schemas; built secure
            APIs with authentication & CRUD
          </li>

          {/* Learning & Growth */}
          <li>
            <span className="text-strong">Learning & Growth:</span> Completed{" "}
            <span className="text-accent">
              Programming Hero 11th Batch Full-Stack Development Course
            </span>{" "}
            and applied it in real projects
          </li>
        </ul>
      </Card>

      {/* Failures */}
      <Card>
        <h2 className="section-title">Failures & Lessons</h2>

        <ul className="space-y-2 text-muted">
          <li>
            <span className="text-accent">Java:</span> Could not complete larger
            projects, though I learned OOD, OOP, and Java fundamentals
          </li>
          <li>
            <span className="text-accent">C Programming:</span> Learned from
            basic to intermediate, built small projects, but could not continue
            to larger applications
          </li>
          <li>
            <span className="text-accent">Content Creation:</span> Started
            video/content creation but could not continue consistently
          </li>
          <li>
            <span className="text-accent">Bangladesh Army:</span> Did not secure
            a commission (red card in ISSB)
          </li>
          <li>
            <span className="text-accent">Public University Admission:</span>{" "}
            Missed the merit list
          </li>
        </ul>

        <p className="text-muted mt-3">
          These experiences taught me{" "}
          <span className="text-strong">
            resilience, patience, and strategic planning
          </span>
          . They reinforced the importance of{" "}
          <span className="text-strong">
            consistent effort, focusing on strengths, and finishing what I start
          </span>
          . Today, these lessons guide my software development journey with{" "}
          <span className="text-strong">
            discipline, clarity, and determination
          </span>
          .
        </p>
      </Card>

      {/* Future Plans */}
      <Card>
        <h2 className="section-title">Future Plans</h2>

        <ul className="space-y-2 text-muted">
          <li>
            Become a confident{" "}
            <span className="text-accent">full-stack developer</span> and
            complete my graduation with a focus on{" "}
            <span className="text-accent">Data Science</span>
          </li>
          <li>
            Launch my own <span className="text-accent">software company</span>{" "}
            to create impactful products
          </li>
          <li>
            Establish myself as one of the{" "}
            <span className="text-accent">
              top software engineers in Bangladesh
            </span>
          </li>
          <li>
            Progress to becoming one of the{" "}
            <span className="text-accent">
              top 10 software engineers globally
            </span>
          </li>
        </ul>

        <p className="text-muted mt-3">
          My journey is guided by{" "}
          <span className="text-accent">
            continuous learning, discipline, and ambition
          </span>
          . Each step builds the foundation for achieving{" "}
          <span className="text-accent">national and global excellence</span> in
          software engineering.
        </p>
      </Card>
    </section>
  );
};

export default About;
