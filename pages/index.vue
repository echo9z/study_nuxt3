<!--
* @description 首页
* @fileName index.vue
* @author echo9z
* @date 2022/09/16 11:27:32
!-->
<template>
  <div>
    <h1>Index page</h1>
    <!-- 这里加载的静态资源 -->
    <img class="h-48 w-full object-cover md:h-full md:w-48"
      src="assets/images/king2.jpg" alt="">
    <hr>
    <img class="h-48 w-full object-cover md:h-full md:w-48"
      src="/images/king2.jpg" alt="">
    <Hello />
    <CustomHeader />
  </div>
</template>

<script setup lang='ts'>
// useFoo 将被按需自动引入，导入 composables
console.log(useFoo)

</script>
<style scoped>
</style>
