https://cn.vuejs.org/v2/guide/

# 快速上手
[1]npm install -g @vue/cli
[2]vue ui
[3]项目根目录下 npm run serve

# 安装
语义化版本控制规范: https://semver.org/lang/zh-CN/

对不同构建版本的解释: https://cn.vuejs.org/v2/guide/installation.html

# 介绍
Vue.js 是什么: Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架

与自定义元素的关系: Web Components 规范已经完成并通过，但未被所有浏览器原生实现. 
1.Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致
2.Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。

# 生命周期
1)[beforeCreate] [无参数] [可以获取this]
<!-- 创建前 初始化事件和生命周期 -->
域名 https://blog.csdn.net/yangkaige111/article/details/84349333
2)created
<!-- 创建后 注入和反应性 -->
域名 https://blog.csdn.net/yangkaige111/article/details/84349333
3-1)
3-2)通知vm.$mount(el)
4-1)beforeMount
<!-- 被挂载前 编译模板进渲染函数 -->
4-2)beforeMount
<!-- 被挂载前 编译el作为模板 -->
5)mouted
<!-- 挂载后 用它创建实例并替代el -->
6-1)beforeUpdate
<!-- 数据更新前 -->
6-1-1)updated
<!-- 数据更新后 -->
6-2)beforeDestroy
<!-- 实例销毁前 -->
6-2-1)destroyed
<!-- 实例销毁 拆卸观察者 子组件 和 事件监听器 -->

# 全局异步组件
Vue.component('component-a', () => import('path') )

# 处理边界情况
https://cn.vuejs.org/v2/guide/components-edge-cases.html

# 过度 JavaScript 钩子
[beforeEnter, enter, afterEnter, enterCancelled, beforeLeave, leave, afterLeave, leaveCancelled]

# 状态过渡
https://cn.vuejs.org/v2/guide/transitioning-state.html

# 渲染函数
https://cn.vuejs.org/v2/guide/render-function.html

# 插件
一般有下面几种：
添加全局方法或者 property。如：vue-custom-element
添加全局资源：指令/过滤器/过渡等。如 vue-touch
通过全局混入来添加一些组件选项。如 vue-router
添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。

#　路由
[1]前置钩子
[2]

# 组件内的守卫
[1]beforeRouteEnter([to[, from[, next]]])
[1-1]在渲染该组件的对应路由被 [confirm] 前调用
[1-2]不能获取[组件实例] `this` 因为当守卫执行前，组件实例还没被创建
[1-3]可以通过传一个回调给 [next]来访问组件实例
[2]beforeRouteUpdate (2.2 新增)
[3]beforeRouteLeave
[3-1]导航离开该组件的对应路由时调用
[3-2]能获取[组件实例]






# 组件
Vue.component(componentName, {
  template: '<Dom>content</Dom>'[,
  props: Array
  ]
})
<!-- 全局注册 -->

<Component></Component>



# api
computed对象下的:
    set([vm])
    [vm1]为[当前组件的实例对象]
    set([newValu[,oldValu]])
    [newValu], [oleValu]分别为[computed对象下的属性]的[新值], [旧值]
    
$router
访问路由器

$router.push(location[, onComplete[, onAbort]])
这个方法会向 history 栈添加一个新的记录, 即编程式导航
参数location: String | Options
Options: {path, name, query, redirect, alias},[onComplete] 回调将会在导航成功完成 (在所有的异步钩子被解析之后) , [onAbort] 终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用

[Options]如果提供了 [path]，params 会被[忽略]. 取而代之是需要提供路由的 [name] 或手写完整的带有参数的 [path]

$router.replace(location[, onComplete[, onAbort]])
这个方法不会向 history 添加新记录
参数location: String | Options
Options: {path, name, query, redirect, alias},[onComplete] 回调将会在导航成功完成 (在所有的异步钩子被解析之后) , [onAbort] 终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用

[Options]如果提供了 [path]，params 会被[忽略]. 取而代之是需要提供路由的 [name] 或手写完整的带有参数的 [path]

$router.go(n)
意思是在 history 记录中向前或者后退多少步
n: Number



$route 
访问当前路由：   

$route.params
访问路由参数

$route.params.pathMatch
包含了 URL 通过通配符被匹配的部分


