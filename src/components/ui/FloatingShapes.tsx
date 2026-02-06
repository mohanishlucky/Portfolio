import { motion } from "framer-motion";

export const FloatingShapes = () => {
  // Generate random falling particles
  const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 8 + Math.random() * 4,
    size: 2 + Math.random() * 6,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Circle - Cool Cyan */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Right Blob - Cool Purple */}
      <motion.div
        className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Left - Cool Blue */}
      <motion.div
        className="absolute bottom-1/4 -left-48 w-[400px] h-[400px] rounded-full bg-blue-500/7 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Right - Cool Teal */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-teal-500/8 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -35, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center accent - Cool Indigo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Falling Particles Animation */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 shadow-lg"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: "-10px",
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 1, 0.8, 0],
              x: [0, Math.sin(particle.id) * 50, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Additional floating circles with glow effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + i}px`,
              height: `${3 + i}px`,
              left: `${(i * 12.5)}%`,
              top: `${(i * 10) % 100}%`,
              background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(34, 211, 238, 0.6)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.6)' : 'rgba(20, 184, 166, 0.6)'}, transparent)`,
              boxShadow: `0 0 ${15 + i}px ${i % 3 === 0 ? 'rgba(34, 211, 238, 0.4)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.4)' : 'rgba(20, 184, 166, 0.4)'}`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
