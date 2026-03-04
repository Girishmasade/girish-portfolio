import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Redux Toolkit (RTK)", level: 85 },
      { name: "Vite", level: 85 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32" ref={ref}>
      <div className="absolute left-0 top-0 h-px w-full glow-line" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Skills</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            My <span className="text-gradient">tech stack</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card p-5 sm:p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * ci }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="font-mono text-sm font-semibold tracking-wider text-primary uppercase">
                {cat.title}
              </h3>
              <div className="mt-5 space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-blue)))`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + si * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
