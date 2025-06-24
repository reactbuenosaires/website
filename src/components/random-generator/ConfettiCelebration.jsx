import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

const ConfettiCelebration = ({ isActive, onComplete }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isActive && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 5000); // Stop confetti after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1000,
      }}>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={false}
        numberOfPieces={200}
        colors={[
          "#00d8ff", // Primary blue
          "#6ed9ff", // Sky blue
          "#1f7e9f", // Blue
          "#ff6b6b", // Red
          "#4ecdc4", // Teal
          "#45b7d1", // Light blue
          "#96ceb4", // Mint
          "#feca57", // Yellow
          "#ff9ff3", // Pink
          "#54a0ff", // Blue
        ]}
        gravity={0.3}
        wind={0.05}
        initialVelocityX={15}
        initialVelocityY={30}
      />
    </motion.div>
  );
};

export default ConfettiCelebration;
