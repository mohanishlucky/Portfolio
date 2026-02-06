import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Layout,
  Server,
  GitBranch,
  Github,
  Terminal,
  Zap,
  FileCode,
} from "lucide-react";

const tools = [
  { Icon: Code2, color: "text-cyan-500", name: "Programming" },
  { Icon: Cpu, color: "text-purple-500", name: "Microcontrollers" },
  { Icon: Database, color: "text-indigo-500", name: "Databases" },
  { Icon: Layout, color: "text-orange-500", name: "Frontend" },
  { Icon: Server, color: "text-green-500", name: "Backend" },
  { Icon: GitBranch, color: "text-pink-500", name: "Git" },
  { Icon: Github, color: "text-slate-400", name: "GitHub" },
  { Icon: Terminal, color: "text-cyan-400", name: "Terminal" },
  { Icon: Zap, color: "text-yellow-500", name: "Performance" },
  { Icon: FileCode, color: "text-blue-500", name: "Code" },
];

export const FallingTools = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {tools.map((tool, index) => {
        const Icon = tool.Icon;
        const startX = Math.random() * 100;
        const duration = 8 + Math.random() * 6;
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              top: "-40px",
              left: `${startX}%`,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              top: "calc(100% + 40px)",
              left: `${startX + (Math.random() * 20 - 10)}%`,
              opacity: [0, 0.6, 0.6, 0],
              rotate: 360,
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className={`${tool.color} opacity-50`}>
              <Icon size={32} />
            </div>
          </motion.div>
        );
      })}

      {/* Animated decorative dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-500/40"
          initial={{
            top: "-10px",
            left: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            top: "calc(100% + 10px)",
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* SVG doodle lines in background */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M 0 200 Q 100 150, 200 200 T 400 200"
          stroke="currentColor"
          className="text-cyan-500"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
          d="M 0 400 Q 150 350, 300 400 T 600 400"
          stroke="currentColor"
          className="text-purple-500"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </div>
  );
};
