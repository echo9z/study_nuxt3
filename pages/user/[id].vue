<!--
* @description /:id
* @fileName [id].vue
* @author echo9z
* @date 2022/09/16 13:19:16
!-->
<template>
  <div>
    <Title>user-{{$route.params.id }}</Title>
    user 详情 信息页
    <p>test 路由/user/{{ $route.params.id }}</p>
    {{ $route.params.id }}
    {{ $route.query }}
    <br>
    <button @click="enableCustomLayout">11111</button>
  </div>
</template>

<script setup lang='ts'>
// 动态修改公共模板组件
function enableCustomLayout () {
  setPageLayout('custom')
}
definePageMeta({
  // 禁止使用的 layout的
  layout: false,
  // 访问user/:id 会执行下面中间件，多个中间件，按数组的顺序执行
  middleware: ['redirect-user-by-id']
})
const route = useRoute()
console.log(route.params.id)
</script>

<style scoped>
</style>
