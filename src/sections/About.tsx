import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="section-padding bg-neutral-50 relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading 
          title="About Me" 
          subtitle="I'm a Data Science graduate student passionate about extracting insights from data and developing innovative machine learning solutions."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Education Column */}
          <Parallax translateY={[10, -10]} opacity={[0.8, 1]} className="h-full">
            <motion.div
              ref={ref}
              className="card h-full"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-primary-500 mr-3" size={24} />
                  <h3 className="heading-sm text-primary-600">Education</h3>
                </div>
              </motion.div>
              
              <div className="space-y-6">
                <motion.div 
                  className="border-l-4 border-primary-500 pl-4 py-1"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-neutral-800">Master of Science in Data Science</h4>
                  <p className="text-primary-600">Boston University</p>
                  <div className="flex justify-between text-sm text-neutral-500 mt-1">
                    <span>GPA: 4.0/4.0</span>
                    <span>Sept'24 - Present</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-primary-300 pl-4 py-1"
                  variants={itemVariants}
                >
                  <h4 className="font-semibold text-neutral-800">B.E in Computer Science (AI & ML)</h4>
                  <p className="text-primary-600">Vasavi College of Engineering</p>
                  <div className="flex justify-between text-sm text-neutral-500 mt-1">
                    <span>GPA: 3.35/4.0</span>
                    <span>2020-2024</span>
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants} className="mt-8">
                <div className="flex items-center mb-4">
                  <Award className="text-primary-500 mr-3" size={24} />
                  <h3 className="heading-sm text-primary-600">Relevant Coursework</h3>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Data Visualization',
                    'Statistical Analysis',
                    'Machine Learning',
                    'Database Management',
                    'Deep Learning',
                    'Natural Language Processing',
                    'Big Data Systems',
                    'Cloud Computing',
                  ].map((course, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                      <span className="text-neutral-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </Parallax>
          
          {/* Professional Summary Column */}
          <Parallax translateY={[15, -5]} opacity={[0.8, 1]} className="h-full">
            <motion.div
              className="card h-full"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={containerVariants}
            >
              <motion.h3 
                className="heading-sm text-primary-600 mb-4"
                variants={itemVariants}
              >
                Professional Summary
              </motion.h3>
              
              <motion.div variants={itemVariants}>
                <p className="text-neutral-700 mb-4">
                  As a data scientist and ML engineer, I blend strong technical skills with a 
                  practical business mindset. My expertise lies in transforming complex datasets 
                  into actionable insights and developing innovative machine learning solutions 
                  that drive meaningful results.
                </p>
                
                <p className="text-neutral-700 mb-4">
                  I'm particularly passionate about:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span className="text-neutral-700">Developing end-to-end data pipelines that transform raw data into valuable business insights</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span className="text-neutral-700">Creating interactive visualizations that make complex data accessible and actionable</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span className="text-neutral-700">Building machine learning models that solve real-world problems with high accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span className="text-neutral-700">Bridging the gap between technical solutions and business needs</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-6 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500"
                variants={itemVariants}
              >
                <p className="text-neutral-700 italic">
                  "I believe that the true value of data science lies not just in the technical implementation, 
                  but in how it can be applied to create real-world impact and drive business decisions."
                </p>
              </motion.div>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default About;