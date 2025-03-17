import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'GM Sli',
  description: 'About GM',
  base: '/gmsli/',
  head: [
    ['link', { rel: 'icon', href: '/The-Earth/favicon.ico' }],
  ],
  vite: {
    plugins: [
      Unocss(),
      webUpdateNotice({ logVersion: true }),
    ],
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      {
        items: [
          { text: '背景介绍', link: '/intro' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waaatanuki/The-Earth' },
    ],
    lastUpdated: {
      text: '最后更新于 ',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
})
