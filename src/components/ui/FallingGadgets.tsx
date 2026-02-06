import { motion } from "framer-motion";
import { Smartphone, Laptop, Headphones, Wifi, Zap, Grid3x3, Radio, Cpu, Code2, Monitor } from "lucide-react";

const gadgets = [
  { icon: Smartphone, delay: 0, color: "from-cyan-400 to-blue-500" },
  { icon: Laptop, delay: 1, color: "from-purple-400 to-pink-500" },
  { icon: Headphones, delay: 2, color: "from-cyan-400 to-teal-500" },
  { icon: Wifi, delay: 0.5, color: "from-blue-400 to-cyan-500" },
  { icon: Zap, delay: 1.5, color: "from-yellow-400 to-orange-500" },
  { icon: Grid3x3, delay: 2.5, color: "from-purple-400 to-blue-500" },
  { icon: Radio, delay: 0.8, color: "from-pink-400 to-purple-500" },
  { icon: Cpu, delay: 1.8, color: "from-cyan-400 to-purple-500" },
  { icon: Code2, delay: 2.2, color: "from-green-400 to-cyan-500" },
  { icon: Monitor, delay: 0.3, color: "from-blue-400 to-purple-500" },
];

export const FallingGadgets = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {gadgets.map((gadget, index) => {
        const left = (index * 11) % 100;
        const duration = 8 + (index % 3) * 2;
        const IconComponent = gadget.icon;

        return (
          <motion.div
            key={index}
            className={`absolute w-12 h-12 rounded-lg bg-gradient-to-br ${gadget.color} shadow-lg flex items-center justify-center`}
            style={{
              left: `${left}%`,
              top: "-60px",
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              rotate: [0, 360 * (index % 2 === 0 ? 1 : -1)],
              opacity: [0, 1, 1, 0],
              x: [0, Math.sin(index) * 40, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: gadget.delay,
              ease: "linear",
            }}
          >
            <IconComponent className="w-6 h-6 text-white drop-shadow-lg" />
          </motion.div>
        );
      })}

      {/* Doodle Lines - Decorative SVG elements */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
        style={{ filter: "blur(1px)" }}
      >
        {/* Curved lines */}
        <motion.path
          d="M 100,100 Q 500,200 900,100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-cyan-500"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.path
          d="M 50,500 Q 500,300 950,500"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-purple-500"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.path
          d="M 100,900 Q 500,700 900,900"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-500"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />

        {/* Doodle circles */}
        <motion.circle
          cx="150"
          cy="200"
          r="30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-cyan-400"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.circle
          cx="850"
          cy="250"
          r="25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-purple-400"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />

        {/* Squiggly lines */}
        <motion.path
          d="M 200,300 L 250,350 L 200,400 L 250,450"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.path
          d="M 800,600 L 750,650 L 800,700 L 750,750"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-purple-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </svg>

      {/* Animated doodle dots scattered */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};
