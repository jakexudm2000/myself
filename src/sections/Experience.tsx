import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { personalInfo, getLocalizedField } from '../config/personal';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { language, t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-light/20 dark:bg-primary-dark/20 transform md:-translate-x-1/2" />

          {personalInfo.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 md:mb-24 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-light dark:bg-primary-dark border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm overflow-hidden">
                        <img 
                          src={exp.company === 'Huawei Technologies Co., Ltd.' 
                            ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Huawei_Logo.svg/2048px-Huawei_Logo.svg.png'
                            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Tencent_Logo.svg/2048px-Tencent_Logo.svg.png'
                          } 
                          alt={exp.company} 
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                          {language === 'en' ? exp.company : exp.company_zh}
                        </h3>
                        <p className="text-lg font-semibold">{language === 'en' ? exp.position : exp.position_zh}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                        {language === 'en' ? exp.location : exp.location_zh}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                    {getLocalizedField(exp.description, language)}
                  </p>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-primary-light dark:text-primary-dark hover:underline w-full justify-end"
                  >
                    {expandedIndex === index ? (
                      <>
                        {t.experience.hideProjects} <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        {t.experience.showProjects} <ChevronDown size={16} />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-4 space-y-4"
                      >
                        {exp.projects.map((project, projectIndex) => (
                          <div
                            key={projectIndex}
                            className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg"
                          >
                            <h4 className="font-semibold mb-2">
                              {language === 'en' ? project.title : project.title_zh}
                            </h4>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
                              {getLocalizedField(project.description, language)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;