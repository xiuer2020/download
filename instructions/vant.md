# 引入
[1]npm i vant -S
Vue 2 项目，安装 Vant 2：
[2]npm i vant@next -S
Vue 3 项目，安装 Vant 3：
[3]通过 CDN 安装
[3-1]<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
引入 Vue 和 Vant 的 JS 文件
[3-2]<script src="https://cdn.jsdelivr.net/npm/vant@2.12/lib/vant.min.js"></script>
[3-3]<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@2.12/lib/index.css" />
<!-- 引入样式文件 -->

# 在vue-cli使用
[1]导入所有组件
[1-1]import Vue from 'vue';
引入vue
[1-2]import Vant from 'vant';
引入vant
[1-3]import 'vant/lib/index.css';
引入vant样式
[1-4]Vue.use(Vant);
使用vant

# 源码
[1]变量路径 '/es/style/var.less'

# 组件的风格
[1]键名为[大坨峰]命名, 例如Button, 组键名为[短横杠]命名

# 基础组件
[1]button按钮
[1-1]属性
[type]值有[default]、[primary]、[info]、[warning]、[danger ]
预订五种类型
[plain] 属性
设置为 朴素按钮
[hairline]
展示 0.5px 的 细边框
[disabled]
禁用按钮
[loading]
加载状态 
[loading-type]的值有[spinner], [circular]
加载状态图标类型
[loading-text]
加载状态显示文字
[square] 
设置方形按钮，
[round] 
设置圆形按钮。
[icon]的值支持 [Icon] 组件里的[所有图标]，也可以传入图标 [URL] , 可配合[icon-position]使用更改图标位置
属性设置按钮图标 自定义图表为 [正方形]防止变形
[size]属性[large]、[normal]、[small]、[mini] 四种尺寸
尺寸
[block] 
属性可以将按钮的元素类型设置为块级元素
[url] 
属性进行 URL 跳转，或通过 
[to]
属性进行路由跳转
[color] , 可以配合[plain]属性更改为[朴素按钮]并发更改字体颜色
属性可以自定义按钮的颜色
[class]
定义class, 可用于更改字体颜色
[text]
按钮文字
[icon-position]的值有[left], [right]
更改图标位置
[tag]
按钮根节点的HTML标签
[native-type]的值有[button], [reset], [submit]
原生button标签的type属性
[loading-size]
加载图标大小
[replace]
是否在跳转时替换当前页面历史
[1-2]事件[events]
[click] 回掉参数[Event]
点击按钮，且按钮状态不为加载或禁用时触发
[touchstart] 回掉参数[TouchEvent]
开始触摸按钮时触发
[1-3]插槽[Slots]
[default]	
按钮内容
[loading]
v2.10.1	自定义加载图标
[1-3]样式变量
样式变量
组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考主题定制。
名称	默认值	描述
@button-mini-height	24px	-
@button-mini-font-size	@font-size-xs	-
@button-small-height	32px	-
@button-small-font-size	@font-size-sm	-
@button-normal-font-size	@font-size-md	-
@button-large-height	50px	-
@button-default-height	44px	-
@button-default-line-height	1.2	-
@button-default-font-size	@font-size-lg	-
@button-default-color	@text-color	-
@button-default-background-color	@white	-
@button-default-border-color	@border-color	-
@button-primary-color	@white	-
@button-primary-background-color	@green	-
@button-primary-border-color	@green	-
@button-info-color	@white	-
@button-info-background-color	@blue	-
@button-info-border-color	@blue	-
@button-danger-color	@white	-
@button-danger-background-color	@red	-
@button-danger-border-color	@red	-
@button-warning-color	@white	-
@button-warning-background-color	@orange	-
@button-warning-border-color	@orange	-
@button-border-width	@border-width-base	-
@button-border-radius	@border-radius-sm	-
@button-round-border-radius	@border-radius-max	-
@button-plain-background-color	@white	-
@button-disabled-opacity	@disabled-opacity	


# 导航组件
[1]NavBar 导航栏




























































