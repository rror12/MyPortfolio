import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer",
    company: "Tekdi Technologies Pvt. Ltd.",
    location: "Pune, India",
    period: "Sep 2024 - Present",
    description: [
      "Resolved UI inconsistencies across React.js components for better user experience.",
      "Integrated REST APIs to fetch and render real-time data efficiently.",
      "Resolved 30+ client-critical issues and developed 6 production features.",
      "Optimized MySQL queries reducing page load from 3 minutes to under 1 second.",
      "Built RESTful API routes using Node.js and MongoDB for event management with full CRUD."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    period: "May 2023 - June 2023",
    description: [
      "Built 3 front-end projects using HTML, CSS, and JavaScript.",
      "Implemented DOM manipulation and event handling for interactive features.",
      "Designed responsive user interfaces ensuring cross-device compatibility."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software engineering, focusing on full-stack development and production systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="bg-card border border-border p-6 md:p-8 rounded-3xl hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center text-primary font-semibold mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
