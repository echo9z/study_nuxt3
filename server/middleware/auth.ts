// server服务端的中间件，即用户请求任何url，都会执行auth和login中间件
// 这里的中间件执行的顺序是 26字母，倒序执行 z 最先执行中间件，最后执行a开头中间件
export default defineEventHandler((event) => {
  console.log('auto');
  event.context.auth = { user: 123 }
})