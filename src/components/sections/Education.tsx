import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech. Electronics & Communication Engineering",
    institution: "Vellore Institute of Technology - Amaravati",
    location: "Andhra Pradesh, India",
    year: "2023 - 2027",
    score: "CGPA: 9.41",
    icon: GraduationCap,
    current: true,
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "BIEAP Board",
    location: "Andhra Pradesh, India",
    year: "2021 - 2023",
    score: "97.6%",
    icon: BookOpen,
    current: false,
  },
  {
    degree: "Secondary (X)",
    institution: "CBSE Board",
    location: "India",
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
  },
  {
    title: "C & Java Programming",
    issuer: "NexGen (Offline Coaching)",
  },
  {
    title: "MERN Stack Development",
    issuer: "Apna College",
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
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Doodle SVG background */}
      <svg className="absolute top-20 right-20 w-32 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100">
        <motion.circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-cyan-500" strokeWidth="2" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.path d="M 20 50 Q 50 30, 80 50" stroke="currentColor" className="text-purple-500" strokeWidth="2" fill="none" animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} />
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
            <span className="text-cyan-500 animate-pulse">🎓</span>
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent font-semibold text-sm">Educational Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6 tracking-tight"
          >
            <span className="text-foreground">Education & </span>
            <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Building knowledge through academics and continuous learning
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/40">
                <GraduationCap className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Education</span>
            </h3>
            <div className="relative space-y-6">
              {/* Sketchy Timeline Line */}
              <motion.svg className="absolute left-[27px] top-8 bottom-0 w-0.5 h-full opacity-20" viewBox="0 0 2 400" preserveAspectRatio="none">
                <motion.path
                  d="M 1 0 Q 1.5 50, 1 100 Q 0.5 150, 1 200 Q 1.5 250, 1 300"
                  stroke="currentColor"
                  className="text-cyan-500"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 0.3 }}
                />
              </motion.svg>

              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 z-10 relative ${
                      item.current
                        ? "bg-gradient-to-br from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                        : "bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-500/60 text-purple-400"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>

                  {/* Content Card */}
                  <div className="flex-1 pb-6">
                    <motion.div
                      whileHover={{ translateY: -4 }}
                      className="bg-gradient-to-br from-foreground/5 to-transparent rounded-2xl p-6 border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 backdrop-blur-sm group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="font-bold text-base group-hover:text-cyan-400 transition-colors">{item.degree}</h4>
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40 whitespace-nowrap"
                        >
                          {item.score}
                        </motion.span>
                      </div>
                      <p className="text-sm text-foreground/80 mb-2 font-medium">{item.institution}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
                          <Calendar className="h-3.5 w-3.5" />
                          {item.year}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                          <MapPin className="h-3.5 w-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </motion.div>
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
              <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border border-purple-500/50"
                    >
                      <Award className="h-5 w-5 text-purple-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm group-hover:text-purple-400 transition-colors">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
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
              <h3 className="text-2xl font-bold font-display mb-8 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Coursework</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {coursework.map((course, index) => (
                  <motion.span
                    key={course}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border-2 border-blue-500/40 text-sm font-semibold hover:border-cyan-500/60 transition-all duration-300 text-blue-300 cursor-pointer"
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
