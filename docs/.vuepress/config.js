module.exports = {
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: 'New content is available.',
          buttonText: 'Refresh'
        },
        '/zh/': {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    }
  },
  base: '/generator-umi/',
  title: 'umi 中台助手',
  themeConfig: {
    repo: 'DFocusGroup/generator-umi',
    lastUpdated: '上次更新',
    nav: [{ text: '新手上路', link: '/guide/', ariaLabel: 'Guide' }],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'route', 'layout', 'locale', 'data', 'theme', 'packaging']
        }
      ]
    }
  }
}
