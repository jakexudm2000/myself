export type Language = 'en' | 'zh-CN' | 'zh-TW';

export const translations = {
  'en': {
    // Navigation
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    // About section
    about: {
      title: "Hi, I'm Jake Xu",
      slogan: 'Senior Software Engineer specializing in distributed systems, Git kernel, and large-scale platform architecture',
      aboutText: `I'm a Senior Software Engineer with extensive experience in building and scaling large-scale distributed systems. 
I have a strong background in Git kernel development, storage systems, and high-availability architecture. 
Previously worked at Huawei and Tencent, leading the design and implementation of core systems that support millions of daily users.`,
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      education: 'Education',
    },
    // Experience section
    experience: {
      title: 'Work Experience',
      showProjects: 'Show Projects',
      hideProjects: 'Hide Projects',
    },
    // Projects section
    projects: {
      title: 'Featured Projects',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
    },
    // Skills section
    skills: {
      title: 'Skills & Expertise',
      programmingLanguages: 'Programming Languages',
      databases: 'Databases & Middleware',
      domainExpertise: 'Domain Expertise',
    },
    // Contact section
    contact: {
      title: 'Get In Touch',
      description: "I'm always open to discussing new projects, opportunities, or just having a chat. Feel free to reach out through any of the channels below.",
      visit: 'Visit',
      sendEmail: 'Send Email',
      copyright: 'All rights reserved.',
    },
  },
  'zh-CN': {
    // 导航
    nav: {
      about: '关于我',
      experience: '工作经历',
      projects: '项目作品',
      skills: '技能专长',
      contact: '联系我',
    },
    // 关于我部分
    about: {
      title: '你好，我是徐德明',
      slogan: '高级软件工程师，专注于分布式系统、Git内核和大规模平台架构',
      aboutText: `我是一名高级软件工程师，在构建和扩展大规模分布式系统方面拥有丰富的经验。
我精通Git内核开发、存储系统和高可用架构。
曾在华为和腾讯担任核心系统设计与实现工作，支撑数千万日活用户的稳定运行。`,
      location: '所在地',
      email: '邮箱',
      phone: '电话',
      education: '教育背景',
    },
    // 工作经历部分
    experience: {
      title: '工作经历',
      showProjects: '显示项目详情',
      hideProjects: '隐藏项目详情',
    },
    // 项目作品部分
    projects: {
      title: '代表项目',
      viewCode: '查看代码',
      liveDemo: '在线演示',
    },
    // 技能专长部分
    skills: {
      title: '技能专长',
      programmingLanguages: '编程语言',
      databases: '数据库与中间件',
      domainExpertise: '专业领域',
    },
    // 联系方式部分
    contact: {
      title: '联系我',
      description: '我始终愿意讨论新项目、机会或只是聊聊。可以通过以下任何渠道联系我。',
      visit: '访问',
      sendEmail: '发送邮件',
      copyright: '保留所有权利。',
    },
  },
  'zh-TW': {
    // 導航
    nav: {
      about: '關於我',
      experience: '工作經歷',
      projects: '專案作品',
      skills: '技能專長',
      contact: '聯絡我',
    },
    // 關於我部分
    about: {
      title: '你好，我是徐德明',
      slogan: '高級軟體工程師，專注於分散式系統、Git內核和大規模平台架構',
      aboutText: `我是一名高級軟體工程師，在構建和擴展大規模分散式系統方面擁有豐富的經驗。
我精通Git內核開發、儲存系統和高可用性架構。
曾在華為和騰訊擔任核心系統設計與實現工作，支撐數千萬日活用戶的穩定運行。`,
      location: '所在地',
      email: '郵箱',
      phone: '電話',
      education: '教育背景',
    },
    // 工作經歷部分
    experience: {
      title: '工作經歷',
      showProjects: '顯示專案詳情',
      hideProjects: '隱藏專案詳情',
    },
    // 專案作品部分
    projects: {
      title: '代表專案',
      viewCode: '查看程式碼',
      liveDemo: '線上演示',
    },
    // 技能專長部分
    skills: {
      title: '技能專長',
      programmingLanguages: '程式語言',
      databases: '資料庫與中介軟體',
      domainExpertise: '專業領域',
    },
    // 聯絡方式部分
    contact: {
      title: '聯絡我',
      description: '我始終願意討論新專案、機會或只是聊聊。可以通過以下任何管道聯絡我。',
      visit: '訪問',
      sendEmail: '發送郵件',
      copyright: '保留所有權利。',
    },
  },
};

export const getTranslation = (lang: Language) => translations[lang];