import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView ? (
          <Counter from={0} to={value} duration={duration} />
        ) : (
          0
        )}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

const Counter = ({
  from,
  to,
  duration,
}: {
  from: number;
  to: number;
  duration: number;
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const remaining = Math.max(endTime - now, 0);
      const progress = 1 - remaining / (duration * 1000);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      
      const currentCount = from + (to - from) * easeOutQuad;
      setCount(Math.round(currentCount * 100) / 100);

      if (remaining > 0) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    requestAnimationFrame(updateCount);
  }, [from, to, duration]);

  return <>{count}</>;
};

import { useState, useEffect } from "react";
