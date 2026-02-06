import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Code2, Cpu, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Typewriter } from "../ui/Typewriter";
import { FallingGadgets } from "../ui/FallingGadgets";

const roles = [
  "Embedded Systems Developer",
  "Full Stack Developer",
  "IoT Enthusiast",
  "AI Explorer",
];

const quickStats = [
  { icon: Code2, label: "Projects", value: "3+" },
  { icon: Cpu, label: "Technologies", value: "15+" },
  { icon: Sparkles, label: "CGPA", value: "9.41" },
];

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Falling Gadgets with Doodle Design */}
      <FallingGadgets />
      
      {/* Animated orbs with cool colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Dot pattern with doodle style */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Code badge with doodle style */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/50 mb-8 font-mono text-sm text-muted-foreground backdrop-blur-sm"
          >
            <span className="text-cyan-500 animate-pulse">●</span>
            <span>Welcome to my digital space</span>
          </motion.div>

          {/* Name with sketchy style - horizontal layout */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 7rem)',
              fontFamily: '"Caveat", cursive',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              textShadow: `
                2px 2px 0px rgba(34, 211, 238, 0.3),
                4px 4px 0px rgba(147, 51, 234, 0.2),
                6px 6px 0px rgba(59, 130, 246, 0.15),
                -1px -1px 0px rgba(34, 211, 238, 0.2),
                1px -1px 0px rgba(147, 51, 234, 0.15)
              `,
              filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.3))',
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-foreground"
            >
              Mohanish
            </motion.span>
            {' '}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Gunda
            </motion.span>
          </motion.h1>

          {/* Typewriter Role with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10"
          >
            <Typewriter 
              words={roles} 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-bold" 
            />
          </motion.div>

          {/* Description with doodle emphasis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Electronics & Communication Engineering student at{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-bold">VIT Amaravati</span>
            . Crafting innovative solutions at the intersection of hardware and software. 🚀
          </motion.p>

          {/* Quick Stats with enhanced visuals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Link to="/resume">
              <Button size="lg" className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 h-12 text-base font-medium shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                View Resume
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </Link>
            <a href="/Mohanish_Resume.pdf" download>
              <Button size="lg" variant="outline" className="gap-2 px-8 h-12 text-base font-medium border-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300">
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </a>
          </motion.div>

          {/* Social Links with enhanced styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/MohanishGunda", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mohanish-gunda", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mohanishgunda@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-2 border-cyan-500/30 text-muted-foreground hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-cyan-500 transition-colors group"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Explore
            </span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
