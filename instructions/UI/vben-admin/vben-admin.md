# 快速开始
[1]命令行: git clone https://github.com/anncwb/vben-admin-thin-next.git
拉取项目
[2]npm install --ignore-scripts
安装依赖
[3]npm run dev
运行项目

# 目录结构
├── build # 构建相关脚本
├── mock # 模拟数据
├── public # 静态资源
├── src # 项目代码
│   ├── api #请求相关
│   ├── assets # 静态资源
│   ├── components # 组件
│   ├── design  # 样式
│   ├── enums # 常量，枚举
│   ├── hooks # hooks
│   ├── logics # 逻辑相关
│   ├── layouts # 布局
│   ├── main.ts # 入口文件
│   ├── router #路由，菜单等
│   ├── locale #多语言文件
│   ├── settings # 配置文件
│   ├── plugins # 插件
│   ├── store # vuex
│   ├── utils # 工具类
│   └── views # 页面
└── types # 类型定义

# 路由
在src/router/routes/modules内新增一个模块文件

# 路由菜单
项目菜单配置存放于src/router/menus 内新增一个模块文件

# 路由菜单多语言
配置存放于src\locales\lang\zh_CN\routes 内新增一个模块文件
引用: routes.modulesName.prop



