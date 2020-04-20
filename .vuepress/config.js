module.exports = {
  title: 'Cloud CNC',
  themeConfig: {
    repo: 'cloud-cnc/cloud-cnc.github.io',
    editLinks: true,
    smoothScroll: true,
    nav: [
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
      },
      {
        text: 'Repos',
        ariaLabel: 'Repos',
        items: [
          {
            text: 'Controller',
            link: 'https://github.com/cloud-cnc/controller'
          },
          {
            text: 'Core',
            link: 'https://github.com/cloud-cnc/core'
          },
          {
            text: 'Frontend',
            link: 'https://github.com/cloud-cnc/frontend'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          depth: 2,
          children: [
            '/guide/',
            '/guide/setup'
          ]
        }
      ],
      '/docs/': [
        {
          title: 'Docs',
          collapsable: false,
          depth: 2,
          children: [
            '/docs/',
            '/docs/permissions',
            '/docs/http-api',
            '/docs/websocket-api'
          ]
        }
      ],
      '/': [
        {
          title: 'Home',
          collapsable: false,
          children: [
            '/'
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    '@vuepress/pwa'
  ]
};