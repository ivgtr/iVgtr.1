// import { Configuration } from '@nuxt/types'
require('dotenv').config()
// interface OverConfiguration extends Configuration {
//   css?: any
// }
const env = {
  STAGE_ENV: process.env.STAGE_ENV,
  GA_KEY: process.env.GA_KEY
}

const config = {
  env,
  mode: 'universal',
  target: 'static',
  srcDir: 'src/',
  head: {
    title: process.env.npm_package_name || 'irotoridori',
    htmlAttrs: { lang: 'ja', prefix: 'og: http://ogp.me/ns#' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '世界の中身はここね'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'irotoridori' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ivgtr.me' },
      { hid: 'og:title', property: 'og:title', content: 'irotoridori' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Virtual Reality era begins'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://lh3.googleusercontent.com/D4SiydTja38u0dV9gfjR0CMWmSdV59qBYBQt6KuHl_Q8AUhJBIMOAuB-nmhyIHT8HvLFLZUpATz7XLAo6UxxF4jv2zSpv5N75mJ0vUr6p1Syf-UFQtYvAB58Y3KI8aiV1gnQ1ZC2mg=w1200'
      },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fcfc67' },
  css: [
    'ress',
    {
      src: '~/assets/styles/scss/styles.scss',
      lang: 'scss'
    }
  ],
  components: true,
  plugins: [],
  buildModules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ]
  ],
  tailwindcss: {
    configPath: '../tailwind.config.js',
    cssPath: '~/assets/styles/css/tailwind.css',
    exposeConfig: false
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    ['@nuxtjs/google-analytics', { id: process.env.GA_KEY }]
  ],
  manifest: {
    name: 'irotoridori',
    lang: 'ja'
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter', 'faGithub', 'faAmazon', 'faSteam']
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faBlog', 'faCoffee']
      }
    ]
  },
  styleResources: {
    scss: ['~/assets/styles/scss/functions.scss']
  },
  generate: {
    fallback: true
  },
  build: {},
  dotenv: {
    path: process.cwd()
  },
  router: {
    base: '/'
  }
}

export default config
