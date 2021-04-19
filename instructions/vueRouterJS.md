# 安装
npm install vue-router

# 使用
[1]<router-link to="/foo">Go to Foo</router-link>
导航组件

[2]<router-view></router-view>
路由匹配到的组件将渲染在这里

[3]const Foo = { template: '<div>foo</div>' }
定义 (路由) 组件

[4]const routes = [ { path: '/foo', component: Foo }]
定义路由 通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。

[5]const router = new VueRouter({ Otions })
Options: {routes, mode, scrollBehavior}
创建 router 实例

[6]const app = new Vue({ router }).$mount('#app')
创建和挂载根实例。

# 动态路由匹配
routes: [  { path: '/user/:id', component: User , ...} ]
// 动态路径参数 以冒号开头

routes: [  { path: '/user/:id'/post/:post_id, component: User , ...} ]
设置多段“路径参数

# 响应路由参数的变化
原来的组件实例会被[复用]， 意味着组件的[生命周期钩子不会再被调用]。

# 捕获所有路由或 404 Not found 路由
如果想匹配[任意路径]，我们可以使用通配符 ([*])：
当使用一个通配符时，$route.params 内会自动添加一个名为 [pathMatch] 参数。它包含了 URL 通过通配符[被匹配的部分]：

# 高级匹配模式

# 匹配优先级
匹配的优先级就按照路由的[定义顺序]：谁先定义的，谁的优先级就最高。

# route
本文中代表一个路由对象

# router 
本文中代表一个路由实例

# 嵌套路由
使用
[1]模板添加一个 <router-view>
[2]通过 [route.children] 配置：

要注意，以 [/] 开头的嵌套路径[route.path]会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
User 的出口是[不会渲染任何东西]，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 [空的] 子路由

# 编程式的导航
$router.push((location[, onComplete[, onAbort]]))
$router.replace((location[, onComplete[, onAbort]]))
$router.go(n)

# 命名路由
在 routes 配置中给某个路由设置名称
即 [route.name]: String

# 命名视图
一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要[多个组件]。确保正确使用 [route.components] 配置 (带上 s)：
[route.component]: Object 即表示映射视图的对象

# 重定向
[route.redirect]:String | Options | fn
Option: {path, name, query, redirect, alias},
[Options]如果提供了 [path]，params 会被[忽略]. 取而代之是需要提供路由的 [name] 或手写完整的带有参数的 [path]
fn的回调参数: [目标路由] => 重定向的 字符串路径/路径对象

# 别名
[route.alias]: String

# 路由组件传参
$route 会使之与其对应路由形成高度耦合, 使用 [props] 将组件和路由解耦：

[route.props] : Boolean | Options | fn
[route.props] 被设置为 [true]，[$route.params] 将会被设置为[组件属性]
Options: {newsletterPopup}
fn(当前路由) => any

# HTML5 History 模式
定义： const router = new VueRouter({ mode: 'history', routes: [...] })

# 导航守卫
导航守卫主要用来通过[跳转]或[取消]的方式守卫导航。有多种机会植入路由导航过程中：[全局的], [单个路由]独享的, 或者[组件]级的。
[参数或查询的改变]并不会触发进入/离开的导航守卫

# 全局前置守卫
router.beforeEach(to, from, next)
to: Route 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: (route) 一定要调用该方法来 resolve 这个钩子。
route: String | Route |Boolean | Eroor
确保 next 函数在任何给定的导航守卫中都被[严格调用一次]。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错

# 全局解析守卫
router.beforeResolve(to, from, next)
to: Route 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: (route) 一定要调用该方法来 resolve 这个钩子。
route: String | Route |Boolean | Eroor
确保 next 函数在任何给定的导航守卫中都被[严格调用一次]。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错

# 全局后置钩子
router.afterEach(to, from, next)
to: Route 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由

# 路由独享的守卫
route.beforeEnter(to, from, next)
to: Route 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由
next: (route) 一定要调用该方法来 resolve 这个钩子。
route: String | Route |Boolean | Eroor
确保 next 函数在任何给定的导航守卫中都被[严格调用一次]。它可以出现多于一次，但是只能在所有的逻辑路径都不重叠的情况下，否则钩子永远都不会被解析或报错

# 组件内的守卫
设置: 即组件下的某个[属性]

comon参数
to: Route 即将要进入的目标 路由对象
from: Route: 当前导航正要离开的路由

beforeRouteEnter(to, from, next)
next: vm => ()
vm:组件实例
不！能！获取组件实例 `this`, 只能通过next的回调参数访问

beforeRouteUpdate(to, from, next)
能！获取组件实例 `this`

beforeRouteLeave(to, from, next)
next(Booean)
能！获取组件实例 `this`

# 完整的导航解析流程
  导航被触发。
  在[失活的组件]里调用 beforeRouteLeave 守卫。
  调用全局的 beforeEach 守卫。
  在[重用的组件]里调用 beforeRouteUpdate 守卫 (2.2+)。
  在[路由配置]里调用 beforeEnter。
  解析异步路由组件。
  在[被激活的组件]里调用 beforeRouteEnter。
  调用全局的 beforeResolve 守卫 (2.5+)。
  导航被确认。
  调用全局的 afterEach 钩子。
  触发 DOM 更新。
  调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
  
  # 路由元信息
  一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组

# 过渡动效
<transition> <router-view></router-view> </transition>

# 数据获取
导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。

导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。

# 导航完成后获取数据
使用created()和watch监听$route

# 在导航完成前获取数据
使用beforeRouteEnter和以及回调函数next(vm)

# 滚动行为
const router = new VueRouter(Options)
Options.scrollBehavior(to, from, savedPosition) => obj[期望滚动到哪个的位置]
第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
obj:{ x: number, y: number } | { selector: string[, offset : { x: number, y: number }]}
# 异步滚动
你也可以返回一个 Promise 来得出预期的位置描述：
Options.scrollBehavior(to, from, savedPosition) =>  Promise.resolve(obj)
obj:{ x: number, y: number } | { selector: string[, offset : { x: number, y: number }]}

# 平滑滚动
Options.scrollBehavior(to, from, savedPosition) => obj
obj.behavior： String

# 路由懒加载
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
组件按组分块

# 把组件按组分块

# 导航故障

# 检测导航故障
NavigationFailureType 可以帮助开发者来区分不同类型的导航故障。有四种不同的类型：
redirected：在导航守卫中调用了 next(newLocation) 重定向到了其他地方。
aborted：在导航守卫中调用了 next(false) 中断了本次导航。
cancelled：在当前导航还没有完成之前又有了一个新的导航。比如，在等待导航守卫的过程中又调用了 router.push。
duplicated：导航被阻止，因为我们已经在目标位置了

# 导航故障的属性
所有的导航故障都会有 to 和 from 属性，用来表达这次失败的导航的当前位置和目标位置


# 杂
.router-link-active
当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 























scrollBehavior (to, [from[, savedPosition]]) => ({x:Number, y: Number})
<!-- 函数可以返回一个滚动位置对象 -->

# route属性
hidden: Boolean 
<!-- 是否需要展示该路由, 是否渲染该路由入口 -->
redirect： String|Object
<!-- 重定向 -->
replace
<!-- 页面切换时不会留下历史记录 -->

# API
replace
<!-- 跳转到指定的url -->