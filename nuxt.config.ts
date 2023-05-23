import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxt/image-edge',
    'nuxt-swiper',
  ],
  build: {
    transpile: ["@vueform/slider"], // If you use nuxt you must transpile the module so it can be used universally
  },
  css: [
    '@/assets/styles/external/tailwind.css',
    '@/assets/styles/external/nuxt-icons.css',
  ],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    families: {
      'Work+Sans': [100,200,300,400,500,600,700,800,900],
      'Roboto': [100,400],
    },
  },
  content: {
    preload: ['json'],
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/svg',
      global: true
    },
  ],
  runtimeConfig: {
    public: {
      gaId: 'G-XXXXXXXX',
    },
  },
})
