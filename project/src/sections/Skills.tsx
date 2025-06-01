import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import SkillBar from '../components/SkillBar';
import { Code, Database, Brain, MessageSquare } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
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
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 90 },
        { name: 'Java', level: 75 },
        { name: 'C', level: 70 },
        { name: 'HTML/CSS', level: 65 },
      ],
    },
    {
      title: 'Data & Cloud Tools',
      icon: <Database className="text-primary-500" size={24} />,
      skills: [
        { name: 'Pandas/NumPy', level: 95 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Power BI', level: 85 },
        { name: 'Looker Studio', level: 80 },
        { name: 'MySQL', level: 90 },
      ],
    },
    {
      title: 'Machine Learning & Analytics',
      icon: <Brain className="text-primary-500" size={24} />,
      skills: [
        { name: 'Supervised Learning', level: 85 },
        { name: 'Sentiment Analysis', level: 95 },
        { name: 'Statistical Modeling', level: 80 },
        { name: 'Feature Engineering', level: 85 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <MessageSquare className="text-primary-500" size={24} />,
      skills: [
        { name: 'Collaboration', level: 95 },
        { name: 'Business Communication', level: 90 },
        { name: 'Problem-Solving', level: 95 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Data Cleaning', level: 95 },
      ],
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
          {skillCategories.map((category, categoryIndex) => (
            <Parallax 
              key={category.title}
              translateY={[10, -10]} 
              className="h-full"
              speed={categoryIndex % 2 === 0 ? 2 : -2}
            >
              <div className="card h-full">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="heading-sm text-primary-600 ml-3">{category.title}</h3>
                </div>
                
                <div>
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={
                        index % 3 === 0
                          ? 'from-primary-500 to-primary-400'
                          : index % 3 === 1
                          ? 'from-secondary-500 to-secondary-400'
                          : 'from-accent-500 to-accent-400'
                      }
                    />
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