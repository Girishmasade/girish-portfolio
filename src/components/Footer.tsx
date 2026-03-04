import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Girish Masade. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/girish", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/girish", label: "LinkedIn" },
            { icon: Mail, href: "mailto:girish@example.com", label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
