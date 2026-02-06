import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Cpu, Globe, Heart, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
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
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
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
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

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
            Portfolio
          </motion.span>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Innovative solutions combining hardware expertise with modern software
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border transition-all duration-500 hover:border-primary/30 hover:shadow-xl relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className={`h-6 w-6 ${project.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </div>
                  </div>

                  {/* Category */}
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="h-3 w-3 mt-0.5 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
