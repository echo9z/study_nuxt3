<!--
* @description hello
* @fileName index.vue
* @author echo9z
* @date 2022/09/18 20:02:21
!-->
<template>
  <div>hello</div>
  {{ $hello('world') }}
</template>

<script lang="ts" setup>
const { $hello } = useNuxtApp()
</script>
<style lang="less" scoped>
</style>
