export default defineNuxtPlugin(() => {
  return {
    provide: {
      // 执行的中间件
      hello: (msg: string) => `Hello ${msg} 我是hello的插件!`
    }
  }
})