import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Cpu, Code2, Database, Layout, Server, GitBranch,
  ChevronDown, Zap
} from "lucide-react";
import { FallingTools } from "../ui/FallingTools";

const skillNodes = [
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: ["C", "Embedded C", "Python", "Java", "SQL"],
    tools: ["GCC", "Python IDE", "Java Compiler"],
    context: "Core foundation for all projects - built firmware, scripts, and backend systems",
    applications: [
      "Embedded C for STM32 microcontroller projects",
      "Python for automation and data processing",
      "Java in college coursework",
      "SQL for database management"
    ]
  },
  {
    id: "microcontrollers",
    title: "Microcontrollers",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    skills: ["STM32 (ARM)", "ESP32", "Arduino"],
    tools: ["STM32CubeMX", "ESP-IDF", "Arduino IDE"],
    context: "Hardware-level programming for embedded systems and IoT applications",
    applications: [
      "STM32 development in embedded systems internship",
      "ESP32 for wireless IoT projects",
      "Arduino prototyping and learn-by-doing projects"
    ]
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    skills: ["Timers & Interrupts", "GPIO/ADC", "UART/SPI/I2C"],
    tools: ["Keil μVision", "STM32CubeMX", "Serial Monitors"],
    context: "Low-level hardware protocols and real-time system design",
    applications: [
      "Interrupt-driven systems for robotics",
      "Sensor interfacing via I2C and SPI",
      "UART communication in telemetry projects"
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    color: "from-orange-500 to-cyan-500",
    skills: ["HTML/CSS", "JavaScript", "React"],
    tools: ["VS Code", "React DevTools", "Tailwind CSS"],
    context: "Modern web interface design with smooth animations and responsive layouts",
    applications: [
      "React for this portfolio website",
      "Responsive design across all devices",
      "Interactive UI components with Framer Motion"
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js"],
    tools: ["Node.js", "Express", "Postman"],
    context: "Server-side logic and API development for full-stack applications",
    applications: [
      "Express.js server development",
      "RESTful API design",
      "Backend integration with databases"
    ]
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    color: "from-indigo-500 to-purple-500",
    skills: ["MySQL", "MongoDB"],
    tools: ["MySQL Workbench", "MongoDB Compass", "DBeaver"],
    context: "Data persistence and query optimization for applications",
    applications: [
      "Relational database design with MySQL",
      "NoSQL document storage with MongoDB",
      "Database integration in full-stack projects"
    ]
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Organic positioning for constellation effect
  const positions = [
    "top-0 left-10",      // Programming - top left
    "top-20 right-5",     // Microcontrollers - top right
    "top-56 left-20",     // Embedded - middle left
    "top-64 right-32",    // Frontend - middle right
    "bottom-32 left-40",  // Backend - bottom left
    "bottom-20 right-10" // Databases - bottom right
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Falling Tools Component */}
      <FallingTools />

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Animated constellation lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="10%"
          y1="20%"
          x2="40%"
          y2="60%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-cyan-500"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="60%"
          y1="25%"
          x2="85%"
          y2="65%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-purple-500"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.7 }}
        />
        <motion.line
          x1="40%"
          y1="60%"
          x2="70%"
          y2="75%"
          stroke="currentColor"
          strokeWidth="1"
          className="text-blue-500"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.9 }}
        />
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
            <span className="text-cyan-500 animate-pulse">⚡</span>
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-semibold text-sm">Technical Constellation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight"
          >
            <span className="text-foreground">Skills & </span>
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Click on any node to explore the tools, context, and real-world applications
          </motion.p>
        </motion.div>

        {/* Constellation Grid */}
        <div className="relative min-h-screen max-w-6xl mx-auto">
          {skillNodes.map((node, index) => {
            const IconComponent = node.icon;
            const isExpanded = expandedId === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`absolute ${positions[index]} w-64 cursor-pointer`}
              >
                {/* Floating card - Base state */}
                <motion.div
                  layout
                  onClick={() => setExpandedId(isExpanded ? null : node.id)}
                  whileHover={{ scale: 1.05 }}
                  className={`relative rounded-2xl backdrop-blur-md border-2 transition-all duration-300 ${
                    isExpanded
                      ? "bg-gradient-to-br from-foreground/10 to-transparent border-cyan-500/60 shadow-2xl shadow-cyan-500/20 z-50"
                      : "bg-gradient-to-br from-foreground/5 to-transparent border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/30"
                  }`}
                >
                  {/* Static content - Always visible */}
                  <motion.div className="p-6">
                    {/* Icon and title */}
                    <motion.div
                      animate={{ y: isExpanded ? -8 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${node.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{node.title}</h3>
                    </motion.div>

                    {/* Skills list - Always visible */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {node.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3 }}
                            className="text-xs px-2.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 mx-auto"
                    >
                      <ChevronDown className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </motion.div>

                  {/* Expanded content */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-cyan-500/20 space-y-4">
                      {/* Tools */}
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {node.tools.map((tool) => (
                            <motion.span
                              key={tool}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3 }}
                              className="text-xs px-2.5 py-1.5 rounded-full bg-purple-500/30 text-purple-200 border border-purple-500/50"
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Context */}
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 mb-2">Context</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {node.context}
                        </p>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-2">Applied In</h4>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {node.applications.map((app) => (
                            <motion.li
                              key={app}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3 }}
                              className="flex gap-2 items-start"
                            >
                              <span className="text-cyan-400 mt-0.5">▸</span>
                              <span>{app}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center mt-20 text-sm text-muted-foreground"
        >
          💡 Explore each node to discover more about how I've applied these skills
        </motion.div>
      </div>
    </section>
  );
};
