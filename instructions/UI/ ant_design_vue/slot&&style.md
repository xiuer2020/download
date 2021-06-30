通用
# Button按钮
props: type 按钮类型, ghost 镂空, size 尺寸, disabled 不可用状态, shape 形状,  a-radio-group>a-radio-button 多个按钮组合, block 块按钮

# Icon图标
import {LoadingOutlined } from '@ant-design/icons-vue';
引入
props: twoToneColor 多色图标

# 自定义图标
import Icon from '@ant-design/icons-vue';
引入
component slot: dib

# icon-font 使用
import { createFromIconfontCN } from '@ant-design/icons-vue'
引入
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
<icon-font type="icon-tuichu" />
使用

Typography 文本的基本格式排版
# Typography.Text
delete 添加删除线样式, disabled 禁用文本, ellipsis 自动溢出省略, strong 是否加粗, type 文本类型, underline 添加下划线样式,  content(v-model) 内容, keyboard 键盘样式, mark 标记样式, code 代码样式

# Typography.Title
delete 添加删除线样式, disabled 禁用文本, ellipsis 自动溢出省略, type 文本类型, underline 添加下划线样式,  content(v-model) 内容, keyboard 键盘样式, mark 标记样式, code 代码样式

# Typography.Paragraph
delete 添加删除线样式, disabled 禁用文本, ellipsis 自动溢出省略, strong 是否加粗, type 文本类型, underline 添加下划线样式,  content(v-model) 内容, code 代码样式

# Typography slot
editableIcon slot: dib
editableTooltip slot: mnw30+mnh32+p(6,8)
copyableIcon slot: dib
copyableTooltip slot: mnw30+mnh32+p(6,8)

# Typography 注意
ellipsis?: { rows?: number, expandable?: boolean, symbol?: string}

布局
# Divider分割线
props: dashed 是否虚线, orientation 分割线标题的位置, type 水平还是垂直类型, style 自定义样式

Grid栅格
# Row
align 垂直对齐方式, gutter  栅格间隔, justify 水平排列方式, type  布局模式

# Col
flex  局填充, offset  栅格左侧的间隔格数, order 栅格顺序, pull  栅格向左移动格数, push  栅格向右移动格数, span  栅格占位格数, xs, sm, md, lg, xl, xxl

Layout布局 Layout.Header Layout.Footer Layout.Content API 与 Layout 相同
# Sider
props: breakpoint  触发响应式布局的断点, class 容器 class, collapsed(v-model)  当前收起状态, collapsedWidth  收缩宽度, trigger  自定义辅助菜单, style 指定样式, theme 主题颜色, width 宽度, zeroWidthTriggerStyle 定当 collapsedWidth 为 0 时出现的特殊 trigger 的样式

# Space间距
props: align 对齐方式, direction 间距方向, size  间距大小

导航
# Affix固钉
props: offsetBottom 距离窗口底部达到指定偏移量后触发, offsetTop 距离窗口顶部达到指定偏移量后触发

Breadcrumb面包屑
# breadcrumb
props: separator  分隔符自定义, itemRender 自定义链接函数
itemRender slot: type{route, params, routes, paths}  style:db

# Breadcrumb.Item
overlay 下拉菜单的内容

Dropdown下拉菜单
# Dropdown下拉菜单
disabled  菜单是否禁用, getPopupContainer 菜单渲染父节点, overlay(v-slot) 菜单, overlayClassName  下拉根元素的类名称, overlayStyle  下拉根元素的样式, placement 菜单弹出位置, trigger 触发下拉的行为

# Dropdown.Button
disabled  菜单是否禁用, icon  右侧的icon, overlay(v-slot) 菜单, placement 菜单弹出位置, size  按钮大小, trigger 触发下拉的行为, type  按钮类型, visible(v-model)  菜单是否显示

Menu导航菜单
# Menu
inlineCollapsed inline 时菜单是否收起状态, inlineIndent  inline 模式的菜单缩进宽度, mode  菜单类型,  openKeys(v-model) 当前展开的 SubMenu 菜单项, selectable  是否允许选中, selectedKeys(v-model) 当前选中的菜单项, subMenuOpenDelay  用户鼠标进入子菜单后开启延时, theme 主题颜色, overflowedIndicator 自定义 Menu 折叠时的图标

# PageHeader页头
title	自定义标题文字, subTitle	自定义的二级标题文字, ghost	pageHeader 的类型，将会改变背景颜色, avatar	标题栏旁的头像, backIcon	自定义 back icon, tags	title 旁的 tag 列表, extra	操作区, breadcrumb	面包屑的配置, footer	PageHeader 的页脚

# Pagination分页
current(v-model)	当前页数, pageSize(v-model)	每页条数, defaultPageSize	默认的每页条数, disabled	禁用分页, hideOnSinglePage	只有一页时是否隐藏分页器, itemRender	用于自定义页码的结构, pageSizeOptions	指定每页可以显示多少条, showLessItems	是否显示较少页面内容, showQuickJumper	是否可以快速跳转至某页, showSizeChanger	是否可以改变, showTotal	用于显示数据总量和当前数据顺序, simple	当添加该属性时，显示为简单分页, size	当为「small」时，是小尺寸分页, total	数据总数

# Steps步骤条

数据录入
# AutoComplete自动完成
# Cascader级联选择
# Checkbox多选框
# DatePicker日期选择框

Form表单
# Form
model	表单数据对象, rules	表单验证规则, hideRequiredMark	隐藏所有表单项的必选标记, labelAlign	label 标签的文本对齐方式, layout	表单布局, 
labelCol	label 标签布局, wrapperCol	需要为输入控件设置布局样式时, colon	配置 Form.Item 的 colon 的默认值, validateOnRuleChange	是否在 rules 属性改变后立即触发一次验证	boolean	true
scrollToFirstError	提交失败自动滚动到第一个错误字段, validateTrigger	统一设置字段校验规则

# Form.Item
name	表单域 model 字段, rules	表单验证规则, autoLink	是否自动关联表单域, colon	配合 label 属性使用, extra	额外的提示信息, hasFeedback	配合 validateStatus 属性使用，展示校验状态图标, help	提示信息, htmlFor	设置子元素, label	label 标签的文本, labelCol	label 标签布局, labelAlign	标签文本对齐方式, required	是否必填, validateStatus	校验状态, wrapperCol	需要为输入控件设置布局样式时,	validateTrigger	设置字段校验的时机

# Mentions提及
# Radio单选框
# Rate评分
# Select选择器
# Slider滑动输入条
# Switch开关
# TimePicker时间选择框
# Transfer穿梭框
# TreeSelect树选择
# Upload上传

数据展示
# Avatar头像
# Badge徽标数
# Calendar日历
# Card卡片
# Carousel走马灯
# Collapse折叠面板
# Comment评论
# Descriptions描述列表
# Empty空状态
# Image图片
# List列表
# Popover气泡卡片
# Statistic统计数值

# Table表格
tableLayout	表格元素的 table-layout, 固定表头/列或使用了, bordered	是否展示外边框和列边框, childrenColumnName	指定树形结构的列名, columns	表格列的配置描述, components	覆盖默认的 table 元素, dataSource	数据数组, defaultExpandAllRows	初始时，是否展开所有行, expandedRowKeys	展开的行, expandedRowRender	额外的展开行, expandIcon	自定义展开图标, expandRowByClick	通过点击行来展开子行, expandIconColumnIndex	展开的图标显示在哪一列, footer	表格尾部, indentSize	展示树形数据时，每层缩进的宽度, loading	页面是否加载中, locale	默认文案设置, pagination	分页器, rowClassName	表格行的类名, rowKey	表格行 key 的取值, rowSelection	列表项是否可选择, scroll	设置横向或纵向滚动, showHeader	是否显示表头, size	表格大小, title	表格标题, customHeaderRow	设置头部行属性, customRow	设置行属性, getPopupContainer	设置表格内各类浮层的渲染节点, transformCellText	数据渲染前可以再次改变，一般用户空数据的默认配置

# Tabs标签页
# Tag标签
# Timeline时间轴
# Tooltip文字提示
# Tree树形控件

反馈
# Alert警告提示
# Drawer抽屉
# Message全局提示

# Modal对话框
props: width 宽度, centered 垂直居中 

# Notification通知提醒框
# Popconfirm气泡确认框
# Progress进度条
# Result结果
# Skeleton骨架屏
# Spin加载中
# 其他
# Anchor锚点
# BackTop回到顶部
# ConfigProvider全局化配置