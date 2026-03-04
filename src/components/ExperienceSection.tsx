import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Mytek Innovations Pvt Ltd",
    period: "2024 – Present",
    description:
      "Building full-stack web applications using React, Node.js, Express, and MongoDB. Developing secure authentication systems with JWT & OTP, real-time features with Socket.io, and RESTful APIs for e-commerce and SaaS platforms.",
    highlights: [
      "Built production-grade auth systems with OTP verification & JWT refresh tokens",
      "Developed real-time chat applications with WebSocket integration",
      "Designed scalable RESTful APIs with role-based access control",
      "Implemented payment integration using Stripe API",
    ],
  },
  {
    role: "Backend Developer",
    company: "Project-Based Work",
    period: "2023 – 2024",
    description:
      "Focused on creating responsive, high-performance user interfaces using React and TailwindCSS. Collaborated with teams to deliver pixel-perfect designs with smooth animations and optimal user experience.",
    highlights: [
      "Created responsive dashboards and admin panels with React",
      "Optimized frontend performance for faster load times",
      "Integrated third-party APIs and state management with Redux Toolkit",
      "Implemented CI/CD workflows using Git and deployment pipelines",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32" ref={ref}>
      <div className="absolute left-0 top-0 h-px w-full glow-line" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Professional <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                className="relative flex gap-6 sm:gap-10"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background">
                    <Briefcase size={14} className="text-primary" />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card-hover flex-1 p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
