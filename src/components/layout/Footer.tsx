import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-card/50 relative">
      <div className="section-container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-3xl font-bold font-display gradient-text">MG</span>
            <p className="text-sm text-muted-foreground mt-2">
              Building innovative solutions at the intersection of hardware and software.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/MohanishGunda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/mohanish-gunda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mohanish.gunda@gmail.com"
              className="p-3 rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-border" />

          {/* Copyright & Back to Top */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-muted-foreground flex items-center gap-1"
            >
              © {currentYear} Mohanish Gunda. Crafted with
              <Heart className="h-4 w-4 text-accent fill-accent" />
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              Back to top
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
