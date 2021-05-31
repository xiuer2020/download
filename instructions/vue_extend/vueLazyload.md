# 安装
$ npm i vue-lazyload -S
 
# 使用
https://unpkg.com/vue-lazyload/vue-lazyload.js
<!-- CDN  -->
import Vue from 'vue'
import App from './App.vue'
import VueLazeload form 'vue-lazyload'
Vue.use(VueLazyload)
<!-- es6 -->

# 全局配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  <!-- 预加载 -->
  error: 'dist/error.png',
  <!-- 错误显示 -->
  loading: 'dist/loading.gif',
  <!-- 加载显示 -->
  attempt: 1,
  <!-- 尝试 -->
  'animationend', 'transitionend']
  <!-- 动画 -->
  listenEvents: [ 'scroll' ],
  <!-- 监听器 -->

  adapter: {
      loaded ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
          // do something here
          // example for call LoadedHandler
          LoadedHandler(el)
      },
      loading (listender, Init) {
          console.log('loading')
      },
      error (listender, Init) {
          console.log('error')
      }
  },
  filter: {
    progressive (listener, options) {
      const isCDN = /qiniudn.com/
      if (isCDN.test(listener.src)) {
          listener.el.setAttribute('lazy-progressive', 'true')
          listener.loading = listener.src + '?imageView2/1/w/10/h/10'
      }
  },
  webp (listener, options) {
    if (!options.supportWebp) return
    const isCDN = /qiniudn.com/
    if (isCDN.test(listener.src)) {
        listener.src += '?imageView2/2/format/webp'
    }
  },
  observer: true,
  
})

<ul>
  <li v-for="img in list">
    <img v-lazy="img.src" >
  </li>
</ul>


# 使用v-lazy-container处理原始HTML
<div v-lazy-container="{ selector: 'img' }">
  <img data-src="//domain.com/img1.jpg">
  <img data-src="//domain.com/img2.jpg">
  <img data-src="//domain.com/img3.jpg">  
</div>

# 自定义错误和加载占位符图像
<div v-lazy-container="{ selector: 'img', error: 'xxx.jpg', loading: 'xxx.jpg' }">
  <img data-src="//domain.com/img1.jpg">
  <img data-src="//domain.com/img2.jpg">
  <img data-src="//domain.com/img3.jpg">  
</div>
<div v-lazy-container="{ selector: 'img' }">
  <img data-src="//domain.com/img1.jpg" data-error="xxx.jpg">
  <img data-src="//domain.com/img2.jpg" data-loading="xxx.jpg">
  <img data-src="//domain.com/img3.jpg">  
</div>






Vue.use(vueLazy, {
  // set observer to true
  
 
  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})
Lazy Component
Vue.use(VueLazyload, {
  lazyComponent: true
});
<lazy-component @show="handler">
  <img class="mini-cover" :src="img.src" width="100%" height="400">
</lazy-component>
 
<script>
  {
    ...
    methods: {
      handler (component) {
        console.log('this component is showing')
      }
    }
 
  }
</script> 
Implementation
Basic
vue-lazyload will set this img element's src with imgUrl string

<script>
export default {
  data () {
    return {
      imgObj: {
        src: 'http://xx.com/logo.png',
        error: 'http://xx.com/error.png',
        loading: 'http://xx.com/loading-spin.svg'
      },
      imgUrl: 'http://xx.com/logo.png' // String
    }
  }
}
</script> 
 
<template>
  <div ref="container">
     <img v-lazy="imgUrl"/>
     <div v-lazy:background-image="imgUrl"></div>
 
     <!-- with customer error and loading -->
     <img v-lazy="imgObj"/>
     <div v-lazy:background-image="imgObj"></div>
 
     <!-- Customer scrollable element -->
     <img v-lazy.container ="imgUrl"/>
     <div v-lazy:background-image.container="img"></div>
 
    <!-- srcset -->
    <img v-lazy="'img.400px.jpg'" data-srcset="img.400px.jpg 400w, img.800px.jpg 800w, img.1200px.jpg 1200w">
    <img v-lazy="imgUrl" :data-srcset="imgUrl' + '?size=400 400w, ' + imgUrl + ' ?size=800 800w, ' + imgUrl +'/1200.jpg 1200w'" />
  </div>
</template>
CSS state
There are three states while img loading

loading loaded error

<img src="imgUrl" lazy="loading">
<img src="imgUrl" lazy="loaded">
<img src="imgUrl" lazy="error">
<style>
  img[lazy=loading] {
    /*your style here*/
  }
  img[lazy=error] {
    /*your style here*/
  }
  img[lazy=loaded] {
    /*your style here*/
  }
  /*
  or background-image
  */
  .yourclass[lazy=loading] {
    /*your style here*/
  }
  .yourclass[lazy=error] {
    /*your style here*/
  }
  .yourclass[lazy=loaded] {
    /*your style here*/
  }
</style> 
Methods
Event Hook
vm.$Lazyload.$on(event, callback) vm.$Lazyload.$off(event, callback) vm.$Lazyload.$once(event, callback)

$on Listen for a custom events loading, loaded, error
$once Listen for a custom event, but only once. The listener will be removed once it triggers for the first time.
$off Remove event listener(s).
vm.$Lazyload.$on
Arguments:
{string} event
{Function} callback
Example
vm.$Lazyload.$on('loaded', function ({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error }, formCache) {
  console.log(el, src)
})
vm.$Lazyload.$once
Arguments:
{string} event
{Function} callback
Example
vm.$Lazyload.$once('loaded', function ({ el, src }) {
  console.log(el, src)
})
vm.$Lazyload.$off
If only the event is provided, remove all listeners for that event

Arguments:
{string} event
{Function} callback
Example
function handler ({ el, src }, formCache) {
  console.log(el, src)
}
vm.$Lazyload.$on('loaded', handler)
vm.$Lazyload.$off('loaded', handler)
vm.$Lazyload.$off('loaded')
LazyLoadHandler
vm.$Lazyload.lazyLoadHandler

Manually trigger lazy loading position calculation

Example
 
this.$Lazyload.lazyLoadHandler()
 
Performance
this.$Lazyload.$on('loaded', function (listener) {
  console.table(this.$Lazyload.performance())
})
performance-demo

Dynamic switching pictures
 <img v-lazy="lazyImg" :key="lazyImg.src">