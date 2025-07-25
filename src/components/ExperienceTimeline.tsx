import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { BriefcaseIcon } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  companyUrl?: string; // New: Optional URL to link company name
  period: string;
  description: string[];
  skills?: string[];
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 transform md:translate-x-px"></div>
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} isLast={index === items.length - 1} />
      ))}
    </div>
  );
};

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLast }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mb-12 ${isLast ? '' : 'pb-8'}`}
    >
      <Parallax
        translateY={[5, -5]}
        className={`${isEven ? 'md:pr-12' : 'md:order-last md:pl-12'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, x: isEven ? -20 : 20 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 20, x: isEven ? -20 : 20 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          className="card h-full"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-primary-600">{item.title}</h3>
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" title={`Visit ${item.company}'s website`} className="text-primary-600 font-medium underline hover:text-primary-700 transition-colors duration-200 cursor-pointer">
                  {item.company}
                </a>
              ) : (
                <p className="text-neutral-500">{item.company}</p>
              )}
            </div>
            <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs rounded-full">
              {item.period}
            </span>
          </div>

          <ul className="space-y-2 text-neutral-600 mb-3">
            {item.description.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </Parallax>

      <div className={`hidden md:block ${!isEven ? 'md:pr-12' : 'md:order-last md:pl-12'}`} />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.1
        }}
        className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white z-10"
      >
        <BriefcaseIcon size={20} />
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;
