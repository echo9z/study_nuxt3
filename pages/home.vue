<!--
* @fileName MyPage.vue
* @author echo9z
* @date 2022/09/16 11:34:16
!-->
<template>
  <div>
    <h2>123asd</h2>
    <button @click="counter++">+</button>
    {{ counter }}
    <button @click="counter--">-</button>
    <div @click="color='green'" class="h-50 w-100" :style="{backgroundColor: color}">1</div>
  </div>
</template>

<script setup lang='ts'>
// useState 创建响应式数据，是来替代 vue3中的 ref
const color = useState < string > ('color', () => 'pink')

// 此时可以利用nuxt的composables自动导入特性，把它们定义在composables目录中，这样他们将成为全局类型安全的状态。
const counter = useCounter()
</script>
<style scoped>

</style>
