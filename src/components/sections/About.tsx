import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  "Electronics & Communication Engineering",
  "Full Stack Development",
  "IoT & Smart Devices",
  "AI/ML Integration",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Doodle SVG elements */}
      <svg className="absolute top-20 right-10 w-32 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100">
        <motion.circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-cyan-500" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, linear: true }} />
        <motion.path d="M 30 50 Q 50 30, 70 50" fill="none" stroke="currentColor" className="text-purple-500" strokeWidth="2" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
      </svg>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header with sketchy styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border-2 border-cyan-500/40 mb-6 backdrop-blur-sm"
          >
            <span className="text-cyan-500 animate-pulse">✦</span>
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-semibold text-sm">About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight"
            style={{
              fontSize: "clamp(2rem, 8vw, 3.5rem)",
            }}
          >
            <span className="text-foreground">Who I Am & </span>
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">What I Do</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            An innovative engineer bridging the gap between hardware and software, creating solutions that matter
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Bio paragraphs with enhanced styling */}
          <div className="space-y-6">
            <div className="group">
              <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                I'm an <span className="text-cyan-500 font-bold">Electronics and Communication Engineering</span> student 
                at <span className="text-purple-500 font-bold">VIT Amaravati</span>, passionate about bridging the gap between 
                hardware and software to create innovative solutions that solve real-world problems.
              </p>
            </div>

            <div className="group">
              <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                My journey spans from designing <span className="text-blue-500 font-bold">low-level embedded systems</span> 
                with microcontrollers to building <span className="text-purple-500 font-bold">full-stack web applications</span>. 
                I'm particularly excited about IoT applications and integrating AI at the edge for intelligent systems.
              </p>
            </div>

            <div className="group">
              <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Currently, I'm focused on expanding my skills in embedded development, 
                creating <span className="text-cyan-500 font-bold">wearable health monitoring systems</span>, and exploring the 
                intersection of hardware and AI to build the next generation of smart devices.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 pt-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="text-cyan-500"
                >
                  →
                </motion.div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-cyan-500 transition-colors">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
