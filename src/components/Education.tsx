import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "VVP Institute of Engineering and Technology, Solapur",
    period: "2021 - 2024",
    location: "Solapur, India",
    grade: "CGPA 8.2",
    details: "Focused on core computer science subjects including Data Structures, Algorithms, and Web Technologies."
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "SES Polytechnic, Solapur",
    period: "2018 - 2021",
    location: "Solapur, India",
    grade: "87.14%",
    details: "Foundational studies in computer hardware, software, and networking."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications in computer science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg font-medium text-muted-foreground mb-4">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.details}</p>
                </div>
                
                <div className="flex flex-col gap-3 md:text-right shrink-0">
                  <div className="flex items-center md:justify-end text-sm font-semibold text-primary">
                    <Award className="w-4 h-4 mr-2" />
                    {edu.grade}
                  </div>
                  <div className="flex items-center md:justify-end text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center md:justify-end text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
