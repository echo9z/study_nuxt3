// server服务端的中间件，即用户请求任何url，都会执行auth和login中间件
export default defineEventHandler((event) => {
  console.log('x');
  event.context.auth = { user: 'cccc' }
})