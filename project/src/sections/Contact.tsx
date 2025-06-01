import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      icon: <Mail className="text-primary-500" size={20} />,
      label: 'Email',
      value: 'amruth.devineni7@gmail.com',
      link: 'mailto:amruth.devineni7@gmail.com',
    },
    {
      icon: <Phone className="text-primary-500" size={20} />,
      label: 'Phone',
      value: '+1 925-406-5790',
    },
    {
      icon: <Linkedin className="text-primary-500" size={20} />,
      label: 'LinkedIn',
      value: 'Amruth Devineni',
      link: 'https://www.linkedin.com/in/amruth-devineni',
    },
    {
      icon: <Github className="text-primary-500" size={20} />,
      label: 'GitHub',
      value: 'Amruth Devineni',
      link: 'https://github.com/AmruthDevineni',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-neutral-50 relative overflow-hidden">
      <Parallax translateY={[20, -20]} className="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-primary-50 opacity-60 mix-blend-multiply"></Parallax>
      <Parallax translateY={[-15, 15]} className="absolute right-0 top-20 w-80 h-80 rounded-full bg-secondary-50 opacity-60 mix-blend-multiply"></Parallax>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Interested in collaborating or have questions? Feel free to reach out to me."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-2">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="card h-full"
            >
              <h3 className="heading-sm text-primary-600 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4 group-hover:bg-primary-100 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">{info.label}</p>
                      <p className="font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Current Status</h3>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-success-500 mr-2"></span>
                  <span className="text-success-500 font-medium">Available for opportunities</span>
                </div>
                <p className="text-neutral-600 mt-2">
                  Currently open to full-time data science and machine learning roles, as well as
                  freelance and consulting opportunities.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
      
      <footer className="mt-16 py-6 border-t border-neutral-200">
        <div className="container-custom text-center text-neutral-500">
          <p>© {new Date().getFullYear()} Amruth Devineni. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;