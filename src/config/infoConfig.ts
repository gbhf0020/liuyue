export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '流月'
export const headline = '拾光碎影'
export const introduction =
  "流萤绕砌夜初静，月满西楼梦正酣。"
export const email = 'gbhf0020.gmail.com'
export const githubUsername = 'gbhf0020'

// about page
export const aboutMeHeadline = '关于流月'
export const aboutParagraphs = [
  "普普通通的中学生",
  '希望学习更多的编程知识和计算机科学知识',
  '仅此而已'
]

// blog
export const blogHeadLine = "我的博客" 
export const blogIntro =
  "访问https://gbhf0020.github.io阅读博客。" 
  

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHUb',
    icon: 'github',
    href: 'https://github.com/gbhf0020',
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://twitter.com/gbhf0020',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
  'dji'
]
