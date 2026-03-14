import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';
import { personalInfo } from '../config/personal';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

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

  const skillCategories = [
    { title: t.skills.programmingLanguages, icon: Code, skills: personalInfo.skills.programmingLanguages },
    { title: t.skills.databases, icon: Database, skills: personalInfo.skills.databases },
    { title: t.skills.domainExpertise, icon: Server, skills: personalInfo.skills.expertise },
  ];

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.skills.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-light to-primary-dark rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;