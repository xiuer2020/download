# 模板语法
<dom>{{data}}</dom>
<!-- 声明式渲染 -->

# 条件渲染
<dom v-if="data"></dom>
<dom v-else-if="data2"></dom>
<dom v-else></dom>
<dom v-show="data"></dom>

# 列表循环
<dom v-for="data"></dom>

# 事件
<dom @event="eventHandle"></dom>
事件绑定
<dom @evert.modifier="enventHandle"></dom>
事件绑定及修饰 modifier 可选值 [stop,prevent,capture,self,once,passive, native]
按键修饰可选值 [enter,tab,delete,esc,space,up,down,left,right,ctrl,shift,alt,meta,exact]
鼠标按钮修饰符 [left,right,middle]
注意: 组件上自定义事件使用短横杠命名法

# 表单绑定
<form-dom v-model="data"></form-dom>
双向绑定
注意: 多选时初始化数据为数组; value为其选中的值
<form-dom v-model.modifier="data"></form-dom>
双向绑定 modifier 的可选值为 [lazy, number, trim]

# 插槽
<dom>slot</dom>
默认插槽
<dom #name>slot</dom>
具名插槽
<slot>slot</slot>
后备内容
<componet-a><template v-slot:default="variable">{{variable}}</template></componet-a>
作用域插槽

# else
<!-- 事件 -->
<dom v-html="data"></dom>
<!-- 输出真正的 HTML -->
<dom :attr="data"></dom>
<!-- 使用响应式数据 -->
<dom :[data]="data"></dom>
<!-- 使用动态参数 -->

<dom :class="{'class-name': data"}><dom>
class对象语法
<dom :class="[data]"><dom>
class数组语法
<dom :style="{css-attr: data}"></dom>
style 对象语法
<dom :style="[data]"><dom>
style 数组语法
<dom :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></dom>
多重值
<router-view />
路由出口
<keep-alive><componet-a></componet-a></keep-alive>
失活的组件将会被缓存
<component v-bind:is="currentTabComponent"></component>
动态组件
<dom ref='ref'></dom>
为直接访问一个子组件的目的
<transition name="fade"> <dom v-if="data">hello</dom> </transition>
给任何元素和组件添加进入/离开过渡 可定义6个class [v-enter, v-enter-active, v-enter-to, v-leave, v-leave-active, v-leave-to],  
type="animation 或 transition"属性声明监听的类型。
可进行监听js钩子 可选钩子有 [[beforeEnter, enter, afterEnter, enterCancelled, beforeLeave, leave, afterLeave, leaveCancelled, before-appear, appear, after-appear, appear-cancelled]
appear="appear" 初始渲染 可定义class [appear-class,appear-to,class, appear-active-class]
 <transition-group name="name"><dom v-if="data">hello</dom></transition-group>
列表的进入/离开过渡
tag="html-element" transition-group组件渲染成的元素
可定义class [v-move]







