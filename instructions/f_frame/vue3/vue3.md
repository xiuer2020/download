https://v3.cn.vuejs.org/guide/installation.html

# 快速开始
方式: [`cdn, npm, cli`]



# 发布版本说明
https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md

# Vue Devtools


# CDN
<script src="https://unpkg.com/vue@next"></script>

# npm
npm install vue@next

# 命令行工具 (CLI)
npm install -g @vue/cli
vue upgrade --next

# Vite


# 使用 CDN 或没有构建工具


# 使用构建工具


# 对于服务端渲染


# 运行时 + 编译器 vs. 仅运行时



# Vue.js 是什么


# 起步



# 组件化应用构建


# 与自定义元素的关系
最突出的是`跨组件数据流、自定义事件通信以及构建工具集成`

# 创建一个应用实例
Vue.createApp(Option) => vm

# 根组件
即`应用实例`




# Data Property
Vue.createApp(Options) => vm
Options: Object
Options.data: () => datas

# 方法
Vue.createApp(Options) => vm
Options: Object
Options.methods: Object

# 防抖和节流
<script src="https://unpkg.com/lodash@4.17.20/lodash.min.js"></script>
_.debounce(function() { callback }, 500)
# 计算属性
Vue.createApp(Options) => vm
Options: Object
Options.watch: Object
Options.watch: function(newValu, oldValu){}
# 监听器
Vue.createApp(Options) => vm
Options: Object
Options.computed: Object
# 计算属性缓存 vs 方法
计算属性是基于它们的反应`依赖关系缓存`的
# 计算属性的 Setter
Vue.createApp(Options) => vm
Options: Object
Options.computed: Object
Options.computed.demo: Fuction | Object
Options.computed.demo: {
    get: function(){return newValu}
    set: function(){}
}

# HTML Class对象语法
{clasName: cond}

# HTML Class数组语法
[data]

# 在组件上使用
`多个根元素`使用 `$attrs` 组件属性执行此操作

# 绑定内联样式 对象语法
其实是一个 JavaScript 对象
{cssProp: data}

# 数组语法
可以将多个样式对象应用到同一个元素上

# 自动添加前缀
在 :style 中使用需要 (浏览器引擎前缀) vendor prefixes 的 CSS property 时

# 多重值
可以为 style 绑定中的 property 提供一个包含多个值的数组, 这样写只会渲染数组中最后一个被浏览器支持的值
{cssProp: Array}


# 维护状态
而是就地更新每个元素, 只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。

# 变更方法
Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新
包裹过的方法包括： `push(), pop(), shift(), unshift(), splice(), sort(), reverse()`


# 替换数组 非变更方法
filter()、concat() 和 slice()


# 监听事件
绑定：<Dom @event="eventHandle"></Dom>
定义：Vue.createApp(Options) => vm
Options: Object
Options.methods: Object
Options.methods.demo: Fuction

# 多事件处理器
`逗号`运算符分隔

# 事件修饰符
`.stop, .prevent, .capture, .self, .once, .passive,`
使用修饰符时，顺序很重要

# 按键修饰符
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values

# 按键别名
`.enter, .tab, .delete, .esc, .space, .up, .down, .left, .right`

# 系统修饰键
`.ctrl, .alt, .shift, .meta,`

# .exact 修饰符
.exact 修饰符允许你控制由精确的系统修饰符组合触发

# 鼠标按钮修饰符
`.left, .right, .middle,`

# 表单输入绑定 基础用法
声明初始值。
v-model 在内部为不同的输入元素使用不同的 property 并抛出不同的事件：
`text` 和 `textarea` 元素使用 `value` property 和 `input` 事件；
`checkbox` 和 `radio` 使用 `checked` property 和 `change` 事件；
`select` 字段将 `value` 作为 prop 并将 `change` 作为事件。

# 文本 (Text)
v-model="data"
data:String

# 多行文本 (Textarea)
v-model="data"
data:String

# 复选框 (Checkbox)
v-model="data"
data: Boolean | Array | String
<input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

# 单选框 (Radio)
v-model="data"
data:String

# 选择框 (Select)
v-model="data"
data:String

# 修饰符
`.lazy, .number, trim`

# 子传父事件
绑定：<Comp @even="evenHand"></Comp>
传递：<Dom $emit="even"></Dom>

# 父传子事件
传递：<Dom prop="propValu"></Dom>
接受: vm.props: Array | Object

# 动态组件
可匹配已注册组件的名字，或一个组件的选项对象

# 解析 DOM 模板时的注意事项
哪些元素可以出现在其内部是有严格限制的， 会被作为无效的内容提升到外部，并导致最终渲染结果出错
HTML attribute 名不区分大小写，因此浏览器将所有大写字符解释为小写

# 组件名
字母全小写且必须包含一个连字符)

# 全局注册
rootVm.component(compName, Options)

# 局部注册
Vue.createApp(Option)
options.component: Object
options.component.compA: {compName: compB}局部注册compB

# 模块系统


# 在模块系统中局部注册
[1]import comp from path;
[2]vm.components:{comp}

# 传递静态或动态的 Prop
使用`:`指令

# 传入一个数字
使用`:`指令

# 传入一个布尔值
使用`:`指令

# 传入一个数组
使用`:`指令

# 传入一个对象
使用`:`指令

# 传入一个对象的所有 property
使用`:`指令

# 单向数据流
两种常见的试图变更一个 prop 的情形
prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用
这个 prop 以一种原始的值传入且需要进行转换

# Prop 验证 
可多个可能的类型
vm.props: Array | Object
vm.props.demo: natiFucnName | Object
vm.props.demo: {type,required, default}

# Attribute 继承
一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 props 或 emits 定义的 attribute。 常见的示例包括 class、style 和 id 
非 prop attribute 将自动添加到根节点的 attribute 中

# 禁用 Attribute 继承
vm.inheritAttrs: Array

# 多个根节点上的 Attribute 继承
显式绑定 $attrs: <Dom v-bind="$attrs"></Dom>

# 事件名
建议使用 kebab-case 事件监听器

# 验证抛出的事件
定义已发出的事件: vm.emits: Array | Object
vm.emits: {click, submit}
vm.emits.submit: function(emitArg){}

# v-model 参数
组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件

# 多个 v-model 绑定


# 处理 v-model 修饰符


# 插槽
定义:<slot name="name"></slot>
使用:<template #name></template>

# 渲染作用域
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的

# 作用域插槽
<template v-slot:slotName="demo">{{ demo }}</template>

# 解构插槽 Prop
使用`{}`进行解构

# 动态插槽名
使用`[]`

# 具名插槽的缩写
使用`#`

# Provide / Inject
场景: 一些深度嵌套的组件，而深层的子组件只需要父组件的部分内容
vm.provid: Object
vm.provid.demo: any | Function
vm.inject: Array

# Provide / Inject 处理响应性
vm.provid.demo: function(){return { data: Vue.computed(() => this.data.length) }}

# 在动态组件上使用keep-alive
以避免反复渲染导致的性能问题

# 异步组件
[1]const { createApp, defineAsyncComponent } = Vue
[2]const AsyncComp = defineAsyncComponent(() => new Promise((resolve, reject) => { resolve({ template: '<div>I am async!</div>' })}))
[3]rootVm.component('async-example', AsyncComp)

把 webpack 2 和 ES2015 语法相结合后
[1]import { defineAsyncComponent } from 'vue'
[2]const AsyncComp = defineAsyncComponent(() => import('./components/AsyncComponent.vue') )
[3]rootVm.component('async-example', AsyncComp)

# 异步组件与Suspense一起使用

# 模板引用
ref attribute 为子组件或 HTML 元素指定引用 ID
调用: this.$refs.input
可以向组件本身添加另一个 ref，并使用它从父组件触发 focusInput 事件

# 处理边界情况


# 过渡 & 动画概述


# 进入过渡 & 离开过渡


# 列表过渡


# 状态过渡


# 单元素/组件的过渡


# 过渡class


# CSS 过渡


# CSS 动画


# 自定义过渡 class 类名


# 同时使用过渡和动画


# 显性的过渡持续时间


# JavaScript 钩子


# 初始渲染的过渡


# 多个元素的过渡


# 过渡模式


# 多个组件之间过渡


# 列表的进入/离开过渡


# 列表的移动过渡


# 列表的交错过渡


# 可复用的过渡


# 动态过渡


# 状态动画与侦听器


# 动态状态过渡


# 把过渡放到组件里


# 赋予设计以生命


# 介绍


# Setup


# 生命周期钩子



# 模板引用


# 基础


# 选项合并


# 全局 mixin


# 自定义选项合并策略


# 简介


# 钩子函数


# 动态指令参数


# 函数简写


# 对象字面量


# 在组件中使用


# 与 Vue components 一起使用


# 在同一目标上使用多个 teleport


# DOM 树


# 虚拟 DOM 树


# h() 参数


# 完整实例


# 约束


# VNodes 必须唯一


# 使用 JavaScript 代替模板功能


# v-if 和 v-for


# v-model


# v-on


# 插槽


# JSX


# 模板编译


# 编写插件


# 使用插件


# 深入响应性原理


# 响应性基础


# 响应式计算和侦听


# 虚拟 DOM


# 声明响应式 property


# 异步更新队列


# 介绍


# 怎么看待关注点分离？


# 起步


# 在线演示


# 针对刚接触 JavaScript 模块开发系统的用户


# 针对高阶用户


# 使用 rollup 构建


# 介绍


# 单元测试


# 介绍


# 选择框架


# 框架


# 组件测试


# 介绍


# 选择框架


# 推荐


# 端到端 (E2E) 测试


# 介绍


# 选择框架


# 推荐


# NPM 包中的官方声明


# 推荐配置


# Webpack 配置


# 开发工具


# 项目创建


# 编辑器支持


# 定义 Vue 组件


# 与 Options API 一起使用


# 注解返回类型


# 注解 Props


# 注解 emit


# 与组合式 API 一起使用


# 类型声明 refs


# 类型声明 reactive


# 类型声明 computed


# 介绍


# 混合应用开发


# Capacitor


# NativeScript


# 开启生产环境模式


# 不使用构建工具


# 使用构建工具


# 预编译模板


# 提取组件CSS


# 跟踪运行时错误


# 官方 Router


# 从零开始简单的路由


# 整合第三方路由


# SSR 完全指南


# Nuxt.js


# Quasar Framework SSR + PWA


# 跳过链接


# 组织内容


# 标题


# 地标


# 表单


# 标签


# 占位符


# 用法说明


# 隐藏内容


# 按钮


# 表单


# 标签


# 占位符


# 用法说明


# 隐藏内容


# 按钮


# 网络内容无障碍指南 (WCAG)


# WCAG 2.1 四大指导原则 (缩写 POUR)：


# Web 可访问性倡议——可访问的富互联网应用程序 (WAI-ARIA)


# 文档


# 辅助技术


# 测试


# 用户


