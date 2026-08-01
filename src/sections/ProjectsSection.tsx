import { Github, Check } from "lucide-react";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import SectionHeading from "../components/SectionHeading";

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    name: "Port Scanner",
    category: "Security Tool",
    description:
      "A single-file Python scanner that checks TCP and UDP ports across one or more targets, grabs service banners, fingerprints services, and exports results to multiple formats.",
    features: [
      "TCP & UDP port scanning",
      "IP, hostname, or CIDR targets",
      "Service banner grabbing",
      "Results export to txt/json/csv/html",
      "Interactive and CLI modes",
    ],
    technologies: ["Python", "Sockets", "argparse", "colorama"],
    githubUrl: "https://github.com/mahdy47/Port-Scanner-",
  },
  {
    id: "02",
    name: "CyberStudyHub",
    category: "Web Platform",
    description:
      "A web app for cybersecurity students to organize their studies — task management, a Pomodoro timer, encrypted notes, CTF tracking, and vulnerability documentation in one place.",
    features: [
      "Task management with priorities & deadlines",
      "Pomodoro study timer with history",
      "Encrypted notes with per-user keys",
      "CTF challenge & writeup tracker",
      "Vulnerability docs with CVSS scoring",
      "JWT authentication with 2FA",
    ],
    technologies: ["React", "TypeScript", "Express", "Prisma", "SQLite"],
    githubUrl: "https://github.com/mahdy47/cyberstudyhub",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.1} y={30}>
      <article className="flex flex-col gap-6 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 pb-6 sm:rounded-[50px] sm:p-6 sm:pb-8 md:rounded-[60px] md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <span className="text-[clamp(3rem,10vw,120px)] font-black leading-none text-[#D7E2EA]">
            {project.id}
          </span>
          <div className="flex flex-col items-start gap-1 md:items-end">
            <span className="text-xs uppercase tracking-widest text-[#00E5FF] sm:text-sm">
              {project.category}
            </span>
            <h3 className="text-xl font-medium uppercase leading-none text-[#D7E2EA] sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="max-w-2xl text-[clamp(0.9rem,1.5vw,1.2rem)] font-light leading-relaxed text-[#D7E2EA] opacity-70">
          {project.description}
        </p>

        <ul className="flex max-w-2xl flex-col gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-[clamp(0.85rem,1.4vw,1.05rem)] font-light text-[#D7E2EA] opacity-85"
            >
              <Check
                size={14}
                strokeWidth={3}
                className="shrink-0 text-[#22C55E]"
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#00E5FF]/40 px-3.5 py-1 text-xs font-light uppercase tracking-wider text-[#00E5FF] sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <LiveProjectButton
            href={project.githubUrl}
            newTab
            className="flex items-center gap-2.5"
          >
            <Github size={16} strokeWidth={2.25} />
            GitHub
          </LiveProjectButton>
          {project.liveDemoUrl && (
            <LiveProjectButton href={project.liveDemoUrl}>
              Live Demo
            </LiveProjectButton>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <SectionHeading hero className="mb-16 sm:mb-20 md:mb-28">
        Projects
      </SectionHeading>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
