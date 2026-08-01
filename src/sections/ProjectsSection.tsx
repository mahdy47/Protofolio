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
      "A single-file Python port scanner built for real reconnaissance work — scans TCP and UDP ports across IP, hostname, or CIDR targets, grabs service banners, fingerprints services, and exports results to TXT, JSON, CSV, or HTML. Includes both interactive and CLI modes, with a full pytest suite covering CIDR limits, argument validation, and localhost smoke scans.",
    features: [
      "TCP & UDP port scanning",
      "IP, hostname, or CIDR targets",
      "Service banner grabbing & fingerprinting",
      "Results export to txt/json/csv/html",
      "Interactive and CLI modes",
      "Full pytest test suite",
    ],
    technologies: ["Python", "Sockets", "argparse", "colorama"],
    githubUrl: "https://github.com/mahdy47/Port-Scanner-",
  },
  {
    id: "02",
    name: "CyberStudyHub",
    category: "Web Platform",
    description:
      "A full-stack web app that gives cybersecurity students one secure workspace — task management, a Pomodoro timer, encrypted notes, CTF challenge tracking, and vulnerability documentation, plus an admin dashboard. Security-first by design: JWT auth with refresh-token rotation, 2FA (TOTP), CSRF protection, rate limiting, and httpOnly cookies.",
    features: [
      "Task management with priorities & deadlines",
      "Pomodoro study timer with history",
      "Encrypted notes with per-user keys",
      "CTF challenge & writeup tracker",
      "Vulnerability docs with CVSS scores & PoCs",
      "Admin dashboard with roles & audit logs",
      "JWT auth + 2FA, CSRF protection, rate limiting",
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
      <article className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-[#D7E2EA]/20 bg-[#121212] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00E5FF]/45 hover:shadow-[0_16px_48px_-16px_rgba(0,229,255,0.28)] sm:p-8">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/50 to-transparent" />

        <div className="flex flex-wrap items-start justify-between gap-4">
          <span className="text-[clamp(3rem,9vw,88px)] font-black leading-none text-[#D7E2EA]/10">
            {project.id}
          </span>
          <div className="flex flex-col items-start gap-1 md:items-end">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] sm:text-sm">
              {project.category}
            </span>
            <h3 className="text-xl font-medium uppercase leading-none text-[#D7E2EA] sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
        </div>

        <p className="max-w-2xl font-light leading-relaxed text-[#D7E2EA]/75 [font-size:clamp(0.9rem,1.5vw,1.15rem)]">
          {project.description}
        </p>

        <ul className="flex max-w-2xl flex-col gap-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 font-light text-[#D7E2EA]/80 [font-size:clamp(0.85rem,1.4vw,1rem)]"
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
              className="rounded-full border border-[#00E5FF]/25 px-3.5 py-1 font-mono text-xs uppercase tracking-wider text-[#00E5FF]"
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
      className="relative border-t border-[#D7E2EA]/10 px-6 py-24 sm:px-8 md:py-32"
    >
      <SectionHeading hero className="mb-14 sm:mb-20">
        Projects
      </SectionHeading>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
