export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    // return abortNavigation()- 停止当前导航
    // return abortNavigation(error)- 拒绝当前导航并出现错误
    return abortNavigation()
  }
  // return navigateTo('/')
})