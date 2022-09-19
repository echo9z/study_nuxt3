interface goods {
  id: number
  name: string
}
export default defineEventHandler( async (event) => {
  // 获取客户的提交的cookie信息
  const goodsList: Array<goods> = []
  for (let i = 0; i < 20; i++) {
    goodsList.push({
      id: i+1,
      name: `goods${i}`
    })
  }
  return await new Promise(resole => {
    // 模拟异步请求，等等待2秒返回数据
    setTimeout(() => {
      resole(goodsList)
    }, 2000)
  })
})