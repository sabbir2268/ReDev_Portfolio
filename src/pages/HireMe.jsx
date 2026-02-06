import { FaCheckCircle, FaCode, FaServer, FaRocket } from "react-icons/fa";
import Contact from "../components/contact/Contact";
import { Link } from "react-router";

const HireMe = () => {
  const highlights = [
    { icon: <FaCode />, label: "Clean Code" },
    { icon: <FaServer />, label: "Scalable Backend" },
    { icon: <FaRocket />, label: "Production Ready" },
    { icon: <FaCheckCircle />, label: "Modern Stack" },
  ];

  const services = [
    {
      title: "Frontend Development",
      desc: "Responsive, accessible, and visually polished interfaces using modern frontend tools.",
    },
    {
      title: "Backend & APIs",
      desc: "Secure, scalable APIs with authentication, database design, and clean architecture.",
    },
    {
      title: "Full-Stack Solutions",
      desc: "Complete end-to-end solutions — from idea validation to deployment and maintenance.",
    },
  ];

  const steps = ["Plan", "Design", "Develop", "Deliver"];

  return (
    <section id="hire-me" className="max-w-7xl mx-auto px-6 py-30 ">
      {/* HERO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
        {/* LEFT */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hire a
            <span className="block text-accent">
              Professional Full-Stack Developer
            </span>
          </h1>

          <p className="text-muted text-lg max-w-xl">
            I build fast, scalable, and maintainable web applications with a
            strong focus on performance, clean architecture, and real-world
            usability.
          </p>
          <div className="flex gap-4">
            <Link
              to={"/allProjects"}
              className="btn-primary btn-primary--strong"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* RIGHT – HIGHLIGHTS */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="card flex items-center gap-4 p-6">
              <span className="text-accent-soft text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div className="mb-28">
        <h2 className="section-title">What I Can Help You With</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {services.map((service, i) => (
            <div key={i} className="card p-8 space-y-3">
              <h3 className="text-strong">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY HIRE ME */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">
        <div>
          <h2 className="section-title">Why Hire Me</h2>
          <p className="text-muted max-w-xl mt-4">
            I focus on writing code that’s easy to understand, easy to scale,
            and aligned with long-term business goals — not just quick fixes.
          </p>
        </div>

        <ul className="space-y-4">
          {[
            "Clean, maintainable, and readable code",
            "Clear communication and regular updates",
            "Mobile-first and performance-optimized builds",
            "Scalable architecture for future growth",
            "Professional workflow and on-time delivery",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <FaCheckCircle className="text-accent-soft mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* WORK PROCESS */}
      <div className="mb-28">
        <h2 className="section-title">My Work Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {steps.map((step, i) => (
            <div key={i} className="card p-6 text-center">
              <span className="text-muted text-sm">Step {i + 1}</span>
              <h3 className="text-strong mt-2">{step}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Ready to Build Something Great?
        </h2>
        <p className="text-muted max-w-xl mx-auto">
          If you have an idea or need a reliable developer to bring your project
          to life, let’s talk.
        </p>
      </div>
      <Contact></Contact>
    </section>
  );
};

export default HireMe;
