import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Home: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 to-primary-900"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        <Parallax speed={-20} className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-700 opacity-20 mix-blend-screen"></Parallax>
        <Parallax speed={-10} className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary-500 opacity-10 mix-blend-screen"></Parallax>
        <Parallax speed={-15} className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-accent-500 opacity-10 mix-blend-screen"></Parallax>
        
        {/* Code snippets background */}
        <Parallax speed={-5} className="absolute top-1/4 right-[10%] text-primary-300 opacity-20 font-mono text-xs">
          <pre>
            {`
def predict_stock_price(data, sentiment):
    model = train_model(data)
    prediction = model.predict(
        combine_features(data, sentiment)
    )
    return prediction
            `}
          </pre>
        </Parallax>
        
        <Parallax speed={-8} className="absolute bottom-1/4 left-[5%] text-primary-300 opacity-20 font-mono text-xs">
          <pre>
            {`
SELECT 
  buildings.address,
  COUNT(violations.id) as violation_count
FROM buildings
JOIN violations ON buildings.id = violations.building_id
GROUP BY buildings.address
HAVING COUNT(violations.id) > 10
ORDER BY violation_count DESC;
            `}
          </pre>
        </Parallax>
      </div>
      
      <div className="container-custom relative z-10 px-4 py-20 text-center">
        <Parallax translateY={[20, -20]}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.11, 0.81, 0.48, 0.97],
            }}
            className="mb-6 text-white"
          >
            <h1 className="heading-xl font-bold mb-4">
              <span className="text-white">Amruth Devineni</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'ML Engineer',
                  2000,
                  'Data Visualization Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </h2>
          </motion.div>
        </Parallax>
        
        <Parallax translateY={[0, -10]} opacity={[0.8, 1]}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mx-auto text-primary-100 text-lg mb-8"
          >
            Transforming complex data into actionable insights and building innovative ML solutions.
          </motion.p>
        </Parallax>
        
        <Parallax translateY={[0, -5]} opacity={[0.7, 1]}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="btn-primary bg-white text-primary-600 hover:bg-neutral-100 inline-flex items-center"
            >
              View My Projects <ChevronDown className="ml-2" size={18} />
            </a>
          </motion.div>
        </Parallax>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-80 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={36} />
        </motion.div>
      </a>
    </section>
  );
};

export default Home;