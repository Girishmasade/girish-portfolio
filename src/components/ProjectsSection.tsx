import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Authentication System",
    desc: "A production-grade auth system with OTP-based verification, JWT refresh tokens, role-based access control, and secure password hashing. Built with a focus on security best practices.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/girish",
  },
  {
    title: "Real-time Chat App",
    desc: "Full-featured chat application with real-time messaging via WebSockets, typing indicators, read receipts, and media sharing. Supports private and group conversations.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/girish",
  },
  {
    title: "E-commerce API Backend",
    desc: "Scalable RESTful API for e-commerce with product management, cart system, order processing, payment integration, and admin dashboard endpoints.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Stripe API"],
    github: "https://github.com/girish",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      <div className="absolute left-0 top-0 h-px w-full glow-line" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Projects</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="glass-card-hover group flex flex-col p-5 sm:p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={14} /> View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
