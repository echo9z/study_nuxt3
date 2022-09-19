<!--
* @description 公共头部组件
* @fileName header.vue
* @author echo9z
* @date 2022/09/17 17:59:34
!-->
<template>
  <div>
    <header>
      <NuxtLink class="p-6" to="/" >首页</NuxtLink>
      <NuxtLink class="p-6" to="/user" >用户</NuxtLink>
      <NuxtLink class="p-6" to="/article" >文章</NuxtLink>
      <NuxtLink class="p-6" to="/goods" >商品列表</NuxtLink>
      <NuxtLink class="p-6" to="/pinia" >PiniaView</NuxtLink>
    </header>
  </div>
</template>

<script setup lang="ts">

</script>
<style lang="less" scoped>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: pink;
  }
</style>
