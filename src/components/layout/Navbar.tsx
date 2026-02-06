import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-strong py-3 shadow-lg" 
          : "py-5 bg-gradient-to-b from-background via-background to-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Sketchy Doodle Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Sketchy circular container */}
            <div className="relative">
              {/* Doodle circle background */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="absolute inset-0"
              >
                {/* Hand-drawn style circle */}
                <motion.circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="url(#sketchGradient)"
                  strokeWidth="2.5"
                  opacity="0.7"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, linear: true }}
                />
                {/* Doodle accent lines */}
                <motion.path
                  d="M 8 24 Q 12 18, 16 24 T 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="text-cyan-400"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                  d="M 32 24 Q 36 30, 40 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="text-purple-400"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="sketchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                    <stop offset="50%" stopColor="rgb(147, 51, 234)" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Sketchy text inside circle */}
              <div
                className="relative w-12 h-12 flex items-center justify-center"
                style={{
                  fontFamily: '"Caveat", cursive',
                  fontSize: "24px",
                  fontWeight: 700,
                  textShadow: `
                    1px 1px 0px rgba(34, 211, 238, 0.4),
                    2px 2px 0px rgba(147, 51, 234, 0.3),
                    -0.5px -0.5px 0px rgba(59, 130, 246, 0.2)
                  `,
                }}
              >
                <motion.span
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  MG
                </motion.span>
              </div>

              {/* Doodle dots around logo */}
              <motion.div
                className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full"
                style={{ top: "-6px", left: "50%", translateX: "-50%" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
                style={{ bottom: "-6px", right: "6px" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{ top: "8px", right: "-6px" }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
              />
            </div>

            {/* Sketchy text label */}
            <motion.span
              className="hidden sm:block text-sm font-bold"
              style={{
                fontFamily: '"Caveat", cursive',
                background: "linear-gradient(135deg, rgb(34, 211, 238) 0%, rgb(147, 51, 234) 50%, rgb(59, 130, 246) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: `
                  1px 1px 0px rgba(34, 211, 238, 0.3),
                  2px 1px 0px rgba(147, 51, 234, 0.2)
                `,
                letterSpacing: "-0.5px",
              }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Mohanish
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/resume">
              <Button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-border/50 bg-gradient-to-b from-background to-background/80"
            >
              <div className="flex flex-col gap-2 pt-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <Link to="/resume" className="mt-2">
                  <Button className="w-full flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                    <FileText className="h-4 w-4" />
                    View Resume
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
