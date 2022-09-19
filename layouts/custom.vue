<!--
* @description  custom
* @fileName  custom.vue
* @author echo9z
* @date 2022/09/17 22:51:07
!-->
<template>
  <div>
    <!-- layouts下default组件 <br> -->
    <!-- <header>
      <slot name="header"></slot>
    </header> -->
    <!-- 文章头部 -->
    <slot name="art-header"></slot>
    <!-- 文章主体 -->
    <slot />
    <!-- 文章评论 -->
    <slot name="art-comment"></slot>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="less" scoped>
</style>
