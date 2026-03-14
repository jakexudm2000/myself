import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Copy, Check } from 'lucide-react';
import { personalInfo } from '../config/personal';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: personalInfo.github || 'github.com/jakexudm2000',
      href: personalInfo.github || 'https://github.com/jakexudm2000',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedin || 'LinkedIn Profile',
      href: personalInfo.linkedin || '#',
    },
  ];

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {t.contact.title}
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-12 max-w-xl mx-auto">
          {t.contact.description}
        </motion.p>

        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="card group hover:border-primary-light/20 dark:hover:border-primary-dark/20 border-2 border-transparent"
            >
              <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mb-4 group-hover:scale-110 transition-transform">
                  <method.icon size={28} />
                </div>
                <h3 className="font-bold mb-2">{method.label}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {method.value}
                  </span>
                  <button
                    onClick={() => copyToClipboard(method.value, method.label)}
                    className="text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    aria-label={`Copy ${method.label}`}
                  >
                    {copied === method.label ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm w-full"
                >
                  {method.label === 'Email' ? t.contact.sendEmail : `${t.contact.visit} ${method.label}`}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className="mt-16 text-text-secondary-light dark:text-text-secondary-dark text-sm">
          © {new Date().getFullYear()} Jake Xu. {t.contact.copyright}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;