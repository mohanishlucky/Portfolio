import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            © {currentYear} Mohanish Gunda. Made with
            <Heart className="h-4 w-4 text-accent fill-accent" />
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <a
              href="https://github.com/MohanishGunda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/mohanish-gunda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:mohanish.gunda@gmail.com"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
