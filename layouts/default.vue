<!--
* @description layout
* @fileName default.vue
* @author echo9z
* @date 2022/09/17 17:43:00
!-->
<template>
  <div>
    <!-- layouts吓得default组件 <br> -->
    <header>
      <MyHeader />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <MyFooter />
    </footer>
  </div>
</template>

<script setup lang='ts'>

</script>
<style scoped>
</style>
