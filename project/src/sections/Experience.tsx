import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Automation Intern',
      company: 'Infor',
      period: 'Feb 2024 - May 2024',
      description: [
        'Developed and deployed workflows using Infor RPA, improving process efficiency by 30%',
        'Led client meetings to identify operational challenges and gather requirements',
        'Automated repetitive tasks, saving clients 10+ hours per week',
        'Implemented data-driven RPA workflows that enhanced task efficiency and improved client satisfaction',
        'Demonstrated attention to detail through thorough data cleaning and validation processes',
      ],
    },
    {
      title: "Data Engineering Intern",
      company: "Xnode.ai",
      period: "May 2025 – Present",
      description: [
        "Designed and maintained data pipelines that supported ML model training, evaluation, and deployment workflows.",
        "Resolved 3 critical bugs in the real-time data ingestion and transformation logic, improving system reliability and training data accuracy.",
        "Assisted in optimizing ETL processes for structured and unstructured data used in AI-powered automation tools.",
        "Collaborated with ML engineers to ensure seamless integration between data pipelines and model-serving infrastructure."
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      <Parallax translateY={[-15, 15]} className="absolute -right-32 top-64 w-96 h-96 rounded-full bg-primary-50 opacity-40 mix-blend-multiply"></Parallax>
      <Parallax translateY={[10, -10]} className="absolute -left-20 bottom-20 w-72 h-72 rounded-full bg-secondary-50 opacity-40 mix-blend-multiply"></Parallax>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My professional journey and work experiences that have shaped my skills and expertise."
        />
        
        <div className="mt-16">
          <ExperienceTimeline items={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience;