import { motion } from 'framer-motion';
import { personalInfo, getLocalizedField } from '../config/personal';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="section-container pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {language === 'en' ? "Hi, I'm Jake Xu" : '你好，我是徐德明'} <span className="text-primary-light dark:text-primary-dark"></span>
          </h1>
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-6">
            {getLocalizedField(personalInfo.slogan, language)}
          </p>
          <p className="text-base md:text-lg mb-8 leading-relaxed whitespace-pre-line">
            {getLocalizedField(personalInfo.about, language)}
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="font-medium w-24">{t.about.location}:</span>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">{getLocalizedField(personalInfo.location, language)}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">{t.about.email}:</span>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-primary-light dark:text-primary-dark hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">{t.about.phone}:</span>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">{personalInfo.phone}</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/myself/profile.jpg" 
              alt="Jake Xu" 
              className="aspect-square object-cover w-full"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">{t.about.education}</h3>
            <div className="space-y-4">
              {personalInfo.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold">{language === 'en' ? edu.school : edu.school_zh}</h4>
                      {edu.degree && <p className="text-text-secondary-light dark:text-text-secondary-dark">{language === 'en' ? edu.degree : edu.degree_zh}</p>}
                    </div>
                    <span className="text-sm text-primary-light dark:text-primary-dark font-medium">{edu.period}</span>
                  </div>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">{edu.location}</p>
                  <p className="text-sm font-medium">GPA: {edu.gpa}</p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{getLocalizedField(edu.description, language)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;