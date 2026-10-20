import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'
export const theme: ThemeUserConfig = {
  title: '不会游泳的兔子',
  author: '不会游泳的兔子',
  description: '记录生活、学习与思考，也收藏值得再次打开的网站。不会游泳的兔子的个人博客与网站导航。',
  favicon: '/rabbit.svg',
  socialCard: '/rabbit.svg',
  locale: { lang: 'zh-CN', attrs: 'zh_CN', dateLocale: 'zh-CN', dateOptions: { year: 'numeric', month: 'long', day: 'numeric' } },
  logo: { src: '/src/assets/avatar.png', alt: '不会游泳的兔子' },
  titleDelimiter: '·', prerender: true, npmCDN: 'https://cdn.jsdelivr.net/npm', head: [], customCss: [],
  header: { menu: [
    { title: '文章', link: '/blog' }, { title: '网站导航', link: '/links' }, { title: '关于', link: '/about' }
  ] },
  footer: { year: '© 2026', links: [], credits: true, social: [{ icon: 'rss', label: 'RSS 订阅', href: '/rss.xml' }] },
  content: { externalLinks: { content: ' ↗', properties: { style: 'user-select:none' } }, blogPageSize: 8, share: [] }
}
export const integ: IntegrationUserConfig = {
  links: { logbook: [], applyTip: [], cacheAvatar: false },
  pagefind: true,
  quote: { server: '', target: '' },
  typography: { class: 'prose text-base', blockquoteStyle: 'normal', inlineCodeBlockStyle: 'modern' },
  mediumZoom: { enable: true, selector: '.prose .zoomable', options: { className: 'zoomable' } },
  waline: { enable: false, showMeta: false, additionalConfigs: {} }
}
export const terms = { title: '', list: [] }
const config = { ...theme, integ } as Config
export default config
