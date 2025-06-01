import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  level: number; // from 0 to 100
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  level, 
  color = 'from-primary-500 to-secondary-500' 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-neutral-700">{name}</span>
        <span className="text-sm font-medium text-neutral-500">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-progress bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.2
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;