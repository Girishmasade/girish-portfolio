import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Architecture", desc: "Well-structured, maintainable codebases" },
  { icon: Server, title: "Scalable APIs", desc: "RESTful services built for growth" },
  { icon: Shield, title: "Secure Systems", desc: "Auth, encryption & best practices" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed & efficiency" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm tracking-widest text-primary uppercase">About</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Turning ideas into <span className="text-gradient">digital reality</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm Girish — a Full Stack Developer specializing in the <strong className="text-foreground">MERN stack</strong>.
              I build robust web applications using <strong className="text-foreground">React</strong>, <strong className="text-foreground">Node.js</strong>,
              and <strong className="text-foreground">MongoDB</strong>, with a focus on delivering real business value through
              clean, maintainable code.
            </p>
            <p>
              From designing intuitive frontends to architecting secure authentication systems with
              JWT and OTP verification, I approach every project with a problem-solver's mindset.
              I care deeply about performance optimization, API design, and creating seamless user experiences.
            </p>
            <p>
              Whether it's a real-time application, an e-commerce backend, or a complex dashboard —
              I bring the technical depth and attention to detail needed to ship quality software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <div key={h.title} className="glass-card-hover p-5">
                <h.icon size={28} className="text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
