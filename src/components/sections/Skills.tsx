import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Code2,
  Database,
  Layout,
  Server,
  Zap,
} from "lucide-react";

/* ----------------------------------
   SKILLS DATA
----------------------------------- */
const skillsData = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["C", "Embedded C", "Python", "Java", "SQL"],
    tools: ["GCC", "Python IDE", "Java Compiler"],
  },
  {
    title: "Microcontrollers",
    icon: Cpu,
    skills: ["STM32 (ARM)", "ESP32", "Arduino"],
    tools: ["STM32CubeMX", "ESP-IDF", "Arduino IDE"],
  },
  {
    title: "Embedded Systems",
    icon: Zap,
    skills: ["Timers", "Interrupts", "GPIO", "UART", "SPI", "I2C"],
    tools: ["Keil µVision", "Serial Monitor", "Logic Analyzer"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    tools: ["VS Code", "React DevTools", "Figma"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
    tools: ["Postman", "Node.js Runtime"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    tools: ["MySQL Workbench", "MongoDB Compass", "DBeaver"],
  },
];

/* ----------------------------------
   COMPONENT
----------------------------------- */
export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 lg:py-32"
      ref={ref}
    >
      <div className="section-container">
        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            Technologies, tools, and platforms I use to build real-world projects
          </p>
        </motion.div>

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-xl border border-border bg-card p-6
                           transition-shadow duration-300
                           hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    SKILLS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs sm:text-sm px-3 py-1
                                   rounded-full bg-muted text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    TOOLS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs sm:text-sm px-3 py-1
                                   rounded-full bg-cyan-500/10
                                   text-cyan-400"
                      >
                        {tool}
                      </span>
                    ))}
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
