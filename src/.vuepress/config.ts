/**
 * @fileoverview Vuepress config
 */

//Imports
import {DefaultThemeOptions, defineUserConfig} from 'vuepress';

//Export
export default defineUserConfig<DefaultThemeOptions>({
  title: 'Cloud CNC',
  description: 'Documentation for Cloud CNC',
  head: [
    ['link', {rel: 'icon', href: '/icon-dark.png'}],
    ['meta', {name: 'theme-color', content: '#191919'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
  ],
  themeConfig: {
    contributors: true,
    docsDir: 'src',
    docsRepo: 'cloud-cnc/cloud-cnc.github.io',
    editLinks: true,
    lastUpdated: true,
    logo: '/icon-dark.png',
    repo: 'cloud-cnc',
    navbar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Docs',
        link: '/docs/'
      }
    ],
    sidebar: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/',
        children: [
          '/guide/quick-start.md'
        ]
      },
      {
        text: 'Docs',
        link: '/docs/',
        children: [
          '/docs/repos.md'
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-palette',
      {
        preset: 'sass',
        importCode: (filePath: string) => `@import '${filePath}';\n`
      }
    ]
  ]
});