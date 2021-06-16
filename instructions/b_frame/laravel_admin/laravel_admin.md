https://laravel-admin.org/docs/zh/1.x

# 简介
laravel-admin 是一个可以快速帮你构建后台管理的工具，它提供的页面组件和表单元素等功能，能帮助你使用很少的代码就实现功能完善的后台管理功能

# 安装
安装完成之后，laravel-admin所有的配置都在config/admin.php文件中
后台的安装目录为app/Admin，之后大部分的后台开发编码工作都是在这个目录下进行
app/Admin/routes.php文件用来配置后台路由。
app/Admin/bootstrap.php 是laravel-admin的启动文件, 使用方法请参考文件里面的注释.
app/Admin/Controllers目录用来存放后台控制器文件，该目录下的HomeController.php文件是后台首页的显示控制器，ExampleController.php为实例文件。
后台所需的前端静态文件在/public/vendor/laravel-admin目录下.

# 快速开始
菜单管理页http://localhost:8000/admin/auth/menu
在路由配置文件app/Admin/routes.php里添加一行：$router->resource('users', UserController::class) 添加路由



配置文件

版本升级

页面内容和布局

统一回复

基本使用

列的使用

列的显示

查询过滤

列过滤器

行内编辑

数据操作

自定义行&批量操作

数据导出

头部和脚部

表格初始化

表格统计行

快捷搜索

规格选择器

快捷创建

自定义工具

外部数据源

快捷键

软删除

基本使用

基础组件

图片/文件上传

JSON组件

关系处理

表单联动

组件管理

表单验证

表单回调

表单初始化
在 app/Admin/bootstrap.php

表单布局

基本使用

字段显示

关联关系

显示扩展
数据表单
语言本地化
CSS/JavaScript
扩展开发
控制台命令
页面消息
数据模型树
前端组件
用户、角色、权限
自定义登录认证
自定义头部导航
常见问题
Changelog
