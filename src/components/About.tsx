import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I am a passionate <span className="text-foreground font-medium">MERN Stack Developer</span> with 
                over a year of experience in building and maintaining production-grade web applications. 
                My expertise lies in creating scalable backends with Node.js and Express, 
                and crafting intuitive, responsive user interfaces with React.js.
              </p>
              <p>
                Currently, I work as a <span className="text-foreground font-medium">Software Development Engineer</span> at Tekdi Technologies, 
                where I focus on resolving complex UI issues, optimizing database performance, 
                and building robust RESTful APIs.
              </p>
              <p>
                I thrive on solving challenging problems—whether it's reducing page load times 
                from minutes to seconds or integrating AI to create context-aware applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-border bg-card p-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                  <h3 className="text-4xl font-bold text-primary mb-1">1+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Year Exp.</p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-center">
                  <h3 className="text-4xl font-bold text-blue-500 mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects</p>
                </div>
                <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-center">
                  <h3 className="text-4xl font-bold text-purple-500 mb-1">30+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Issues Solved</p>
                </div>
                <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                  <h3 className="text-4xl font-bold text-emerald-500 mb-1">6+</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Prod Features</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
