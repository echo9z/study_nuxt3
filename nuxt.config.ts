// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 这里会全局引入所有样式，不是我们所希望的按需加载
  // css: ['ant-design-vue/dist/antd.css'],
  // css: [],// 全局样式添加在此处

  alias: {
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public"
  },
  build: {},

  buildModules: [],
  
  modules: [
    // VueUse
    '@vueuse/nuxt',
    // tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ]
  ],
})
