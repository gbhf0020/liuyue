// 文件路径: c:\Users\HAPPY\liuyue\src\config\projects.ts

// 类型定义
export type ProjectItemType = {
  name: string // 项目名称
  description: string // 项目描述
  link: { href: string; label: string } // 链接对象，包含链接地址和标签
  tags: string[] // 标签数组
}

export type ActivityItemType = {
  name: string // 活动名称
  description: string // 活动描述
  date: string // 活动日期
  location: string // 活动地点
  link?: string // 可选的活动链接
}

// 奖项
export const awardsHeadLine = "奖项与荣誉"
export const awardsIntro = "学术和职业成就的认可。"

export const awards: Array<ActivityItemType> = [
  {
    name: '杰出教师奖',
    description: '',
    date: '2024',
    location: 'SCLS, 上海',
  },
  {
    name: '追影奖',
    description: '',
    date: '2023',
    location: '青浦, 上海',
  },
]

// 研究与项目
export const projectHeadLine = "研究与项目"
export const projectIntro = "我参与的学术研究和技术项目。"

export const projects: Array<ProjectItemType> = [
  {
    name: '学生毕业项目作品集',
    description: '静态网站作品集',
    link: { href: 'scls-cs.com', label: 'GitHub 卡片' },
    tags: ['网站', 'Next.js', 'TailwindCSS', 'DaisyUI', '作品集']
  },
  {
    name: '寻找 DNA',
    description: '2022 SCLS 黑客马拉松',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: '黑客马拉松' },
    tags: ['黑客马拉松', 'Java']
  },
  {
    name: '德州扑克裁判',
    description: '2024 SCLS 黑客马拉松',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: '黑客马拉松' },
    tags: ['黑客马拉松']
  },
  {
    name: 'AI 营课程开发',
    description: '为高中生开发了一套全面的 AI 课程，结合了真实项目和创业概念。',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: '查看课程' },
    tags: ['教育', 'AI']
  },
]

// 爱好与志愿活动
export const activitiesHeadLine = "爱好与志愿活动"
export const activitiesIntro = "个人兴趣与社区贡献。"

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python 工作坊',
    description:
      '教授初学者 Python 编程基础概念，涵盖变量、控制流和函数。',
    date: '2024-02-24',
    location: '上海',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI 伦理讨论',
    description:
      '关于 AI 开发的伦理影响及其对社会影响的小组讨论。',
    date: '2024-03-01',
    location: '上海',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: '代码审查会',
    description:
      '通过同伴代码审查和最佳实践分享，帮助学生提高编程技能。',
    date: '2024-03-15',
    location: '上海',
  },
]