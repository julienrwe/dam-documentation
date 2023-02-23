import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { WebpackBundlerOptions } from '@vuepress/bundler-webpack/lib/types'

export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
  // site config
  base: "/dam-documentation/",
  lang: 'en-US',
  title: 'DAM documentation',
  description: 'Discover what Worldline\'s asset management platform based on the blockchain has to offer',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }], //favicon
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5AB5D3' }]
  ],
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo-light.png',
    logoDark: '/logo-dark.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'API doc', link: '/api' }
    ],
    sidebar: [
      { text: 'General', collapsible: true, children: [
        { text: 'Discover the DAM', link: '/general/#discover-the-dam',  children: [ 
          { text: 'Introduction to Blockchain', link: '/introduction-blockchain'} 
        ] },
        { text: 'Practical Usecases', collapsible: false, link: '/general/#practical-usecases', children: [
          { text: 'Tokenization', link: '/tokenization' }
        ] },
        { text: 'Usecases', link: '/general/#usecases' }
      ]},
      { text: 'Playbook', collapsible: true, children: [
        { text: 'Asset Management', link: '/playbook/#asset-management' },
        { text: 'Loyalty Programs', link: '/playbook/#loyatly' },
        { text: 'Organisation', link: '/playbook/#organisation' },
        { text: 'Wallet', link: '/playbook/#wallet' },
        { text: 'Transactions', link: '/playbook/#transactions' }
        ]},
      { text: 'Getting Started', collapsible: true, children: [
        { text: 'Authentication', link: '/getting-started/#authentication' },
        { text: 'API Endpoints', link: '/api' },
        { text: 'Examples', link: '/getting-started/#examples' },
        { text: 'API Limitation', link: '/getting-started/#api-limitation' }
      ]},
      { text: 'Support', collapsible: true, children: [
        { text: 'Best Pratices', link: '/support/#best-practices' },
        { text: 'Errors', link: '/support/#errors' },
        { text: 'FAQ', link: '/support/#faq' },
        { text: 'Versioning', link: '/support/#versioning' }
      ]},
    ],
    editLink: false,
    lastUpdated: false,
    contributors: false
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ]
  ],
  bundler: '@vuepress/bundler-webpack',
  bundlerConfig: {
    chainWebpack: config => {
      config.module
        .rule('yaml')
        .test(/\.ya?ml?$/)
        .use('json-loader')
        .loader('json-loader')
        .end()
        .use('yaml-loader')
        .loader('yaml-loader')
    }
  }
})
