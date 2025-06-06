import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ComicIMG from '../assets/comic_panel.png';
import UAOIMG from '../assets/UniversityAccountabilityOrdinance.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Real-Time Stock Price Prediction with Sentiment Analysis",
      period: "Sep 2024 - Dec 2024",
      description: "Built an end-to-end ETL pipeline using Python and Azure Data Factory to process structured and unstructured financial data. The system predicts stock prices by combining traditional financial metrics with sentiment analysis from news and social media.",
      achievements: [
        "Trained machine learning models achieving an R² score of 0.99975",
        "Implemented comprehensive exploratory data analysis (EDA) and data cleaning",
        "Created interactive Power BI dashboards for visualizing market trends",
      ],
      technologies: [
        "Python", "Microsoft Azure", "Scikit-learn", "Pandas", "NumPy", "Power BI", "Alpha Vantage AI"
      ],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Stock market data visualization",
    },
    {
      title: "University Accountability Ordinance",
      period: "Sep 2024 - Dec 2024",
      description: "Led a large-scale data analysis initiative to enhance transparency in off-campus student housing in Boston. Worked directly with Boston City Councilor Liz Breadon to provide insights that shaped zoning policies and tenant protection initiatives.",
      achievements: [
        "Standardized & cleaned 190,000+ student housing records from 30+ universities (2016-2024)",
        "Applied SQL & Python (Pandas, NumPy) to identify 16,000+ housing violations linked to 196 high-risk buildings",
        "Built interactive Looker Studio dashboards to visualize housing trends and policy violations",
      ],
      technologies: [
        "Python", "Pandas", "NumPy", "SQL", "Looker Studio", "Power BI"
      ],
      image: UAOIMG,
      imageAlt: "Boston city housing data visualization",
    },
    {
      title: "Financial GPT - AI-Powered Document Analyzer",
      period: "Jan 2025 - April 2025",
      description: "Developed an AI-powered financial document analyzer that helps investment bankers and traders quickly extract insights from extensive 10-K filings. The system uses natural language processing to summarize complex financial documents and answer specific queries.",
      achievements: [
        "Built a system that automatically processes SEC filings using FinBERT embeddings and vectorization",
        "Implemented domain-specific embeddings to capture financial language nuances",
        "Created interactive dashboards for financial data visualization",
      ],
      technologies: [
        "Python", "LLaMA 3", "FAISS", "FinBERT", "Streamlit"
      ],
      image: "https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Financial data analysis dashboard",
      githubUrl: "https://github.com/AmruthDevineni/financial_chatbot",
      websiteUrl: "https://financialchatbot.streamlit.app/"
    },
    {
      title: "Automated Comic Panel Synthesis",
      period: "Jan 2025 - April 2025",
      description: "Created an automated pipeline for generating stylistically faithful Peanuts-style comic strips from natural language prompts. The system combines LLMs for narrative generation with fine-tuned diffusion models for visual synthesis.",
      achievements: [
        "Integrated LLaMA 3 for contextual scene and dialogue generation with a fine-tuned Stable Diffusion model",
        "Developed custom dataset preprocessing pipelines for training diffusion models on comic panel styles",
        "Built an end-to-end system for narrative decomposition, character-consistent dialogue, and visual rendering",
      ],
      technologies: [
        "Python", "LLaMA 3", "Stable Diffusion 2.1", "EasyOCR", "OpenCV"
      ],
      image: ComicIMG,
      imageAlt: "AI-generated comic panels",
      githubUrl: "https://github.com/AmruthDevineni/ai-storyboard-gen"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-neutral-50 relative overflow-hidden">
      <Parallax translateY={[20, -20]} className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-primary-50 opacity-70 mix-blend-multiply"></Parallax>
      <Parallax translateY={[-10, 10]} className="absolute right-0 bottom-20 w-80 h-80 rounded-full bg-secondary-50 opacity-70 mix-blend-multiply"></Parallax>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Explore my data science and machine learning projects that demonstrate my expertise and problem-solving abilities."
        />
        
        <div className="space-y-12 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              period={project.period}
              description={project.description}
              achievements={project.achievements}
              technologies={project.technologies}
              image={project.image}
              imageAlt={project.imageAlt}
              githubUrl={project.githubUrl}
              websiteUrl={project.websiteUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;