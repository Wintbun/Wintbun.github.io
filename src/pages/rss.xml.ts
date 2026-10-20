import rss from '@astrojs/rss'
import { getBlogCollection, sortMDByDate } from 'astro-pure/server'
import config from 'virtual:config'
export async function GET() { return rss({ title: config.title, description: config.description, site: import.meta.env.SITE, items: sortMDByDate(await getBlogCollection()).map(post => ({ title: post.data.title, description: post.data.description, pubDate: post.data.publishDate, link: '/blog/' + post.id })), customData: '<language>zh-CN</language>' }) }
