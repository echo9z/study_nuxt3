import { Config } from 'tailwindcss'
export default <Config> {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    "./nuxt.config.{js,ts}",
    // './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
