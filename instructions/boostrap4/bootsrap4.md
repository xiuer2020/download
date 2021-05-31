


# 引入
[1]1行css
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
[2]三行js
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
[3]<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
元信息

# 预编译的 Bootstrap文件下载并解压后，你将看到文件夹中包含如下文件：
  bootstrap/
  ├── css/
  │   ├── bootstrap-grid.css
  │   ├── bootstrap-grid.css.map
  │   ├── bootstrap-grid.min.css
  │   ├── bootstrap-grid.min.css.map
  │   ├── bootstrap-reboot.css
  │   ├── bootstrap-reboot.css.map
  │   ├── bootstrap-reboot.min.css
  │   ├── bootstrap-reboot.min.css.map
  │   ├── bootstrap.css
  │   ├── bootstrap.css.map
  │   ├── bootstrap.min.css
  │   └── bootstrap.min.css.map
  └── js/
      ├── bootstrap.bundle.js
      ├── bootstrap.bundle.js.map
      ├── bootstrap.bundle.min.js
      ├── bootstrap.bundle.min.js.map
      ├── bootstrap.js
      ├── bootstrap.js.map
      ├── bootstrap.min.js
      └── bootstrap.min.js.map

#　Bootstrap 源码
  源码包括预编译的 [CSS] 和 [JavaScript] 资源，以及 [Sass]、[JavaScript] 和文档源码。更具体地说，它包括以下甚至更多内容：
  Copy
  bootstrap/
  ├── dist/
  │   ├── css/
  │   └── js/
  ├── site/
  │   └──content/
  |      └──docs/
  |         └── 4.6/
  |             └── examples/
  ├── js/
  └── scss/

#　你可以在 .browserslistrc 文件 中找到 Bootstrap 所支持地浏览器及版本列表：
  >= 1%
  last 1 major version
  not dead
  Chrome >= 45
  Firefox >= 38
  Edge >= 12
  Explorer >= 10
  iOS >= 9
  Safari >= 9
  Android >= 4.4
  Opera >= 30

# 浏览器和设备调优
https://getbootstrap.net/docs/getting-started/browsers-devices/

# javascript脚本
https://getbootstrap.net/docs/getting-started/javascript/

# 主题化
https://getbootstrap.net/docs/getting-started/theming/

# 编译工具
https://getbootstrap.net/docs/getting-started/build-tools/

# Webpack模块化
https://getbootstrap.net/docs/getting-started/webpack/

# 无障碍浏览
https://getbootstrap.net/docs/getting-started/accessibility/

# 组件
提示
八个颜色样式,链接颜色, 额外附加内容


徽章
嵌在标题, 作链接或按钮的一部分, 八个颜色样式, 椭圆形胶囊, 带链接效果

面包屑导航
.breadcrumb>.breadcrumb-item

按钮
9个预定义, 轮廓按钮, 尺寸规格与大小, 启用状态, 禁用状态, 复选框和单选框

按钮组
.btn 包裹在.btn-group内, 对按钮进行群组、间隔等定义，将按钮组的组合组合成为更复杂组件的按钮工具栏, 大小规格和尺寸缩放, 嵌套, 垂直排列

卡片
.card>.card-img-top+.card-body>.card-title
带边框的内容, 副标题, 图片, 列表组, 页眉页脚

轮播效果
.carousel>.carousel-inner>.carousel-item^.carousel-control-prev+.carousel-control-next+.carousel-indicators>li
带控制器的效果, 包含姿态指示器, 包含字幕的轮播, 交替变化, 延迟, 开放api

折叠面板
a[href=#target data-toggle=collapse]

下拉菜单
.dropdown>.dropdown-toggle+.dropdown-menu>.dropdown-item
颜色及样式类, 分裂式按钮, 尺寸大小, 方向, 菜单项, 不可用菜单, 对齐, 响应式对齐, 头部, 菜单分隔与分割线, 菜单表单, 更改下拉菜单的位置

表单
.form-group>.form-control+.form-text
表单控件, 选择控件, 大小规格, 只读属性, 只读纯文本, 输入范围, 复选框与单选框, 水平排列, 没有标签, 表单组,

输入框
.input-group>.input-group-prepend>.input-group-text^.form-control | .input-group>.form-control + .input-group-append>.input-group-text
包装, 尺寸, 勾选或单选框, 多个输入, 按钮组合, 带下拉列表, 分裂式按钮与input组合

列表组
.list-group>.list-group-item
启用, 禁用， 链接和按钮， Flush紧致贴齐， 水平， 语境颜色， 引入badge微章，

弹出模态框
button[data-toggle=modal data-target=#target]
.modal>.modal-dialog>.modal-content>.modal-header>.modal-title^.modal-boby+.modal-footer
滚动长内容, 居中显示, 

导航/滑动门(nav)
.nav>.nav-item>.nav-link
水平对齐, 垂直排列, Tabs标签, 胶囊式, 填充和对齐, 

导航栏
https://getbootstrap.net/docs/components/navbar/

分页
.pagination>.pagination-item>.page-link
图标, 禁用和活动状态, 规格, 对齐, 

POP提示
dom[data-toggle=popover title=title]
四个方向, 在下次点击时收回, 禁用的元素

进度条
.progress>.progress-bar
标签, 高度, 背景, 多进度条进度, 条纹进度指示, 动画条纹, 

滚动监听
dom[data-target=#target] a[href=demo]

提示冒泡

























































