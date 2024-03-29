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
  plugins: ['~/plugins/components', '~/plugins/preview.client.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@/modules/generator',
  ],

  router: {
    base: '/atomic-design-storyblok/',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    [
      '@storyblok/nuxt-2/module',
      {
        accessToken: process.env.API_KEY,
        cacheProvider: 'memory',
      },
    ],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://dawntraoz.github.io',
    gzip: true,
    trailingSlash: true,
  },

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
          servicesUrl: 'our-services',
          teamUrl: 'our-team',
          footer: {
            desc: 'Following atomic design will help you integrate your design with the frontend and backend.',
            internal: 'Internal links',
            social: 'Social media',
            contact: 'Contact',
          },
        },
        es: {
          services: 'Nuestros servicios',
          team: 'Nuestro equipo',
          servicesUrl: 'nuestros-servicios',
          teamUrl: 'nuestro-equipo',
          footer: {
            desc: 'Seguir Atomic Design te ayudará a integrar tu diseño con el frontend y el backend.',
            internal: 'Links internos',
            social: 'Social media',
            contact: 'Contacto',
          },
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
