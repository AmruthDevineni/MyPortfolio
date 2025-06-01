import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticlesBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const generateParticles = () => {
      const numParticles = window.innerWidth < 768 ? 20 : 40;
      const colors = [
        'rgba(0, 115, 255, 0.3)',   // primary-500
        'rgba(0, 255, 154, 0.3)',   // secondary-500
        'rgba(255, 102, 0, 0.2)',   // accent-500
        'rgba(0, 115, 255, 0.1)',   // primary-500 (lighter)
        'rgba(0, 255, 154, 0.1)',   // secondary-500 (lighter)
      ];
      
      const newParticles: Particle[] = [];
      
      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // position in percentage
          y: Math.random() * 100,
          size: Math.random() * 8 + 4, // size between 4 and 12
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.5 + 0.2 // opacity between 0.2 and 0.7
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + particle.speedX * 100}%`],
            y: [`${particle.y}%`, `${particle.y + particle.speedY * 100}%`],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;