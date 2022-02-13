export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DepressOut',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Blog o depresji dla każdego',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
        sizes: '180x180',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'mask-icon',
        href: '//safari-pinned-tab.svg',
        color: '//#endregion5bbad5',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/mixins/clickaway' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    '~/components',
    { path: '~/components/sections', extensions: ['vue'] },
    { path: '~/components/buttons', extensions: ['vue'] },
    { path: '~/components/global', extensions: ['vue'] },
    { path: '~/components/headers', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/setup/
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },

  googleAnalytics: {
    id: process.env.ANALYTICS_ID, // Use as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.ANALYTICS_ID,
    },
  },

  content: {
    liveEdit: false,
  },
}
