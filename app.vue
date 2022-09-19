<template>
  <NuxtLayout>
    <!-- 这里是公共布局 这里的NuxtLayout内容会插入到layouts的default组件中 -->
    <!-- page下的所有出口 这个相当于路由出口 -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// seo 中title keywords description
useHead({
  title: 'echo9z博客_web前端',
  titleTemplate: (productCategory) => { // 动态标题
    return productCategory
      ? `${productCategory} - Site Title`
      : 'Site Title'
  },
  htmlAttrs: {
    lang: 'zh-CN'
  },
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  charset: 'utf-8',
  // viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  meta: [
    { name: 'keywords', content: 'web前端,前端,JavaScript,HTML5,CSS3,Node,echo9z博客' },
    { name: 'description', content: 'echo9z博客,专注于Web前端技术文章分享,包含JavaScript、HTML5、CSS3等前端基础知识,以及Vue.js,React,Augular等前端框架' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    // 引入icon标签 这里的引入的是
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // { rel: 'stylesheet', href: 'https://unpkg.com/reset-css/reset.css' }
  ],
  bodyAttrs: { // 给body添加class属性
    // class: 'test'
  },
  // style: [], // 引入 style标签
  // 引入js文件
  script: [
    {
      type: 'text/javascript',
      src: '/js/a.js', // 从public中加载
      body: true // true插入到body最底部 false 插入head中
    }
  ]
})
</script>
