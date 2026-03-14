export const personalInfo = {
  name: 'Jake Xu',
  chineseName: '徐德明',
  location: 'Shenzhen / Dongguan, China',
  phone: '+86 13005428811',
  email: 'jakexudm2000@outlook.com',
  github: '', // TODO: Add GitHub URL
  linkedin: '', // TODO: Add LinkedIn URL
  slogan: 'Senior Software Engineer specializing in distributed systems, Git kernel, and large-scale platform architecture',
  about: `I'm a Senior Software Engineer with extensive experience in building and scaling large-scale distributed systems. 
    I have a strong background in Git kernel development, storage systems, and high-availability architecture. 
    Previously worked at Huawei and Tencent, leading the design and implementation of core systems that support millions of daily users.`,
  education: [
    {
      school: 'University of Wisconsin-Madison',
      degree: 'Bachelor of Science in Computer Science',
      period: '2020.09 - 2021.12',
      location: 'USA',
      gpa: '4.0/4.0',
      description: 'Transferred to complete the final two years of undergraduate studies'
    },
    {
      school: 'Pennsylvania State University',
      period: '2018.08 - 2020.05',
      location: 'USA',
      gpa: '4.0/4.0 (Dean List)',
      description: 'First two years of undergraduate studies'
    }
  ],
  experience: [
    {
      company: 'Huawei Technologies Co., Ltd.',
      position: 'Senior Software Engineer',
      period: '2022.05 - Present',
      location: 'Shenzhen, China',
      description: 'Responsible for R&D and architecture evolution of the company\'s core Git-based code hosting platform kernel layer, supporting stable operation of tens of millions of daily visits.',
      projects: [
        {
          title: 'Kernel Feature Development and Optimization',
          description: 'Led the design and development of multiple large features and kernel performance optimization. Designed and implemented Git transport layer ref filtering feature, extending the native HideRefs mechanism through invasive modification of Git kernel to support dynamic configuration. The solution supports fine-grained filtering of repository references during git-clone and git-push based on multi-dimensional user permissions, stably supporting large repositories with over 500,000 references with end-to-end filtering controlled at the second level.',
          technologies: ['Git Kernel', 'C', 'Golang', 'Distributed Systems']
        },
        {
          title: 'System Architecture Evolution',
          description: 'Led the design and implementation of distributed storage solution to remove NFS dependency at the kernel layer; promoted containerization and unitization transformation of kernel services. Reconstructed the original single-point cluster relying on shared storage into a highly available architecture with multi-node independent storage using Raft-based distributed consistency scheme combined with Git\'s proc-receive hook mechanism, achieving linear consistency of repository data across nodes and significantly improving system reliability and scalability.',
          technologies: ['Raft', 'Distributed Storage', 'NFS', 'Containerization']
        },
        {
          title: 'High Availability and Stability Assurance',
          description: 'Participated in the implementation of Git transport layer read-write separation and repository-level disaster recovery switching scheme; optimized the current limiting capability of Git transport layer. Built a read-only cluster based on gRPC proxy module, achieving read-write separation with eventual consistency synchronization mechanism, successfully carrying 70% of Git clone traffic and significantly reducing the load on the main cluster.',
          technologies: ['gRPC', 'High Availability', 'Disaster Recovery', 'Load Balancing']
        },
        {
          title: 'Ecosystem Cooperation and Migration',
          description: 'Served as the technical core to cooperate with CSDN to build the GitCode code repository platform, supporting the migration of code repositories for multiple large ecosystem projects, and continued performance optimization for super-large repositories.',
          technologies: ['Git', 'Platform Architecture', 'Performance Optimization']
        }
      ]
    },
    {
      company: 'Tencent Computer Systems Co., Ltd.',
      position: 'Operations Intern',
      period: '2020.06 - 2020.08',
      location: 'Shenzhen, China',
      description: 'Participated in Tencent Blue Whale R&D framework training and internal operation platform development in the IEG Interactive Entertainment Business Group.',
      projects: [
        {
          title: 'Host Cluster Operation Management System',
          description: 'Independently designed and developed a host cluster operation management system using Python and Django framework, realizing centralized monitoring and management of multiple large game server clusters, improving operation efficiency.',
          technologies: ['Python', 'Django', 'Vue.js', 'Blue Whale PaaS']
        }
      ]
    }
  ],
  skills: {
    programmingLanguages: [
      { name: 'Golang', level: 95 },
      { name: 'Shell', level: 90 },
      { name: 'C', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Java', level: 70 },
      { name: 'C++', level: 70 },
      { name: 'Lua', level: 65 }
    ],
    databases: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Kafka', level: 75 }
    ],
    expertise: [
      { name: 'Git Kernel', level: 95 },
      { name: 'Distributed Systems', level: 90 },
      { name: 'gRPC', level: 85 },
      { name: 'HTTPS', level: 85 },
      { name: 'NFS v3', level: 80 },
      { name: 'S3', level: 80 },
      { name: 'High Availability Architecture', level: 90 }
    ]
  },
  projects: [
    // TODO: Add public projects
  ]
};
