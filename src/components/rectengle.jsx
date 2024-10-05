// SmallWhiteParticles.js
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SmallWhiteParticles = () => {
  const particles = useMemo(() => {
    return [...Array(25)].map(() => ({
      size: Math.random() * 5 + 2 + 'px', // Smaller particle size
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 1,
    }));
  }, []);

  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'fixed',
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // White particles
            borderRadius: '50%', // Circular shape
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, Math.random() * 20 - 10], // Slight vertical movement
            x: [0, Math.random() * 20 - 10], // Slight horizontal movement
            opacity: [0, 0.7, 0], // Fade in and out
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'mirror',
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
};

export default SmallWhiteParticles;
