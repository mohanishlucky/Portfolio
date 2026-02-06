import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/mohanish-gunda",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/MohanishGunda",
    color: "hover:text-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mohanish.gunda@gmail.com",
    color: "hover:text-accent",
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 glass-strong py-4"
      >
        <div className="section-container flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="/Mohanish_Resume.pdf" download>
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </motion.header>

      <main className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
              My <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              View my complete resume below or download the PDF version for your records.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-muted-foreground transition-colors ${link.color}`}
              >
                <link.icon className="h-5 w-5" />
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            {/* PDF Embed */}
            <div className="aspect-[8.5/11] w-full bg-secondary/50 relative">
              <iframe
                src="/Mohanish_Resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
              {/* Fallback for browsers that don't support PDF embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/90 opacity-0 hover:opacity-100 transition-opacity">
                <FileText className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">Can't see the preview?</p>
                <a href="/Mohanish_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Open in New Tab
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Resume Content (Accessible text version) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-card rounded-2xl border border-border p-8 sm:p-10"
          >
            <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Resume Content
            </h2>

            {/* Objective */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-primary">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Electronics and Communication Engineering student with interest in Embedded Systems, Web Development, and AI. 
                Learning microcontroller programming, hardware-software interfacing, and IoT applications. 
                Eager to apply and improve my skills in embedded development, AI integration, and full-stack web projects.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-primary">Education</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium">B.Tech. ECE</p>
                    <p className="text-sm text-muted-foreground">Vellore Institute of Technology - Amaravati</p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:text-right">
                    <p className="text-sm font-medium text-primary">CGPA: 9.41</p>
                    <p className="text-xs text-muted-foreground">2023 - 2027</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium">Senior Secondary</p>
                    <p className="text-sm text-muted-foreground">BIEAP Board</p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:text-right">
                    <p className="text-sm font-medium text-primary">97.6%</p>
                    <p className="text-xs text-muted-foreground">2021 - 2023</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium">Secondary</p>
                    <p className="text-sm text-muted-foreground">CBSE Board</p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:text-right">
                    <p className="text-sm font-medium text-primary">83.8%</p>
                    <p className="text-xs text-muted-foreground">2021</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-medium text-sm mb-2">Programming</p>
                  <p className="text-sm text-muted-foreground">C, Embedded C, Python, Java, SQL</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-medium text-sm mb-2">Microcontrollers</p>
                  <p className="text-sm text-muted-foreground">STM32 (ARM Cortex-M), ESP32, Arduino</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-medium text-sm mb-2">Frontend</p>
                  <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript, React</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50">
                  <p className="font-medium text-sm mb-2">Backend</p>
                  <p className="text-sm text-muted-foreground">Node.js, Express.js, MySQL, MongoDB</p>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-lg font-semibold mb-4 text-primary">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Embedded System Design Internship — Maven Silicon
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  C & Java Programming — NexGen (Offline Coaching)
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  MERN Stack Development — Apna College
                </li>
              </ul>
            </section>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohanish Gunda. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
