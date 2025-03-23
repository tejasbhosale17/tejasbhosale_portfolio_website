import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        y: -scrollY,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      style={{ willChange: "transform" }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScroll;
