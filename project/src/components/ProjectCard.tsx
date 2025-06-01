import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';

interface ProjectCardProps {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  period,
  description,
  achievements,
  technologies,
  image,
  imageAlt,
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="card group mb-12 overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1 + delay * 0.1,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-2 overflow-hidden rounded-lg">
          <Parallax
            translateY={[10, -10]}
            className="h-full w-full"
          >
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-64 md:h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105" 
            />
          </Parallax>
        </div>
        <div className="md:col-span-3">
          <div className="flex justify-between items-start mb-3">
            <h3 className="heading-sm text-primary-600">{title}</h3>
            <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
              {period}
            </span>
          </div>
          <p className="text-neutral-600 mb-4">{description}</p>
          
          <h4 className="font-semibold text-neutral-800 mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-neutral-600">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;