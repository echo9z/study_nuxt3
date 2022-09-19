export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const query = await useQuery(event)
  console.log(query);
  // 响应客户端数据
  return { body, query }
})