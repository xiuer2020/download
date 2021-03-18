npm install --save-dev webpack
npm install --save-dev webpack@<version>
# 要安装最新版本或特定版本，请运行以下命令之一：

npm install --save-dev webpack-cli
# 如果你使用 webpack 4+ 版本，你还需要安装 CLI。

# 当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。

npm install less -g
# 全局安装 -g --global

本地安装 安装到当前目录 默认 -S --save -D --save-dev
# npm install --save-dev webpack

webpack
# 使用全局

node_modules/.bin/webpack
npx webpack
# 使用本地

npm init -y(-y参数为默认初始化)
# 初始化包 package.json 包描述


npm install jquery -S
# 最终项目需要jquery 项目依赖, 会在webpack.json文件的dependencies对象下生成一个键值对




npm install less -D
# 最终项目需要jquery 开发依赖, 会在webpack.json文件的dependencies对象下生成一个键值对

npm install less -g --registry=https://registry.npm.taobao.org
# 切换npm镜像源 

registry=https://registry.npm.taobao.org
## 修改配置文件 C:\Users\DONG\.npmrc 永久


# 入口文件 src/index.js 默认
# 出口文件 dist/main.js 默认

webpack.config.js
# webpack配置文件

npx webpack
# 如果目录下面存在 webpack.config.js 文件  就把这个文件当成默认的配置文件

npx webpack --config webpack.config.dev.js
# 指定不同的配置文件

npm run build
# webpack.json文件下script对象为命令的简写形式的运行方式

npm install --save-dev html-webpack-plugin
# 设定 HtmlWebpackPlugin

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');

+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'Output Management'
+     })
+   ],
```

clean-webpack-plugin
# 自动清除编译的文件
new CleanWebpackPlugin(['dist']),


webpack's Watch Mode
"watch": "npx webpack --watch",
# 自动编译
<!-- 监听文件夹变动 如果有文件变化 就自动重新编译 -->
<!-- 自动重新生成了 index.html &&  js..... -->
<!-- vscode live server插件 实时预览 监听css html js静态文件变化 自动刷新 -->



# webpack-dev-server
# webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

