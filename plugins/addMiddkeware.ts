export default defineNuxtPlugin(() => {
  // 通过 addRouteMiddleware 添加 全局的中间件 
  addRouteMiddleware('global-test', () => {
    console.log('this global middleware was added in a plugin and will be run on every route change')
  }, { global: true })

  // 在插件中相当于重写了named-test，就不会执行middleware中named-test.ts，相当于重写了named-test.ts，有就重写
  addRouteMiddleware('named-test', () => {
    console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  })
})