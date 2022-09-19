<!--
 * @description index
 * @fileName index.vue
 * @author echo9z
 * @date 2022/09/17 11:59:52
!-->
<template>
  <div>
    user index首页
    <div class="flex flex-row justify-center text-red-500">tailwind未构建依赖</div>
    <div class="flex flex-row justify-center text-green-500 font-bold">pages - index.vue</div>

    <!-- NuxtLink 不会刷新整个页面，a标签跳转会 -->
    <a href="/user/100">普通的a标签 user100</a>

    <ul>
      <li v-for="i in [1, 2, 3]" :key="i">
        <NuxtLink :to="{ path:`/user/${i}` }" target="_blank">user{{i}}</NuxtLink> <br>
      </li>
    </ul>

    <!-- <Button>123</Button> -->
    <div class="test rounded-lg">
      <button @click="goUser4">编程式跳转User/4</button>
    </div>
  </div>
</template>

<script lang='ts' setup>
const goUser4 = () => {
  navigateTo({
    path: '/user/4',
    query: {
      page: 1,
      sort: 'asc'
    }
  })
}
</script>
<style scoped>
.test {
  height: 60px;
  background-color: pink;
  width: 100px;

  /* a {
    color: skyblue;
  } */
}
</style>
