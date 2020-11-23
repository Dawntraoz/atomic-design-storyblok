export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Atomic Design | Storyblok',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Get Benefits Using Atomic Design in your Storyblok Headless CMS',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/components'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    [
      'storyblok-nuxt',
      {
        accessToken: '',
        cacheProvider: 'memory',
      },
    ],
  ],

  pwa: {
    meta: {
      theme_color: '#3B82F6',
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'EN',
      },
      {
        code: 'es',
        name: 'ES',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          services: 'Our services',
          team: 'Our team',
        },
        es: {
          services: 'Nuestros servicios',
          team: 'Nuestro equipo',
        },
      },
    },
    parsePages: false,
    pages: {
      '_slug/index': {
        en: '/:slug',
        es: '/:slug',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
