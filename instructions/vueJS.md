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
[1][computed]的[set]方法的[参数1]为[当前组件的实例对象]
[2][computed]的[get]方法的[参数1], [参数2]分别为[computed属性]的[新值], [旧值]