<!--
* @description goods
* @fileName goods.vue
* @author echo9z
* @date 2022/09/19 10:26:48
!-->
<template>
  <div>
    获取商品列表
    <ul >
      <li v-for="goods in goodsList" :key="goods.id">{{goods.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface goods {
  id: number
  name: string
}
// 请求接口
// const { data: goodsList } = await useAsyncData('goodslist', () => $fetch('/api/goods'))
// useFetch对 会阻塞，比如 从浏览器url / => /goods，会出现页面阻塞情况
// useLazyFetch 不会阻塞 页面视图的渲染不会等待数据返回在进行渲染
const { data: goodsList } = await useLazyFetch <goods[]> ('/api/goods')

console.log(goodsList)
</script>
<style lang="less" scoped>
</style>
