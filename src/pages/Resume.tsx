import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, Github, Linkedin, Mail, ZoomIn, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useState } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/mohanish-gunda",
    color: "hover:text-blue-500 hover:border-blue-500/50",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/MohanishGunda",
    color: "hover:text-foreground hover:border-foreground/50",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:mohanish.gunda@gmail.com",
    color: "hover:text-red-500 hover:border-red-500/50",
  },
];

const Resume = () => {
  const [isZoomed, setIsZoomed] = useState(false);

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
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="/Mohanish_Resume.pdf" download>
              <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
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
              Click to zoom in or download the PDF version.
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
                className={`flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-muted-foreground transition-all duration-300 ${link.color}`}
              >
                <link.icon className="h-5 w-5" />
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Image Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              onClick={() => setIsZoomed(true)}
              whileHover={{ scale: 1.01 }}
              className="bg-card rounded-2xl border border-border overflow-hidden cursor-zoom-in shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-sm text-muted-foreground border border-border">
                  <ZoomIn className="h-4 w-4" />
                  Click to zoom
                </div>
              </div>
              <img
                src="/resume-image.jpg"
                alt="Mohanish Gunda Resume"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <a href="/Mohanish_Resume.pdf" download>
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8">
                <Download className="h-5 w-5" />
                Download Resume PDF
              </Button>
            </a>
          </motion.div>
        </div>
      </main>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(false);
            }}
          >
            <X className="h-5 w-5" />
          </Button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src="/resume-image.jpg"
            alt="Mohanish Gunda Resume - Full View"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="section-container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohanish Gunda
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
