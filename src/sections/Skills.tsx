import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { Code, Database, Brain, MessageSquare } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Code className="text-primary-500" size={24} />,
      skills: ['Python', 'SQL', 'Java', 'C', 'HTML/CSS'],
    },
    {
      title: 'Data & Cloud Tools',
      icon: <Database className="text-primary-500" size={24} />,
      skills: ['Pandas/NumPy', 'Microsoft Azure', 'Power BI', 'Looker Studio', 'MySQL'],
    },
    {
      title: 'Machine Learning & Analytics',
      icon: <Brain className="text-primary-500" size={24} />,
      skills: ['Supervised Learning', 'Sentiment Analysis', 'Statistical Modeling', 'Feature Engineering'],
    },
    {
      title: 'Soft Skills',
      icon: <MessageSquare className="text-primary-500" size={24} />,
      skills: ['Collaboration', 'Business Communication', 'Problem-Solving', 'Data Analysis', 'Data Cleaning'],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
      <Parallax translateY={[-20, 20]} className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary-50 opacity-50 mix-blend-multiply"></Parallax>
      <Parallax translateY={[20, -20]} className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-secondary-50 opacity-50 mix-blend-multiply"></Parallax>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical and soft skills in data science, machine learning, and software development."
        />
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((category, index) => (
            <Parallax key={category.title} translateY={[10, -10]} className="h-full" speed={index % 2 === 0 ? 2 : -2}>
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="heading-sm text-primary-600 ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm rounded-full hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Parallax>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
