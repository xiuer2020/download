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

# 布局
# Divider分割线
# Grid栅格
# Layout布局
# Space间距

导航
# Affix固钉
# Breadcrumb面包屑
# Dropdown下拉菜单
# Menu导航菜单
# PageHeader页头
# Pagination分页
# Steps步骤条

数据录入
# AutoComplete自动完成
# Cascader级联选择
# Checkbox多选框
# DatePicker日期选择框
# Form表单
# Input输入框
# InputNumber数字输入框
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