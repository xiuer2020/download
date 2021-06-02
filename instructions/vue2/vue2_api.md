# componentOption
inheritAttrs: bool
如果你不希望组件的根元素继承 attribute
model
props.prop: NativeFn | NativeFnArray | Obejct | validatorCallback
父传子
model: {prop, event}
避免名为 value 的 prop 和名为 input 的事件冲突
components: {component-a: () => import('path')}
局部异步加载组件
provide： function(){return object}
指定我们想要提供给后代组件的数据/方法
inject: ['inject']
接收指定的我们想要添加在这个实例上的 property
directives： {inserted: function (el) {//操作 }, bind, update, componentUpdated, unbind }
注册一个全局自定义指令 钩子函数参数: https://cn.vuejs.org/v2/guide/custom-directive.html

# componentOption.prop: {type, require, default}
require的可选值: bool
type的可选值: String, Number, Boolean, Array, Object, Date, Function, Symbol


Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {// 返回合并后的值 }
自定义选项合并

全局配置
silent
optionMergeStrategies
devtools
errorHandler
warnHandler
ignoredElements
keyCodes
performance
productionTip
全局 API
Vue.extend( options )
使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
Vue.extend( options ) 之 options.mixins= [myMixin]
定义一个使用混入对象的组件
Vue.nextTick
Vue.set
Vue.delete
Vue.directive('order', {inserted: function (el) {//操作 }, bind, update, componentUpdated, unbind }))
注册一个局部自定义指令 钩子函数参数: https://cn.vuejs.org/v2/guide/custom-directive.html
Vue.filter( id, [definition] )
注册或获取全局过滤器。
Vue.component( id, [definition] )
注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称 
Vue.component( id, {render}) 之 render: function(createElement) 
注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称  createElement({String | Object | Function}, {Object}, {String | Array})=>虚拟 DOM
Vue.component( id, fn)
通过异步组件工厂函数注册或获取全局组件 fn()=>{component,loading,error,delay,timeout}
Vue.use({Object | Function})
安装 Vue.js 插件, 如果插件是一个对象，必须提供 install 方法
Vue.mixin(options)
全局混入
Vue.compile
Vue.observable
Vue.version
选项 / 数据
data
props
propsData
computed
methods
watch
选项 / DOM
el
template
render
renderError
选项 / 生命周期钩子
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured
选项 / 资源
directives
filters
components
选项 / 组合
parent
mixins
extends
provide / inject
选项 / 其它
name
delimiters
functional
model
inheritAttrs
comments
实例 property
vm.$data
vm.$props
vm.$el
vm.$options
vm.$parent
访问父组件的实例
vm.$root
访问根实例
vm.$children
vm.$slots
vm.$scopedSlots
vm.$refs
vm.$isServer
vm.$attrs
vm.$listeners
实例方法 / 数据
vm.$watch
vm.$set
vm.$delete
实例方法 / 事件
vm.$on
vm.$once
vm.$off
vm.$emit
实例方法 / 生命周期
vm.$mount
vm.$forceUpdate
vm.$nextTick
vm.$destroy
指令
v-text
v-html
v-show
v-if
v-else
v-else-if
v-for
v-on
v-bind
v-model
v-slot
v-pre
v-cloak
v-once
特殊 attribute
key
ref
is
slot
slot-scope
scope
内置的组件
component
transition
transition-group
keep-alive
slot
VNode 接口
服务端渲染