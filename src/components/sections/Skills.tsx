import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "C", level: 85 },
      { name: "Embedded C", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 70 },
    ],
  },
  {
    title: "Microcontrollers",
    skills: [
      { name: "STM32 (ARM Cortex-M)", level: 65 },
      { name: "ESP32", level: 80 },
      { name: "Arduino", level: 85 },
    ],
  },
  {
    title: "Embedded Systems",
    skills: [
      { name: "Timers & Interrupts", level: 75 },
      { name: "GPIO / ADC", level: 80 },
      { name: "UART / SPI / I2C", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
  },
];

const tools = ["Linux", "Git", "GitHub", "MATLAB", "LabVIEW", "Keil μVision"];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">My expertise</p>
          <h2 className="section-title mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 font-display">
              {skillCategories[activeCategory].title}
            </h3>
            <div className="space-y-5">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-6 font-display">Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="skill-badge"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
