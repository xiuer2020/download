# word
[plain] 浅的; [distance] 距离; 

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
[1]组件引入为[大坨峰]命名, 例如import {Button} from 'vant';
[2]组件键名为[短横杠]命名, 例如<van-button></van-button>

# 生词 
[plain] 朴素的; [prefix] 前缀; [square] 方的; round 圆的; [hairline] 极细的;  [arrow] 箭头; [appear] 出现; [container] 容器; [inset] 插入; 

# 内置样式使用
[1]添加类名

# 组件介绍模块结构
[1]Props
参数	说明	类型	默认值
[2]Event
事件名	说明	回调参数
[3]样式变量
名称	默认值	描述
[4]插槽
名称	说明
[5]特定状态生效属性
参数	说明	类型	默认值
[6]组件实例方法
方法名	说明	参数	返回值
[7]属性的键列表
键名	说明	类型
[8]对象数组, 数组中的每一个对象键列表
键名	说明	类型
[9]回调参数, 执行时会传递以下回调参数列表
参数名	说明	类型

# 轻提示toast结构, Notify 消息提示, ImagePreview 图片预览, Lazyload 懒加载, 
[1]方法
方法名	说明	参数	返回值
[2]对象参数列表
参数	说明	类型	默认值
[3]样式变量
名称	默认值	描述

# 技巧
[1]imges组件
[1-1]给组件添加 [类名] 并设置 [宽高]属性;

# 基础组件
[1]button按钮
[1-1]属性
[type]值有[default]、[primary]、[info]、[warning]、[danger ]
[plain] 朴素按钮, hairline 展示 0.5px 的 细边框; [disabled] 禁用按钮 [loading] 加载状态; [loading-type]加载状态图标类型的值有 spinner, circular; [loading-text] 加载状态显示文字; [square] 设置方形按钮， [round] 设置圆形按钮。 [icon]按钮图标的值支持 [Icon] 组件里的 所有图标 ，也可以传入图标 URL , 可配合 icon-position 使用更改图标位置 自定义图表为 [正方形]防止变形; 
[size]属性[large]、[normal]、[small]、[mini] 四种尺寸 尺寸 
[block] 块级元素 [url] URL 跳转; [to] 路由跳转; [color] 按钮的颜色, 可以配合[plain]属性更改为[朴素按钮]并发更改字体颜色; [class] 定义class, 可用于更改字体颜色; [text] 按钮文字;
 [icon-position]图标位置的值有[left], [right] 
[tag] 按钮根节点的HTML标签;
 [native-type]的值有[button], [reset], [submit] 原生button标签的type属性 [loading-size] 加载图标大小; [replace] 在跳转时替换当前页面历史 
 
[1-2]点击事件[click] 回掉参数[Event]， 钮状态不为加载或禁用时触发 [touchstart] 回掉参数[TouchEvent] 开始触摸按钮时触发 

[1-3]插槽[Slots] [default] 按钮内容 [loading] v2.10.1 自定义加载图标 

[1-4]样式变量, 关键属性 [button-height], [font-size], [line-height], [color], [background-color], [border-color], [border-radius], [round-border-radius], 
[plain-background-color], [disabled-opacity]

[2]CellGroup Props
[2-1][title]分组标题; [border]外边框; 
[2-3]插槽
[default]默认插槽; [title]自定义分组标题

[3]Cell
[3-1]
[title]左侧标题; [value]右侧内容; [label]描述信息; [size]单元格大小; [icon]左侧图标名称或图片链接; [icon-prefix]图标类名前缀; [url]链接地址; [to]路由对象; [border]内边框
[replace]替换当前页面历史; [clickable]点击反馈; [is-link]右侧箭头并开启点击反馈; [required]填星号; [center]内容垂直居中; 
[arrow-direction]箭头方向，可选值为 left up down right
[title-style]左侧标题额外样式; [title-class]左侧标题额外类名; [value-class]右侧内容额外类名; [label-class]描述信息额外类名; 

[3-2]事件
[click]点击参数 Event; 

[3-3]插槽
[default]右侧 value 的内容; [title]左侧 title 的内容; [label]标题下方 label 的内容; [icon]左侧图标; [right-icon]右侧按钮; extra]单元格最右侧的额外内容
[3-4]样式变量
主要标识符[font-size], [line-height], [vertical-padding], [horizontal-padding], [text-color], [background-color], [border-color], 
[3-5]cell组件 使用技巧
添加样式[flex-wrap]: wrap配合[icon]插槽自定义样式
添加选择器【[.van-cell]::after】修改意思[border-color]: #969799

[4]内置样式
[4-1]类
[van-ellipsis], [van-ellipsis-12], [van-ellipsis-13]
[van-hairline--top], [van-hairline--bottom], [van-hairline--left], [van-hairline--right], [van-hairline--top-bottom], [van-hairline--surround]
[4-5]添加选择器【[class*=van-hairline]::after】修改样式[border-color]: #969799;

[5]图标icon
[5-1]Props
[name]图标名称或图片链接; [dot]右上角小红点; [badge]右上角徽标的内容; [color]颜色 ; [size] 图标大小; [class-prefix] 类名前缀[tag]HTML 标签s
[5-2]事件Events
[click]参数Event;

[6]图片image
[6-1]属性Props
[src]图片链接; 
[fit]图片填充模式的值有 cover, contain, scale-down, none, fill; 
[alt]替代文本; [width]宽度; [height]高度; [radius]圆角大小; [round]圆形; [lazy-load]图片懒加载，须配合 Lazyload 组件使用; [show-error]图片加载失败提示; [show-loading]图片加载中提示; [error-icon]失败时提示的图标名称或图片链接; [loading-icon]加载时提示的图标名称或图片链接; [icon-prefix] 图标类名前缀

[6-2]事件Events
[click]参数Event; [load]加载完毕; [error]加载失败时触发 

[6-3]Slots
[default]图片下方的内容; [loading]加载中的提示内容; [error]加载失败时的提示内容

[6-4]样式变量
[color], [font-size], [background-color]

[7]布局组件van-row
[7-1]Row Props
[type]布局方式值为flex;
[gutter]列元素之间的间距;
[tag]自定义元素标签;
[justify]主轴对齐方式，可选值为 end center, space-around, space-between, start
[align]交叉轴对齐方式，可选值为 center bottom string top
[7-2]Row Events 事件
[click]参数Event
[7-3]技巧
给van-row添加样式aign-content: center, flex-derection: colum;等

[8]布局组件van-col
[8-1]Col Props
[span]列元素宽度; [offset]列元素偏移距离; [tag]自定义元素标签
[8-2]Col Events
[click]参数Event

[9]popup
[9-1]Props
[v-model]弹出层; [overlay]遮罩层; 
[position]弹出位置，可选值为 top bottom right left string center
[overlay-class]遮罩层类名; [overlay-style]遮罩层样式; [duration]动画时长; [round]显示圆角; [lock-scroll]锁定背景滚动; [lazy-render]显示弹层时才渲染节点; [close-on-popstate]在页面回退时自动关闭; [close-on-click-overlay]在点击遮罩层后关闭; [closeable]显示关闭图标; [close-icon]关闭图标名称或图片链接; 
[close-icon-position]关闭图标位置，可选值为top-left, bottom-left, bottom-right, top-right
[transition]动画类名; [transition-appear]在初始渲染时启用过渡动画; [get-container]指定挂载的节点; [safe-area-inset-bottom]开启底部安全区适配; 
[9-2]Events
[clck]点击弹出层时触发的参数 Event; 
[click-overlay]点击遮罩层时触发; 
[click-close-icon]点击关闭图标时触发, event: Event; [open]打开弹出层时触发; [close]关闭弹出层时触发; [opened]打开弹出层且动画结束后触发; [closed]关闭弹出层且动画结束后触发; 
[9-3]样式变量
[background-color], [transition], [border-radius], [size], [color], [margin], [z-index]

[10]轻提示toast
[10-1]API
展示提示[Toast](options/message) => toast 实例; 
展示加载提示[Toast.loading](options/message) => toast 实例
展示成功提示[Toast.success](options/message) => toast 实例
展示失败提示[Toast.fail](options/message) => toast 实例
关闭提示[Toast.clear](Boolean) => void
允许同时存在多个Toast[Toast.allowMultiple] => void
修改默认配置，对所有 Toast 生效[Toast.setDefaultOptions]()
setDefaultOptions属性：
[type] 可以修改指定类型的默认配置
重置默认配置对所有 Toast 生效[Toast.resetDefaultOptions]()
[type] 可以重置指定类型的默认配置

[10-2]Options
[type] 提示类型，可选值为 loading success;
[fail] 失败提示html string text
[position] 位置，可选值为 top bottom string middle
[message] 文本内容; [icon] 自定义图标; [iconPrefix] 图标类名前缀; [overlay] 显示背景遮罩层; [forbidClick] 禁止背景点击; [closeOnClick] 在点击后关闭; [closeOnClickOverlay] 在点击遮罩层后关闭;
 [loadingType] 加载图标类型, 可选值为 spinner string circular
[duration] 展示时长(ms); [className] 自定义类名; [onOpened] 完全展示后的回调函数; [onClose] 关闭时的回调函数; [transition] 动画类名; [getContainer] 指定挂载的节点; 
[10-3]样式变量
[width], [font-size], [color], [line-height], [border-radius], [background-color], [size], [padding], [distance]

# 表单组件
[1]Calendar 日历
[1-1]属性Props
[type] 选择类型; [single]表示选择单个日期; [multiple表示选择多个日期]; [range]表示选择日期区间; [title] 日历标题; [color] 主题色，对底部按钮和选中日期生效; [min-date] 最小日期 Date; [max-date] 最大日期; [default-date] 默认选中的日期，type 为 multiple 或 range 时为数组，传入 null 表示默认不选择; [row-height] 日期行高; [formatter] 日期格式化函数, 回调参数Day; [poppable] 以弹层的形式展示日历; [lazy-render] 只渲染可视区域的内容; [show-mark] 月份背景水印; [show-title] 日历标题; [show-subtitle] 日历副标题; [show-confirm] 确认按钮; [readonly] 只读状态，只读状态下不能选择日期; [confirm-text] 确认按钮的文字; 
[confirm-disabled-text] 禁用状态时的文字; [first-day-of-week] 周起始日; 

[1-1-1]当 Canlendar 的 [poppable] 为 [true] 时，支持以下 [props]:
[v-model]日历弹窗;
[position] 弹出位置，可选值为 [top], [right], [left], [string], [bottom]
[round] 圆角弹窗; [close-on-popstate] 在页面回退时自动关闭; [close-on-click-overlay] 在点击遮罩层后关闭; [safe-area-inset-bottom] 开启底部安全区适配; [get-container] 指定挂载的节点;

[1-1-2]
当 Canlendar 的 [type] 为 [range] 时，支持以下 props:
[max-range] 日期区间最多可选天数; [range-prompt] 范围选择超过最多可选天数时的提示文案; [allow-same-day] 允许日期范围的起止时间为同一天;

[1-1-3]
当 Canlendar 的 [type] 为 [multiple] 时，支持以下 props:
[max-range] 日期最多可选天数; [range-prompt] 选择超过最多可选天数时的提示文案 ;

[1-2]Day 数据结构
日历中的每个日期都对应一个 Day 对象，通过[formatter]属性可以自定义 Day 对象的内容
[date] 日期对应的 Date 对象;
 [type] 日期类型，可选值为[selected]、[start]、[middle]、[end]、[disabled] [string]
[text] 中间显示的文字; [topInfo] 上方的提示信息; [bottomInfo] 下方的提示信息; [className] 额外类名

[1-3]Events
[select] 点击并选中任意日期时触发 value: Date | Date; [confirm] 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发 value: Date | Date[]
[open] v2.5.2 打开弹出层时触发 -
[close] v2.5.2 关闭弹出层时触发 -
[opened] v2.5.2 打开弹出层且动画结束后触发 -
[closed] v2.5.2 关闭弹出层且动画结束后触发 -
[unselect] v2.7.2 当日历组件的 type 为 multiple 时，取消选中日期时触发 value: Date
[month]-show v2.8.2 当某个月份进入可视区域时触发 { date: Date, title: string }
Slots
名称 说明
title 自定义标题
footer 自定义底部区域内容
方法
通过 ref 可以获取到 Calendar 实例并调用实例方法，详见组件实例方法。

方法名 说明 参数 返回值
reset 将选中的日期重置到指定日期，未传参时会重置到默认日期 date?: Date | Date[] -
scrollToDate v2.12.2 滚动到某个日期 date: Date -
样式变量
组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考主题定制。

名称 默认值 描述
@calendar-background-color @white -
@calendar-popup-height 80% -
@calendar-header-box-shadow 0 2px 10px rgba(125, 126, 128, 0.16) -
@calendar-header-title-height 44px -
@calendar-header-title-font-size @font-size-lg -
@calendar-header-subtitle-font-size @font-size-md -
@calendar-weekdays-height 30px -
@calendar-weekdays-font-size @font-size-sm -
@calendar-month-title-font-size @font-size-md -
@calendar-month-mark-color fade(@gray-2, 80%) -
@calendar-month-mark-font-size 160px -
@calendar-day-height 64px -
@calendar-day-font-size @font-size-lg -
@calendar-range-edge-color @white -
@calendar-range-edge-background-color @red -
@calendar-range-middle-color @red -
@calendar-range-middle-background-opacity 0.1 -
@calendar-selected-day-size 54px -
@calendar-selected-day-color @white -
@calendar-info-font-size @font-size-xs -
@calendar-info-line-height @line-height-xs -
@calendar-selected-day-background-color @red -
@calendar-day-disabled-color @gray-5 -
@calendar-confirm-button-height 36px -
@calendar-confirm-button-margin 7px 0 -



# 展示组件
[1]lazy-component
[1-1]使用
import { Lazyload } from 'vant';
Vue.use(Lazyload, options);
[1-2]Options
[loading]加载时的图片; [error]错误时的图片; [preload]预加载高度的比例; [attempt]尝试次数; [listenEvents]监听的事件; [adapter]适配器; [filter]图片; 过滤[lazyComponent]能懒加载模块; 
# 导航组件

[1]NavBar 导航栏


#　


















































































