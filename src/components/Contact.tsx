import { motion } from "motion/react";
import { Mail, LinkedinIcon, GithubIcon, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-10">
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:rohit.kodam2003@gmail.com"
                  className="flex items-center p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email Me</p>
                    <p className="text-lg font-medium">rohit.kodam2003@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center p-4 rounded-2xl bg-card border border-border">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-lg font-medium">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center gap-4 mt-10">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12" asChild>
                  <a href="https://github.com/rror12" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12" asChild>
                  <a href="https://www.linkedin.com/in/rohit-kodam/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </Button>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-3xl shadow-2xl relative"
            >
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-primary text-primary-foreground shadow-xl rotate-12">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  />
                </div>
                <Button className="w-full rounded-xl py-6 text-base font-bold group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
