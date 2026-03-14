# Jake's Personal Website

高级简约风格的个人技术展示网站，用于展示专业能力和项目经验。

## ✨ 特性
- 🎨 高级简约设计风格
- 🌓 支持浅色/深色模式切换
- 📱 完全响应式，适配所有设备
- ⚡ 极致性能，首屏加载<2秒
- 🎭 流畅的交互动画效果
- 🔍 SEO友好

## 🛠️ 技术栈
- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS 3
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **部署平台**: Vercel / Netlify

## 📦 项目结构
```
/
├── docs/               # 项目文档
│   └── 需求文档.md      # 详细需求说明
├── public/             # 静态资源
│   ├── images/         # 图片资源
│   └── favicon.ico     # 网站图标
├── src/
│   ├── components/     # 公共组件
│   ├── sections/       # 页面模块
│   │   ├── About.tsx   # 个人介绍
│   │   ├── Experience.tsx # 工作经历
│   │   ├── Projects.tsx # 项目作品集
│   │   ├── Skills.tsx  # 技能栈
│   │   └── Contact.tsx # 联系方式
│   ├── hooks/          # 自定义Hooks
│   ├── utils/          # 工具函数
│   ├── App.tsx         # 主应用组件
│   ├── main.tsx        # 入口文件
│   └── index.css       # 全局样式
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🚀 快速开始
### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:5173 查看效果

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📝 内容填充
所有个人内容都在 `src/config/` 目录下配置：
- `personal.ts` - 个人基本信息
- `experience.ts` - 工作经历
- `projects.ts` - 项目信息
- `skills.ts` - 技能栈配置

## 📄 License
MIT
