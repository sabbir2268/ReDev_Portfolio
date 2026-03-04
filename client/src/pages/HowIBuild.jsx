import {
  FaLightbulb,
  FaFigma,
  FaReact,
  FaImage,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";
import Motion from "../components/motion/Motion";
import { Helmet } from "react-helmet-async";
const workflowSteps = [
  {
    icon: <FaLightbulb />,
    title: "Idea & Requirements",
    description:
      "I work on client requirements, my own project ideas and AI-assisted brainstorming. I focus on defining the problem and core features.",
    tools: ["ChatGPT", "Black-Box", "DeepSeek"],
  },
  {
    icon: <FaFigma />,
    title: "UI / UX Design",
    description:
      "I start with quick wireframes using pen and paper to explore layout ideas and structure. Then I research high-quality templates for inspiration and best practices. Finally, I design a refined, responsive interface in Figma with proper typography, spacing, and visual hierarchy.",
    tools: ["Pen & Paper", "Figma", "PixSo", "ThemeForest"],
  },
  {
    icon: <FaImage />,
    title: "Assets & UI Polish",
    description:
      "I integrate modern, high-quality assets that align with the brand identity and visual standards. From optimized images and icons to typography and favicons, I ensure every element enhances user trust, strengthens brand recognition.",
    tools: ["Icons", "Images", "PNG / WebP", "Fonts", "Favicon"],
  },
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "I build responsive, component-driven interfaces with a structured architecture and clean routing. At every stage, I review alignment and responsiveness across devices while keeping backend integration, security best practices, SEO fundamentals, and future scalability in mind.",
    tools: ["Tailwind CSS", "React", "React Router"],
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
      "I design structured MongoDB schemas, manage efficient CRUD operations, and implement secure authentication with protected routes and role-based access control. For certain projects, I leverage Firebase for streamlined authentication and rapid backend integration.",
    tools: ["MongoDB", "Firebase Auth"],
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Maintenance",
    description:
      "I manage version control with Git, deploy projects to production, and regularly improve performance and security to keep everything running smoothly.",
    tools: ["Git", "GitHub", "Vercel / Netlify"],
  },
];

const Workflow = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-30">
      {/* helmet */}
      <Helmet>
        <title>How I Build | Sabbir</title>
      </Helmet>

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
          <Motion key={index} className="h-full">
            <div className="card p-7 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-2xl text-accent-soft">{step.icon}</div>
                <h3 className="section-title">{step.title}</h3>
              </div>

              <p className="text-strong mb-4 leading-relaxed flex-grow">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full border border-[var(--border-color)] text-accent bg-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Motion>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
