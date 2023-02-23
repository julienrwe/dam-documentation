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
        { text: 'Discover the DAM', link: '/general/#title',  children: [ 
          { text: 'Introduction to Blockchain', link: '/introduction-blockchain'} 
        ] },
        { text: 'Pratical Usecases', collapsible: true, link: '/general', children: [
          { text: 'Tokenization' }
        ] },
        { text: 'Usecases', link: '/general' }
      ]},
      { text: 'Playbook', collapsible: true, children: [
        { text: 'Asset Management', link: '/playbook' },
        { text: 'Loyalty Programs', link: '/playbook' },
        { text: 'Organisation', link: '/playbook' },
        { text: 'Wallet', link: '/playbook' },
        { text: 'Transactions', link: '/playbook' }
        ]},
      { text: 'Getting Started', collapsible: true, children: [
        { text: 'Authentication', link: '/backofficetest/#login' },
        { text: 'API Endpoints', link: '/backofficetest/#my-profile' },
        { text: 'Examples', link: '/backofficetest/#acceptance-network-enrolment' },
        { text: 'API Limitation', link: '/backofficetest/#dashboard' }
      ]},
      { text: 'Support', collapsible: true, children: [
        { text: 'Best Pratices', link: '/general-rules/#password-policy' },
        { text: 'Errors', link: '/general-rules/#phone-number-management-rules' },
        { text: 'FAQ', link: '/general-rules/#pagination' },
        { text: 'Versioning', link: '/general-rules/#available-currencies' }
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
