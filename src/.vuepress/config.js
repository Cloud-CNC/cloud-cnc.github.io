module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#383838' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'branding/favicon/192.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],
  title: 'Cloud CNC',
  themeConfig: {
    repo: 'cloud-cnc',
    editLinks: true,
    docsRepo: 'cloud-cnc/cloud-cnc.github.io',
    docsDir: 'source',
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
        text: 'Spectrum',
        ariaLabel: 'Spectrum',
        link: 'https://spectrum.chat/cloud-cnc'
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
            '/',
            '/comparison'
          ]
        }
      ],
    }
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/last-updated'
  ]
};