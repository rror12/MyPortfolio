import { motion } from "motion/react";
import { Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";


const projects = [
  {
    title: "InkSpire",
    subtitle: "Note Taking App",
    description: "Full-stack MERN note-sharing platform with JWT auth, friend requests, and real-time notifications. Features role-based access control and RESTful APIs.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/rror12/NodePracticeLink",
    live: null,
    icon: <Code2 className="w-6 h-6" />,
    color: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "DocuMind",
    subtitle: "RAG-based AI App",
    description: "AI-powered application where users upload PDFs or URLs to chat with content. Integrated Gemini AI for context-aware responses and context retrieval.",
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Gemini AI"],
    github: "https://github.com/rror12/docuMind",
    live: "https://docu-mind-pro-eta.vercel.app/",
    icon: <Sparkles className="w-6 h-6" />,
    color: "from-blue-500/20 to-cyan-500/20"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, ranging from full-stack applications to AI-integrated tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Card Header/Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-xl z-10"
                >
                  {project.icon}
                </motion.div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary font-medium text-sm">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <Button variant="outline" size="sm" className="rounded-full flex-1" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      <Github className="w-4 h-4 mr-2 text-white" />
                      GitHub
                    </a>
                  </Button>

                  {project.live ? (
                    <Button size="sm" className="rounded-full flex-1" asChild>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center w-full"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 text-white" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <div className="flex-1" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
