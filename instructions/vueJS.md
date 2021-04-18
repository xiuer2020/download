# 安装
# CDN引入
开发模式: https://cdn.jsdelivr.net/npm/vue/dist/vue.js
生产模式: https://cdn.jsdelivr.net/npm/vue@2.6.12
原生ES5 Modules:  https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js

# npm安装
npm install vue -S

# API
{{data}}
<!-- 声明式渲染 -->
# 条件渲染
<Dom v-if="data"></Dom>
<Dom v-else="data"></Dom>

<Dom v-for="data"></Dom>
<!-- 循环 -->
<Dom @event="eventHandle"></Dom>
<!-- 事件 -->
<Dom v-html="data"></Dom>
<!-- 输出真正的 HTML -->
<Dom :attr="data"></Dom>
<!-- 使用响应式数据 -->
<Dom>{{JSExpr}}</Dom>
<!-- 使用js表达式 expr: 表达式 -->
<Dom :[data]="data"></Dom>
<!-- 使用动态参数 -->


<Dom>slot</Dom>


data: Object/Function
<!-- 数据 -->
methods: Object
<!-- 方法 -->

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


