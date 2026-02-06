import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Globe, Brain, Zap, Target, Rocket } from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Microcontroller programming, hardware-software interfacing, and IoT applications",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack development with modern frameworks and cloud deployment",
    color: "accent",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Edge AI, machine learning, and intelligent system design",
    color: "primary",
  },
  {
    icon: Zap,
    title: "IoT Solutions",
    description: "Connected devices, real-time monitoring, and smart automation",
    color: "accent",
  },
];

const stats = [
  { value: "3+", label: "Projects Built", icon: Rocket },
  { value: "9.41", label: "CGPA", icon: Target },
  { value: "3+", label: "Certifications", icon: Cpu },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-accent/3 to-transparent pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="section-title mb-4">
            Passionate <span className="gradient-text">Developer</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building the future, one line of code at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an <span className="text-foreground font-semibold">Electronics and Communication Engineering</span> student 
              at VIT Amaravati, passionate about bridging the gap between hardware and software to create innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey spans from designing <span className="text-foreground font-semibold">low-level embedded systems</span> 
              with microcontrollers to building <span className="text-foreground font-semibold">full-stack web applications</span>. 
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
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-card border border-border"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold font-display text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
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
                className="p-6 rounded-2xl bg-card border border-border card-hover group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color === 'primary' ? 'from-primary/5' : 'from-accent/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl ${interest.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <interest.icon className={`h-6 w-6 ${interest.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 relative z-10">{interest.title}</h3>
                <p className="text-sm text-muted-foreground relative z-10">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
