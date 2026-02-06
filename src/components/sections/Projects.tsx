import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Cpu, Globe, Heart } from "lucide-react";
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
    color: "primary",
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
    color: "accent",
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
    color: "primary",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <p className="text-primary font-medium mb-3">What I've built</p>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Project Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full lg:w-1/2 aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border flex items-center justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center"
                >
                  <project.icon className="w-12 h-12 text-primary" />
                </motion.div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium border border-border">
                  {project.year}
                </div>
              </motion.div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold font-display">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 py-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
