import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h2 
        className="heading-lg gradient-text inline-block mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg text-neutral-600 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className={`h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded mt-4 ${
          centered ? 'mx-auto' : ''
        }`}
        variants={itemVariants}
      ></motion.div>
    </motion.div>
  );
};

export default SectionHeading;