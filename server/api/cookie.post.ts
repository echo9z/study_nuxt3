export default defineEventHandler((event) => {
  // 获取客户的提交的cookie信息
  const cookies = parseCookies(event)
  return { cookies }
})