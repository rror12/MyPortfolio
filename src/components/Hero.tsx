import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full">
            Available for Opportunities
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter mb-6 leading-[0.9]">
            Rohit <span className="text-primary ">Kodam</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
            MERN Stack Developer building scalable web applications with
            <span className="text-foreground"> React.js, Node.js, Express.js and MongoDB.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold group" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center justify-center space-x-8"
          >
            <a href="https://github.com/rror12" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/rohit-kodam/" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/rohitkodam/" target="_blank" rel="noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink className="w-5 h-5 mr-2" />
              LeetCode
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
