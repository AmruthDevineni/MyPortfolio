import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isTyping?: boolean;
}

const chatbotData = {
  greeting: "Hi there! I'm Amruth's virtual assistant. How can I help you today?",
  education: "Amruth is currently pursuing a Master of Science in Data Science at Boston University with a perfect 4.0 GPA. He completed his Bachelor's degree in Computer Science with a focus on AI & ML from Vasavi College of Engineering.",
  skills: "Amruth is proficient in Python, SQL, Java, and C. He's experienced with data tools like Pandas, NumPy, Microsoft Azure, Power BI, and Looker Studio. His machine learning skills include supervised and unsupervised learning, sentiment analysis, statistical modeling, and feature engineering.",
  projects: "Amruth has worked on several impressive projects including a Real-Time Stock Price Prediction system, University Accountability Ordinance for Boston housing data, an AI-Powered Financial Document Analyzer, and an Automated Comic Panel Synthesis system. Would you like to know more about any specific project?",
  experience: "Amruth worked as a Data Automation Intern at Infor where he developed and deployed workflows using Infor RPA, improving process efficiency by 30%. He led client meetings, automated repetitive tasks, and implemented data-driven workflows.",
  contact: "You can reach Amruth via email at amrdev@bu.edu or by phone at +1 925-406-5790. You can also connect with him on LinkedIn at linkedin.com/in/Amruth-Devineni/",
  availability: "Amruth is currently open to job opportunities and collaborations in the field of data science and machine learning.",
  resume: "Amruth's resume is available for download by pressing the 'Resume' button in the navigation bar.",
  project_stock: "The Real-Time Stock Price Prediction project used financial and sentiment data to predict stock prices. It achieved an R² of 0.99975 and featured a live dashboard.",
  project_housing: "The University Accountability Ordinance analyzed 190K+ student housing records in Boston. Amruth worked with Boston City Council to inform housing policy.",
  project_financial: "The Financial GPT project uses FinBERT and vector search to extract insights from SEC 10-K filings. It’s deployed on Streamlit.",
  project_comic: "The Automated Comic Panel Synthesis uses LLaMA 3 and Stable Diffusion to generate Peanuts-style comic strips from text prompts.",
  fallback: "I don't have specific information about that. Would you like to know about Amruth's education, skills, projects, experience, resume, or contact information?",
};

// Map keywords to responses
const keywordMap: { [key: string]: string } = {
  'education': chatbotData.education,
  'study': chatbotData.education,
  'university': chatbotData.education,
  'boston': chatbotData.education,
  'degree': chatbotData.education,
  'gpa': chatbotData.education,
  
  'skill': chatbotData.skills,
  'python': chatbotData.skills,
  'sql': chatbotData.skills,
  'java': chatbotData.skills,
  'programming': chatbotData.skills,
  'machine learning': chatbotData.skills,
  'ai': chatbotData.skills,
  
  'project': chatbotData.projects,
  'stock': "The Real-Time Stock Price Prediction project combined traditional financial metrics with sentiment analysis from news and social media. Amruth achieved an impressive R² score of 0.99975 using machine learning models and created interactive dashboards.",
  'housing': "The University Accountability Ordinance project involved analyzing 190,000+ student housing records to identify violations. Amruth worked with Boston City Councilor Liz Breadon to provide insights for policy decisions.",
  'financial': "The Financial GPT project helps investment professionals extract insights from complex financial documents using natural language processing and FinBERT embeddings.",
  'comic': "The Automated Comic Panel Synthesis project uses LLaMA 3 and Stable Diffusion to generate Peanuts-style comic strips from natural language prompts.",
  
  'experience': chatbotData.experience,
  'work': chatbotData.experience,
  'job': chatbotData.experience,
  'intern': chatbotData.experience,
  'infor': chatbotData.experience,
  
  'contact': chatbotData.contact,
  'email': chatbotData.contact,
  'phone': chatbotData.contact,
  'linkedin': chatbotData.contact,
  'reach': chatbotData.contact,
  
  'available': chatbotData.availability,
  'job opportunity': chatbotData.availability,
  'hiring': chatbotData.availability,
  'open to work': chatbotData.availability,
  
  'resume': chatbotData.resume,
  'download': chatbotData.resume,
  'resume download': chatbotData.resume,

  'stock project': chatbotData.project_stock,
  'real-time stock': chatbotData.project_stock,
  'stock price prediction': chatbotData.project_stock,

  'housing project': chatbotData.project_housing,
  'university ordinance': chatbotData.project_housing,
  'boston housing': chatbotData.project_housing,
  'University Accountability': chatbotData.project_housing,

  'financial gpt': chatbotData.project_financial,
  'financial project': chatbotData.project_financial,
  'financial data': chatbotData.project_financial,
  'Financial Document': chatbotData.project_financial,

  'comic project': chatbotData.project_comic,
  'comics': chatbotData.project_comic,
  'comic synthesis': chatbotData.project_comic,
  'storyboard': chatbotData.project_comic,
  'Comic Panel': chatbotData.project_comic,

  'hi': chatbotData.greeting,
  'hello': chatbotData.greeting,
  'hey': chatbotData.greeting,
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [messageId, setMessageId] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleBotResponse(chatbotData.greeting);
    }
  }, [isOpen, messages]);

  const handleBotResponse = (text: string) => {
    const id = messageId;
    setMessageId(id + 1);
    
    // First add a message with typing indicator
    setMessages(prev => [...prev, { id, text: '', sender: 'bot', isTyping: true }]);
    
    // After a small delay, update the message with the actual text
    setTimeout(() => {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === id ? { ...msg, isTyping: false, text } : msg
        )
      );
    }, 700);
  };

  const getBotResponse = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    
    // Check if any keywords match
    for (const [keyword, response] of Object.entries(keywordMap)) {
      if (lowercaseQuery.includes(keyword.toLowerCase())) {
        return response;
      }
    }
    
    return chatbotData.fallback;
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = {
      id: messageId,
      text: input,
      sender: 'user',
    };
    
    setMessageId(messageId + 1);
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Get bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      handleBotResponse(botResponse);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat button */}
      <motion.div 
        className="chatbot-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.div>
      
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-panel"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="bg-primary-500 text-white p-4 rounded-t-lg flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-medium">Amruth's Assistant</h3>
            </div>
            
            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-neutral-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-white border border-neutral-200 text-neutral-800'
                    }`}
                  >
                    {message.isTyping ? (
                      <div className="flex space-x-1 items-center h-6">
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    ) : (
                      <TypeAnimation
                        sequence={[message.text]}
                        wrapper="span"
                        speed={70}
                        cursor={false}
                      />
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Chat input */}
            <div className="p-3 border-t border-neutral-200 bg-white rounded-b-lg">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 border border-neutral-300 rounded-l-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-primary-500 text-white rounded-r-md hover:bg-primary-600 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;