import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import HeroBackground3D from "./HeroBackground3D";

const socials = [
  { icon: Github, href: "https://github.com/girish", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/girish", label: "LinkedIn" },
  { icon: Mail, href: "mailto:girish@example.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroBackground3D />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono mb-4 text-sm tracking-widest text-primary uppercase">
            &lt;Full Stack Developer /&gt;
          </p>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Hi, I'm{" "}
          <span className="text-gradient">Girish Masade</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mt-2 block">
            Building Scalable & Modern Web Applications
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I craft high-performance, secure, and beautifully architected web solutions
          with clean code and modern technologies.
        </motion.p>

        <motion.div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#projects"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="neon-border inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg px-8 py-3.5 font-medium text-foreground transition-all hover:bg-primary/10"
          >
            Hire Me
          </a>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-12 flex items-center justify-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_hsl(var(--neon-cyan)/0.15)]"
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
