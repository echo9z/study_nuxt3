<!--
* @description 文章
* @fileName index.vue
* @author echo9z
* @date 2022/09/18 12:34:17
!-->
<template>
  <div class="flex space-x-5 items-center">
    <!-- 这个是 /article -->
    <div>
      <Aside/>
    </div>
    <div>
      <!-- 指定使用 custom模板 -->
      <NuxtLayout name="custom">
        <template #art-header> 头部组件 </template>
        <!-- 插入默认插槽 -->
        <!-- 这里相当于二级出口 /article/order 等等路由 -->
        <NuxtPage />

        <template #art-comment> 评论组件 </template>
      </NuxtLayout>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 定义的元数据信息，只能在 /article路由下获取数据信息
definePageMeta({
  //   // 禁止使用的 layout的
  //   layout: false
  // 通定向url 当访问 /article 会执行重定向到 middleware/redirect.ts
  // middleware: 'redirect'
  title: 'My art page'
})

</script>
<style lang="less" scoped>
</style>
