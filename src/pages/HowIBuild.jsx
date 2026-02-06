import {
  FaLightbulb,
  FaFigma,
  FaReact,
  FaImage,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const workflowSteps = [
  {
    icon: <FaLightbulb />,
    title: "Idea & Requirements",
    description:
      "I work on my own project ideas, client requirements, or AI-assisted brainstorming. I focus on defining the problem, core features, and MVP before writing code.",
    tools: ["ChatGPT", "Black-Box", "DeepSeek"],
  },
  {
    icon: <FaFigma />,
    title: "UI / UX Design",
    description:
      "I design layouts and user flows in Figma or adapt professional templates. This includes typography, colors, spacing, and responsive structure.",
    tools: ["Figma", "PixSo", "ThemeForest"],
  },
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "I build responsive, component-based interfaces with clean architecture, routing, and smooth interactions.",
    tools: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "React Router",
    ],
  },
  {
    icon: <FaImage />,
    title: "Assets & UI Polish",
    description:
      "I integrate optimized images, icons, fonts, and favicons to make the UI feel premium and production-ready.",
    tools: ["Icons", "Images", "PNG / WebP", "Fonts", "Favicon"],
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    description:
      "I create secure and scalable REST APIs, manage server logic, and handle validation and error handling.",
    tools: ["Node.js", "Express.js"],
  },
  {
    icon: <FaDatabase />,
    title: "Database & Authentication",
    description:
      "I design MongoDB schemas, handle CRUD operations, and implement authentication with protected routes.",
    tools: ["MongoDB", "Firebase"],
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Maintenance",
    description:
      "I version-control the project, deploy it to production, and continuously optimize performance and security.",
    tools: ["Git", "GitHub", "Vercel / Netlify"],
  },
];

const Workflow = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-30">
      {/* Section Header */}
      <div className="max-w-2xl mb-14">
        <h2 className="text-3xl font-semibold mb-3">
          How I Build Web Applications
        </h2>
        <p className="text-muted">
          A clear, structured workflow I follow to build scalable and
          production-ready web applications.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workflowSteps.map((step, index) => (
          <div key={index} className="card p-7">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-2xl text-accent-soft">{step.icon}</div>
              <h3 className="section-title">{step.title}</h3>
            </div>

            <p className="text-muted mb-4 leading-relaxed">
              {step.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {step.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full border border-[var(--border-color)] text-accent-soft"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
