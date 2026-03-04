import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Authentication System",
    desc: "Production-grade authentication system with OTP verification, JWT refresh tokens, RBAC, and secure password hashing.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    github: "https://github.com/girish",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    desc: "Real-time messaging app with typing indicators, read receipts, media sharing, and private/group chat support.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/girish",
    demo: "#",
  },
  {
    title: "E-commerce API Backend",
    desc: "Scalable REST API with product management, cart system, order processing, payment integration, and admin endpoints.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Stripe API"],
    github: "https://github.com/girish",
    demo: "#",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      <div className="absolute left-0 top-0 h-px w-full glow-line" />

      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card-hover group flex flex-col p-6"
            >
              {/* Title */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-muted/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/Girishmasade"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full border border-primary/40 px-8 py-3 font-medium text-primary transition hover:bg-primary/10"
          >
            View All Projects →
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;