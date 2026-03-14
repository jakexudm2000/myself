import { motion } from 'framer-motion';
import { personalInfo } from '../config/personal';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

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
            {t.about.title} <span className="text-primary-light dark:text-primary-dark"></span>
          </h1>
          <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-6">
            {t.about.slogan}
          </p>
          <p className="text-base md:text-lg mb-8 leading-relaxed whitespace-pre-line">
            {t.about.aboutText}
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="font-medium w-24">{t.about.location}:</span>
              <span className="text-text-secondary-light dark:text-text-secondary-dark">{personalInfo.location}</span>
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
            <div className="aspect-square bg-gradient-to-br from-primary-light/20 to-primary-dark/20 dark:from-primary-light/10 dark:to-primary-dark/10 flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
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
                      <h4 className="font-bold">{edu.school}</h4>
                      {edu.degree && <p className="text-text-secondary-light dark:text-text-secondary-dark">{edu.degree}</p>}
                    </div>
                    <span className="text-sm text-primary-light dark:text-primary-dark font-medium">{edu.period}</span>
                  </div>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-1">{edu.location}</p>
                  <p className="text-sm font-medium">GPA: {edu.gpa}</p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{edu.description}</p>
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