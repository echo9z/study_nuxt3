export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  // 响应客户端数据
  return { body }
})