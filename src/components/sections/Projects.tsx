import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Cpu, Globe, Heart, Calendar, ArrowRight, Star } from "lucide-react";

const projects = [
  {
    title: "AI Enabled Wearable Health Monitoring System",
    category: "Embedded Systems | IoT | Edge AI",
    year: "2026",
    icon: Heart,
    description:
      "STM32-based low-power wearable for continuous vital monitoring with trend-based early warning algorithms for fever, cardiac abnormalities, and fall detection.",
    highlights: [
      "Multi-sensor data fusion with confidence scoring",
      "Edge intelligence for real-time risk classification",
      "Offline emergency alerts via buzzer/SMS",
      "Doctor-ready health summary reports",
    ],
    tech: ["STM32", "Edge AI", "IoT", "Health Sensors"],
    gradient: "from-rose-500/20 to-pink-500/20",
    borderColor: "border-rose-500/40 hover:border-rose-500/80",
    bgGradient: "from-rose-500/10 to-pink-500/10",
  },
  {
    title: "Smart Home Automation System",
    category: "Embedded Systems | IoT",
    year: "2025",
    icon: Cpu,
    description:
      "Embedded IoT system for controlling home appliances with microcontroller-based logic, Wi-Fi communication, and environment-aware automation.",
    highlights: [
      "ESP32 firmware for Wi-Fi and real-time monitoring",
      "Ultrasonic, DHT11, and LDR sensor integration",
      "Relay-based actuator control",
      "Web interface for remote operation",
    ],
    tech: ["ESP32", "IoT", "Sensors", "Web Interface"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/40 hover:border-blue-500/80",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Room Pe",
    category: "Web Development",
    year: "2025",
    icon: Globe,
    description:
      "Full-stack property listings and bookings platform with modular backend architecture, secure authentication, and cloud deployment.",
    highlights: [
      "RESTful CRUD APIs with MongoDB Atlas",
      "Passport.js authentication",
      "Cloudinary media storage",
      "Deployed on Render",
    ],
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/40 hover:border-emerald-500/80",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Doodle SVG background */}
      <svg className="absolute bottom-20 right-10 w-40 h-40 opacity-10 pointer-events-none" viewBox="0 0 100 100">
        <motion.circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" className="text-purple-500" strokeWidth="2" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.path d="M 30 50 L 70 50 M 50 30 L 50 70" stroke="currentColor" className="text-cyan-500" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, linear: true }} />
      </svg>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
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
            <span className="text-cyan-500 animate-pulse">🚀</span>
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-semibold text-sm">Featured Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight"
          >
            <span className="text-foreground">Innovative </span>
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Combining hardware expertise with modern software to build impactful solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -12 }}
                className="group relative cursor-pointer h-full"
              >
                <div className={`h-full p-6 rounded-3xl bg-gradient-to-br ${project.bgGradient} border-2 ${project.borderColor} transition-all duration-500 relative overflow-hidden backdrop-blur-sm`}>
                  {/* Animated background shine effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Decorative doodle element */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors"
                    animate={isHovered ? { rotate: 360 } : {}}
                    transition={{ duration: 4, repeat: Infinity, linear: true }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border-2 border-cyan-500/40"
                      >
                        <Icon className="h-7 w-7 text-cyan-400" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground bg-cyan-500/10 px-3 py-1.5 rounded-full border border-cyan-500/30"
                      >
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </motion.div>
                    </div>

                    {/* Category */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.25 + index * 0.1 }}
                      className="text-xs font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-widest mb-2"
                    >
                      {project.category}
                    </motion.p>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="space-y-2 mb-4"
                    >
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground group/item">
                          <Star className="h-3 w-3 mt-0.5 text-cyan-400 flex-shrink-0 group-hover/item:text-purple-400 transition-colors" />
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </motion.ul>

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.45 + index * 0.1 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs px-2.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium hover:bg-cyan-500/30 transition-colors cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-cyan-500/20 flex items-center justify-between text-xs text-cyan-400 font-semibold"
                    >
                      <span>Explore Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
