import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              MERN Stack Developer building high-quality web applications and digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/rror12"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-kodam/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:rohit.kodam2003@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Rohit Kodam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
