import React, { ReactNode } from 'react';
import { Parallax } from 'react-scroll-parallax';

interface ParallaxSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  bgClassName?: string;
  speed?: number;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  id,
  className = '',
  children,
  bgClassName = '',
  speed = -10,
}) => {
  return (
    <section id={id} className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      <Parallax speed={speed} className={`absolute inset-0 z-0 ${bgClassName}`} />
      <div className="container-custom relative z-10 section-padding">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;