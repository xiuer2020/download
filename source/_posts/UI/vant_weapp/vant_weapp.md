# 快速上手
[1]命令行: npm i @vant/weapp
[2]app.json: "style": "v2" 去除
[3]project.config.json: 
"setting": {
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
[4]点击 工具 -> 构建 npm
[5]命令行: npm i -D miniprogram-api-typings
[6]tsconfig.json: 
"compilerOptions": {
    "baseUrl": ".",
    "types": ["miniprogram-api-typings"],
    "paths": {
      "@vant/weapp/*": ["path/to/node_modules/@vant/weapp/dist/*"]
    },
    "lib": ["ES6"]
  }

# 引入组件
app.json || page.json: 
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}

# 使用
<van-button type="primary">按钮</van-button>

# 样式覆盖
https://vant-contrib.gitee.io/vant-weapp/#/custom-style

# 定制主题
https://vant-contrib.gitee.io/vant-weapp/#/theme
