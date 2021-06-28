# 快速开始
[1]命令行: git clone https://github.com/anncwb/vben-admin-thin-next.git
拉取项目
[2]npm install --ignore-scripts
安装依赖
[3]npm run dev
运行项目

# Meta 配置说明
export interface RouteMeta {
  // 路由title  一般必填
  title: string;
  // 是否忽略权限，只在权限模式为Role的时候有效
  ignoreAuth?: boolean;
  // 可以访问的角色，只在权限模式为Role的时候有效
  roles?: RoleEnum[];
  // 是否忽略KeepAlive缓存
  ignoreKeepAlive?: boolean;
  // 是否固定标签
  affix?: boolean;
  // 图标，也是菜单图标
  icon?: string;
  // 内嵌iframe的地址
  frameSrc?: string;
  // 指定该路由切换的动画名
  transitionName?: string;
  // 隐藏该路由在面包屑上面的显示
  hideBreadcrumb?: boolean;
  // 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true
  carryParam?: boolean;
  // 隐藏所有子菜单
  hideChildrenInMenu?: boolean;
  // 当前激活的菜单。用于配置详情页时左侧激活的菜单路径
  currentActiveMenu?: string;
  // 当前路由不再标签页显示
  hideTab?: boolean;
  // 当前路由不再菜单显示
  hideMenu?: boolean;
}

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

