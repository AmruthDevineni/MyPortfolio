import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    emailjs.send(
      'service_720n3ej',           // ✅ Your Service ID
      'template_rh9v33j',          // ✅ Your Template ID
      {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
      '8T60pWuJjqCoK458F'          // ✅ Your Public Key
    ).then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }).catch((error) => {
      setIsSubmitting(false);
      setErrorMessage('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="card shadow-xl"
    >
      {submitSuccess && (
        <div className="mb-6 p-4 bg-success-500 bg-opacity-10 text-success-500 rounded-lg">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-error-500 bg-opacity-10 text-error-500 rounded-lg">
          {errorMessage}
        </div>
      )}
      
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          placeholder="Your name"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          placeholder="What is this regarding?"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-all"
          placeholder="Your message here..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          <span className="flex items-center">
            Send Message <Send size={18} className="ml-2" />
          </span>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;
