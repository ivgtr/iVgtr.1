require('dotenv').config()

const config = {
  target: 'static',

  srcDir: 'src/',

  head: {
    title: 'irotoridori',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fcfc67' },

  css: [
    'ress',
    {
      src: '~/assets/styles/styles.scss',
      lang: 'scss'
    }
  ],

  plugins: [],

  components: true,

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

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
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

  tailwindcss: {
    configPath: '../tailwind.config.js',
    cssPath: '~/assets/styles/css/tailwind.css',
    exposeConfig: false
  },

  styleResources: {
    scss: ['~/assets/styles/functions.scss']
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
