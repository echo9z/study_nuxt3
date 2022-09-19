<!--
* @description 三级路由
* @fileName Aside.vue
* @author echo9z
* @date 2022/09/18 13:07:42
!-->
<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/article">文章中心</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/article/order">文章订单</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/article/logistics">物流信息</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>
<style lang="less" scoped>
</style>
