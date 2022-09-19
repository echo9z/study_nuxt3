// 执行的是在 服务端执行的
export default defineEventHandler((event) => {
  console.log('New request: ' + event.req.url)
})
