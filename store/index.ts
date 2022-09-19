// import { defineStore } from 'pinia' // nuxtjs.config中配置了自动加载
// 1.定义容器 并导出 容器
// defineStore函数有两个参数
// 参数1：容器的 ID，必须唯一，后续 Pinia 会把所有的容器挂载到根容器中，main根容器
// 参数2：选项对象
// 返回值：一个函数，得到容器实例
interface State {
  count: number;
  foo: string;
  arr: Array<number>;
}
export const useMainStore = defineStore('main', {
  /**
   * 类似于组件的 data，用来存储全局状态的
   * 1.必须是函数：这样是为在服务端渲染的时候避免交叉请求 导致的数据状态污染
   * 2.必须是箭头函数：为了更好的 TS 类型推导
   */
  // 2.使用容器中的state
  state: (): State => {
    return {
      count: 100,
      foo: 'bar',
      arr: [1, 2, 3]
    }
  },

  // 类似于组件的 computed，用来封装计算属性，有缓存功能
  getters: {
    // 函数接受一个可选参数：state 状态对象
    fullFoo (state) {
      // console.log(this);
      console.log(this === state);
      console.log('fullFoo 被调用了')
      return state.foo + "hello FOO"
    },
    // 在getter中使用 this 则必须使用指定返回值的类型
    getCount ():number {
      return this.count + 10
    }
  },

  // 3.容器中action的使用
  // 类似于组件的 method，封装业务逻辑，修改state中
  actions: {
    // 注意：不能使用箭头函数定义 actions，因为箭头函数绑定外部 this
    changeState (num:number) {
      // this 就好比当前 pinia 实例，通过this访问state中的数据
      // this.count++ 
      // this.foo = 'hell'
      // this.arr.push(5)
      // 在action中也可以使用 this.$patch({ ...其他逻辑 })
      // this.$patch(state => { ...其他逻辑 })
      this.count = num


      // patch批量的修改 和 普通的修改，区别在于 普通修改每修改一个属性就要更新一个视图，patch批量一次性把数据修改，再一次性修改视图，所有patch有利于性能修改的
    }
  }
})
