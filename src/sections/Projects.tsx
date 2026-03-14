import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github as GithubIcon, X } from 'lucide-react';
import { personalInfo } from '../config/personal';
import { useLanguage } from '../context/LanguageContext';

const placeholderProjects = [
  {
    title: 'Git Kernel Optimization',
    description: 'Performance optimization for Git kernel, supporting 500k+ references with sub-second filtering latency.',
    technologies: ['C', 'Golang', 'Git', 'Distributed Systems'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop',
    githubUrl: '',
    demoUrl: '',
  },
  {
    title: 'Distributed Git Storage System',
    description: 'Highly available distributed Git storage system based on Raft consensus algorithm, removing NFS dependency.',
    technologies: ['Raft', 'Golang', 'Distributed Storage', 'High Availability'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    githubUrl: '',
    demoUrl: '',
  },
  {
    title: 'GitCode Platform',
    description: 'Collaborated with CSDN to build GitCode code hosting platform, supporting large-scale repository migration and optimization.',
    technologies: ['Git', 'Platform Architecture', 'Performance Optimization'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    githubUrl: '',
    demoUrl: '',
  },
  {
    title: 'Host Cluster Management System',
    description: 'Centralized monitoring and management system for large game server clusters, improving operational efficiency.',
    technologies: ['Python', 'Django', 'Vue.js', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
    githubUrl: '',
    demoUrl: '',
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const projects = personalInfo.projects.length > 0 ? personalInfo.projects : placeholderProjects;

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="section-title">{t.projects.title}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => setSelectedProject(index)}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={16} />
                    <span>{t.projects.viewCode}</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span>{t.projects.liveDemo}</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white z-10"
                >
                  <X size={20} />
                </button>
                
                <div className="aspect-video w-full">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h3>
                  
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6">
                    {projects[selectedProject].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[selectedProject].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {projects[selectedProject].githubUrl && (
                      <a
                        href={projects[selectedProject].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary flex items-center gap-2"
                      >
                        <GithubIcon size={16} />
                        {t.projects.viewCode}
                      </a>
                    )}
                    {projects[selectedProject].demoUrl && (
                      <a
                        href={projects[selectedProject].demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        {t.projects.liveDemo}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;