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
1)beforeCreate
<!-- 创建前 初始化事件和生命周期 -->
2)created
<!-- 创建后 注入和反应性 -->
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






# 组件
Vue.component(componentName, {
  template: '<Dom>content</Dom>'[,
  props: Array
  ]
})
<!-- 全局注册 -->

<Component></Component>

