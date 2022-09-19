<template>
  <div>
    <p>count:{{mainStore.count}}</p>
    <p>foo:{{mainStore.foo}}</p>
    <p>arr:{{mainStore.arr}}</p>
    <!-- getter是有缓存的，fullFoo中的打印结果只会输出一次 -->
    <p>使用getter：{{mainStore.fullFoo}}</p>
    <p>使用getter：{{mainStore.fullFoo}}</p>
    <p>使用getter：{{mainStore.fullFoo}}</p>

    <hr>
    <p>{{count}}</p>
    <p>{{foo}}</p>

    <hr>
    <p><button @click="changCount">修改count值</button></p>
  </div>
</template>

<!-- 这里使用 单文件组件 <script setup> -->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
// 加载 pinia 的 useMainStore函数
import { useMainStore } from '../store'

// 一、使用pinia 访问state数据
const mainStore = useMainStore()
console.log(mainStore)
// 通过实例直接访问state中的count 输入store中 state值
console.log(mainStore.count)

// 二、通过解构 访问state数据
// 可以将pinia中的 state数据结构出来，这是有问题，这样拿到的数据不是响应式的，是一次性的
// 如果 state中的count 和 foo值变化，不会影响视图的变化，原因是Pinia把state的数据做了reactive的处理，直接解构得到是一个是一个普通的对象属性
// const { foo,count } = mainStore

// 如何解决，通过pinia中的api，将foo和count解构的数据 代理为ref响应式对象
const { foo, count } = storeToRefs(mainStore) // 此时通过storeToRefs 转换为响应式数据

// 三、修改state中的数据
const changCount = () => {
  // 方式一：修改store的值
  mainStore.count++
  // count.value++ // 效果是一样的

  // 方式二：如果需要修改多个数据，建议使用$patch 批量更新，比如修改count 和 foo
  // $patch传入一个{}对象 一次性修改多个数据，批量更新有性能优化效果
  mainStore.$patch({
    count: mainStore.count + 5,
    foo: 'pinia',
    arr: [...mainStore.arr, 5] // 给arr数组中添加一个新元素 5
  }) // 上面修改数组不太方便

  // 方式三：通过$patch 传入一个回调，批量更新 推荐
  mainStore.$patch(state => { // 回调参数state就是pinia中state对象
    state.count += 5
    state.foo = 'hello pinia'
    state.arr.push(6)
  })

  // 方式四：处理逻辑较多的时候，可以调用pinia中 action方法，并传入参数
  mainStore.changeState(10)
}

</script>

<style scoped>
</style>
