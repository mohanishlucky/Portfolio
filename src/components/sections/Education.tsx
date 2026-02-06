import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.Tech. Electronics & Communication Engineering",
    institution: "Vellore Institute of Technology - Amaravati",
    year: "2023 - 2027",
    score: "CGPA: 9.41",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "BIEAP Board",
    year: "2021 - 2023",
    score: "97.6%",
    icon: BookOpen,
    current: false,
  },
  {
    degree: "Secondary (X)",
    institution: "CBSE Board",
    year: "2021",
    score: "83.8%",
    icon: BookOpen,
    current: false,
  },
];

const certifications = [
  {
    title: "Embedded System Design Internship",
    issuer: "Maven Silicon",
    icon: Award,
  },
  {
    title: "C & Java Programming",
    issuer: "NexGen (Offline Coaching)",
    icon: Award,
  },
  {
    title: "MERN Stack Development",
    issuer: "Apna College",
    icon: Award,
  },
];

const coursework = [
  "Embedded Systems Design",
  "Microprocessors and Microcontrollers",
  "Digital Electronics",
  "Control Systems",
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">My journey</p>
          <h2 className="section-title mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8 font-display flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h3>
            <div className="relative space-y-6">
              {/* Timeline Line */}
              <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-border" />

              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                      item.current
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border-2 border-border"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-6 ${item.current ? "" : ""}`}>
                    <div className="bg-card rounded-xl p-5 border border-border card-hover">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h4 className="font-semibold">{item.degree}</h4>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                          {item.score}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                      <p className="text-xs text-muted-foreground">{item.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Coursework */}
          <div className="space-y-10">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 font-display flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Relevant Coursework */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 font-display flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
