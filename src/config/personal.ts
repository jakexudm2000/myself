export type Language = 'en' | 'zh-CN' | 'zh-TW';

export const personalInfo = {
  name: 'Jake Xu',
  chineseName: '徐德明',
  location: {
    'en': 'Shenzhen / Dongguan, China',
    'zh-CN': '中国 深圳/东莞',
    'zh-TW': '中國 深圳/東莞',
  },
  phone: '+86 13005428811',
  email: 'jakexudm2000@outlook.com',
  github: '',
  slogan: {
    'en': 'Senior Software Engineer specializing in distributed systems, Git kernel, and large-scale platform architecture',
    'zh-CN': '高级软件工程师，专注于分布式系统、Git内核和大规模平台架构',
    'zh-TW': '高級軟體工程師，專注於分散式系統、Git內核和大規模平台架構',
  },
  about: {
    'en': `I'm a Senior Software Engineer with extensive experience in building and scaling large-scale distributed systems. 
I have a strong background in Git kernel development, storage systems, and high-availability architecture. 
Previously worked at Huawei and Tencent, leading the design and implementation of core systems that support millions of daily users.`,
    'zh-CN': `我是一名高级软件工程师，在构建和扩展大规模分布式系统方面拥有丰富的经验。
我精通Git内核开发、存储系统和高可用架构。
曾在华为和腾讯担任核心系统设计与实现工作，支撑数千万日活用户的稳定运行。`,
    'zh-TW': `我是一名高級軟體工程師，在構建和擴展大規模分散式系統方面擁有豐富的經驗。
我精通Git內核開發、儲存系統和高可用性架構。
曾在華為和騰訊擔任核心系統設計與實現工作，支撐數千萬日活用戶的穩定運行。`,
  },
  education: [
    {
      school: 'University of Wisconsin-Madison',
      school_zh: '威斯康星大学麦迪逊分校',
      degree: 'Bachelor of Science in Computer Science',
      degree_zh: '计算机科学学士',
      period: '2020.09 - 2021.12',
      location: 'USA',
      gpa: '4.0/4.0 (Dean List)',
      description: {
        'en': 'Transferred to complete the final two years of undergraduate studies',
        'zh-CN': '转学至此校完成本科最后两年学业',
        'zh-TW': '轉學至此校完成本科最後兩年學業',
      }
    },
    {
      school: 'Pennsylvania State University',
      school_zh: '宾夕法尼亚州立大学',
      period: '2018.08 - 2020.05',
      location: 'USA',
      gpa: '4.0/4.0 (Dean List)',
      description: {
        'en': 'First two years of undergraduate studies',
        'zh-CN': '本科前两年在此校就读',
        'zh-TW': '本科前兩年在此校就讀',
      }
    }
  ],
  experience: [
    {
      company: 'Huawei Technologies Co., Ltd.',
      company_zh: '华为技术有限公司',
      position: 'Senior Software Engineer',
      position_zh: '高级软件工程师',
      period: '2022.05 - Present',
      location: 'Shenzhen, China',
      location_zh: '中国深圳',
      description: {
        'en': "Responsible for R&D and architecture evolution of the company's core Git-based code hosting platform kernel layer, supporting stable operation of tens of millions of daily visits.",
        'zh-CN': '负责公司核心代码托管平台（基于Git）内核层的研发与架构演进，支撑日均千万级访问的稳定运行。',
        'zh-TW': '負責公司核心代碼托管平台（基於Git）內核層的研發與架構演進，支撐日均千萬級訪問的穩定運行。',
      },
      projects: [
        {
          title: 'Kernel Feature Development and Optimization',
          title_zh: '内核特性开发与优化',
          description: {
            'en': 'Led the design and development of multiple large features and kernel performance optimization. Designed and implemented Git transport layer ref filtering feature, extending the native HideRefs mechanism through invasive modification of Git kernel to support dynamic configuration. The solution supports fine-grained filtering of repository references during git-clone and git-push based on multi-dimensional user permissions, stably supporting large repositories with over 500,000 references with end-to-end filtering controlled at the second level.',
            'zh-CN': '主导多个大颗粒特性的方案设计与开发与内核的性能优化工作。设计并实现Git传输层引用(ref)过滤特性，通过侵入修改Git内核，扩展原生HideRefs机制并实现动态化配置。支持服务端在git-clone与git-push过程中，基于多维用户权限对仓库引用进行精细化过滤。方案具备高扩展性，稳定支撑超50万个引用的大型仓库，端到端过滤控制在秒级。',
            'zh-TW': '主導多個大顆粒特性的方案設計與開發與內核的效能優化工作。設計並實現Git傳輸層引用(ref)過濾特性，透過侵入修改Git內核，擴展原生HideRefs機制並實現動態化配置。支援服務端在git-clone與git-push過程中，基於多維用戶權限對倉庫引用進行精細化過濾。方案具備高擴展性，穩定支撐超50萬個引用的大型倉庫，端到端過濾控制在秒級。',
          },
          technologies: ['Git Kernel', 'C', 'Golang', 'Distributed Systems']
        },
        {
          title: 'System Architecture Evolution',
          title_zh: '系统架构演进',
          description: {
            'en': 'Led the design and implementation of distributed storage solution to remove NFS dependency at the kernel layer; promoted containerization and unitization transformation of kernel services. Reconstructed the original single-point cluster relying on shared storage into a highly available architecture with multi-node independent storage using Raft-based distributed consistency scheme combined with Git\'s proc-receive hook mechanism, achieving linear consistency of repository data across nodes and significantly improving system reliability and scalability.',
            'zh-CN': '主导内核层去NFS化的分布式存储方案设计与落地；推动内核服务容器化/单元化改造。带领内核团队完成Git存储层去NFS共享存储依赖的架构升级。设计并实现基于Raft算法的分布式一致性方案，结合Git的proc-receive钩子机制，将原有依赖共享存储的单点集群重构为多节点独立存储的高可用架构，实现各节点间仓库数据的线性一致性，显著提升系统可靠性与可扩展性。',
            'zh-TW': '主導內核層去NFS化的分散式儲存方案設計與落地；推動內核服務容器化/單元化改造。帶領內核團隊完成Git儲存層去NFS共享儲存依賴的架構升級。設計並實現基於Raft演算法的分散式一致性方案，結合Git的proc-receive鉤子機制，將原有依賴共享儲存的單點叢集重構為多節點獨立儲存的高可用架構，實現各節點間倉庫資料的線性一致性，顯著提升系統可靠性與可擴展性。',
          },
          technologies: ['Raft', 'Distributed Storage', 'NFS', 'Containerization']
        },
        {
          title: 'High Availability and Stability Assurance',
          title_zh: '高可用与稳定性保障',
          description: {
            'en': 'Participated in the implementation of Git transport layer read-write separation and repository-level disaster recovery switching scheme; optimized the current limiting capability of Git transport layer. Built a read-only cluster based on gRPC proxy module, achieving read-write separation with eventual consistency synchronization mechanism, successfully carrying 70% of Git clone traffic and significantly reducing the load on the main cluster.',
            'zh-CN': '参与落地Git传输层读写分离、仓库级容灾切换方案；优化Git传输层的限流能力。主导落地Git传输层读写分离与仓库级容灾切换方案。通过引入gRPC代理模块，屏蔽后端存储元数据，实现请求的智能路由与元数据自动填充，提升架构解耦程度。基于该模块构建只读集群，结合最终一致性同步机制实现读写分离，成功承载70%的Git克隆流量，显著降低主集群负载。',
            'zh-TW': '參與落地Git傳輸層讀寫分離、倉庫級災難復原切換方案；優化Git傳輸層的限流能力。主導落地Git傳輸層讀寫分離與倉庫級災難復原切換方案。透過引入gRPC代理模組，遮蔽後端儲存中繼資料，實現請求的智慧路由與中繼資料自動填充，提升架構解耦程度。基於該模組構建唯讀叢集，結合最終一致性同步機制實現讀寫分離，成功承載70%的Git複製流量，顯著降低主叢集負載。',
          },
          technologies: ['gRPC', 'High Availability', 'Disaster Recovery', 'Load Balancing']
        },
        {
          title: 'Ecosystem Cooperation and Migration',
          title_zh: '生态合作与迁移',
          description: {
            'en': 'Served as the technical core to cooperate with CSDN to build the GitCode code repository platform, supporting the migration of code repositories for multiple large ecosystem projects, and continued performance optimization for super-large repositories.',
            'zh-CN': '作为技术核心与CSDN合作搭建GitCode代码仓平台，支撑多个大型生态项目的代码仓库迁移，并对超大仓库进行持续性能优化。',
            'zh-TW': '作為技術核心與CSDN合作搭建GitCode代碼倉平台，支撐多個大型生態項目的代碼倉庫遷移，並對超大倉庫進行持續效能優化。',
          },
          technologies: ['Git', 'Platform Architecture', 'Performance Optimization']
        }
      ]
    },
    {
      company: 'Tencent Computer Systems Co., Ltd.',
      company_zh: '腾讯计算机系统有限公司',
      position: 'Operations Intern',
      position_zh: '运维实习生',
      period: '2020.06 - 2020.08',
      location: 'Shenzhen, China',
      location_zh: '中国深圳',
      description: {
        'en': 'Participated in Tencent Blue Whale R&D framework training and internal operation platform development in the IEG Interactive Entertainment Business Group.',
        'zh-CN': '在IEG互动娱乐事业群，参加腾讯蓝鲸研发框架的培训，并参与内部运维平台的开发。',
        'zh-TW': '在IEG互動娛樂事業群，參加騰訊藍鯨研發框架的培訓，並參與內部運維平台的開發。',
      },
      projects: [
        {
          title: 'Host Cluster Operation Management System',
          title_zh: '主机集群运营管理系统',
          description: {
            'en': 'Independently designed and developed a host cluster operation management system using Python and Django framework, realizing centralized monitoring and management of multiple large game server clusters, improving operation efficiency.',
            'zh-CN': '使用Python与Django框架，独立设计并开发了主机集群运营管理系统，实现了对多款大型游戏服务器集群的集中监控与管理，提升了运维效率。',
            'zh-TW': '使用Python與Django框架，獨立設計並開發了主機叢集運營管理系統，實現了對多款大型遊戲伺服器叢集的集中監控與管理，提升了運維效率。',
          },
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
    {
      title: {
        'en': 'CodeHub',
        'zh-CN': 'CodeHub',
        'zh-TW': 'CodeHub',
      },
      description: {
        'en': 'Huawei\'s full-stack self-developed code hosting platform, focusing on serving the internal R&D tool environment.',
        'zh-CN': '华为全栈自研的代码托管平台，专注服务于内部研发工具环境。',
        'zh-TW': '華為全棧自研的程式碼托管平台，專注服務於內部研發工具環境。',
      },
      technologies: ['Git Kernel', 'C', 'Golang', 'Distributed Systems'],
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop',
      githubUrl: '',
      demoUrl: '',
    },
    {
      title: {
        'en': 'CodeArtsRepo',
        'zh-CN': 'CodeArtsRepo',
        'zh-TW': 'CodeArtsRepo',
      },
      description: {
        'en': 'Huawei Public Cloud\'s full-stack self-developed code hosting platform.',
        'zh-CN': '华为公有云全栈自研的代码托管平台。',
        'zh-TW': '華為公有雲全棧自研的程式碼托管平台。',
      },
      technologies: ['Raft', 'Golang', 'Distributed Storage', 'High Availability'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      githubUrl: '',
      demoUrl: {
        'en': 'https://support.huaweicloud.com/intl/en-us/codeartsrepo/index.html',
        'zh-CN': 'https://support.huaweicloud.com/intl/zh-cn/codeartsrepo/index.html',
        'zh-TW': 'https://support.huaweicloud.com/intl/zh-cn/codeartsrepo/index.html',
      },
    },
    {
      title: {
        'en': 'GitCode',
        'zh-CN': 'GitCode',
        'zh-TW': 'GitCode',
      },
      description: {
        'en': 'Open-source code hosting platform built in cooperation with CSDN, with Huawei providing technical base support. Website: gitcode.com',
        'zh-CN': '与CSDN合作，华为提供技术底座支持，搭建的开源代码托管平台，网址为gitcode.com。',
        'zh-TW': '與CSDN合作，華為提供技術底座支持，搭建的開源程式碼托管平台，網址為gitcode.com。',
      },
      technologies: ['Git', 'Platform Architecture', 'Performance Optimization'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      githubUrl: '',
      demoUrl: 'https://gitcode.com',
    },
  ]
};

export const getLocalizedField = (obj: Record<Language, string> | string, lang: Language): string => {
  if (typeof obj === 'string') {
    return obj;
  }
  return obj[lang] || obj['en'];
};