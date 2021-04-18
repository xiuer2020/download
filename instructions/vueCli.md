# 介绍
Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供：
通过 @vue/cli 实现的交互式的项目脚手架。
通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发。
一个运行时依赖 (@vue/cli-service)，该依赖：
可升级；
基于 webpack 构建，并带有合理的默认配置；
可以通过项目内的配置文件进行配置；
可以通过插件进行扩展。
一个丰富的官方插件集合，集成了前端生态中最好的工具。
一套完全图形化的创建和管理 Vue.js 项目的用户界面。

# CLI
CLI (@vue/cli) 是一个全局安装的 npm 包
[vue create], [vue serve], [vue ui]

# Cli服务
CLI 服务 (@vue/cli-service) 是一个开发环境依赖。
CLI 服务是构建于 webpack 和 webpack-dev-server 之上
提供  serve、build 和 inspect 命令。

# CLI 插件
  CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，
  
# 快速原型开发

# 创建一个项目
vue create hello-world  

# 插件
  Vue CLI 使用了一套基于插件的架构
  依赖都是以 @vue/cli-plugin- 开头的
  
 # 在现有的项目中安装插件
 每个 CLI 插件都会包含一个 (用来创建文件的) 生成器和一个 (用来调整 webpack 核心配置和注入命令的) 运行时插件
 [vue add] 
 
 # 项目本地的插件
 
 # preset
 一个 Vue CLI preset 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。
 
 # Preset 插件的版本管理
 你可以显式地指定用到的插件的版本：
 
 # 允许插件的命令提示
 每个插件在项目创建的过程中都可以注入它自己的命令提示
 
 # 远程 Preset
   你可以通过发布 git repo 将一个 preset 分享给其他开发者
 
# 加载文件系统中的 Preset
  当开发一个远程 preset 的时候，你必须不厌其烦的向远程 repo 发出 push 进行反复测试
  
# 查看所有的可用命令
npx vue-cli-service help

# 缓存和并行处理

# 如果你遇到了编译方面的问题，记得先删掉缓存目录之后再试试看

# Git Hook

# 配置时无需 Eject


# browserslist
指定了项目的目标浏览器的范围

# Polyfill


# HTML 和静态资源
因为 index 文件被用作模板，所以你可以使用 lodash template 语法插入内容：
<%= VALUE %> 用来做不转义插值；
<%- VALUE %> 用来做 HTML 转义插值；
<% expression %> 用来描述 JavaScript 流程控制。
客户端环境变量: https://cli.vuejs.org/zh/guide/mode-and-env.html#using-env-variables-in-client-side-code

处理静态资源
在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。
放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。


# CSS 相关


# webpack 相关


# 模式和环境变量


# 构建目标


# 部署


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 


# 




















