import { motion } from "motion/react";
import {
  Code2,
  Database,
  Layout,
  Settings,
  Terminal,
  Globe,
  Cpu,
  Layers,
  Server,
  ShieldCheck,
  GitBranch,
  Box
} from "lucide-react";

const skillCategories = [
  {
    title: "MERN Stack",
    skills: [
      { name: "React.js", icon: <Layout className="w-5 h-5" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5" /> },
      { name: "Express.js", icon: <Terminal className="w-5 h-5" /> },
      { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
    ],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
      { name: "JavaScript", icon: <Code2 className="w-5 h-5" /> },
      { name: "Jquery", icon: <Code2 className="w-5 h-5" /> },
      { name: "HTML5/CSS3", icon: <Globe className="w-5 h-5" /> },
      { name: "C++", icon: <Cpu className="w-5 h-5" /> },
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "RESTful APIs", icon: <Layers className="w-5 h-5" /> },
      { name: "JWT Auth", icon: <ShieldCheck className="w-5 h-5" /> },
      { name: "MySQL", icon: <Database className="w-5 h-5" /> },
      { name: "PHP", icon: <Code2 className="w-5 h-5" /> },
    ],
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", icon: <GitBranch className="w-5 h-5" /> },
      { name: "Postman", icon: <Box className="w-5 h-5" /> },
      { name: "Bootstrap 5", icon: <Layout className="w-5 h-5" /> },
      { name: "Tailwind CSS", icon: <Settings className="w-5 h-5" /> },
    ],
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans the entire web development lifecycle,
            from frontend design to backend architecture and database optimization.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border ${category.border} ${category.bg} backdrop-blur-sm`}
            >
              <h3 className={`text-xl font-bold mb-6 ${category.color}`}>{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3 group">
                    <div className={`p-2 rounded-xl bg-background/50 border border-border group-hover:border-primary/50 transition-colors`}>
                      {skill.icon}
                    </div>
                    <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
