import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Globe, Brain, Zap } from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Microcontroller programming, hardware-software interfacing, and IoT applications",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack development with modern frameworks and cloud deployment",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Edge AI, machine learning, and intelligent system design",
  },
  {
    icon: Zap,
    title: "IoT Solutions",
    description: "Connected devices, real-time monitoring, and smart automation",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Get to know me</p>
          <h2 className="section-title mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an <span className="text-foreground font-medium">Electronics and Communication Engineering</span> student 
              at VIT Amaravati, passionate about bridging the gap between hardware and software to create innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from designing <span className="text-foreground font-medium">low-level embedded systems</span> 
              with microcontrollers to building <span className="text-foreground font-medium">full-stack web applications</span>. 
              I'm particularly excited about IoT applications and integrating AI at the edge.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently focused on expanding my skills in embedded development, 
              creating wearable health monitoring systems, and exploring the intersection of 
              hardware and AI.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              <div className="text-center">
                <p className="text-3xl font-bold font-display text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold font-display text-primary">9.41</p>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold font-display text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interest Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
