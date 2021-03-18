设定 HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');

+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'Output Management'
+     })
+   ],
```

clean-webpack-plugin
npm install clean-webpack-plugin --save-dev
new CleanWebpackPlugin(['dist']),



map
devtool: 'inline-source-map',

自动编译
webpack's Watch Mode
"watch": "npx webpack --watch",
<!-- 监听文件夹变动 如果有文件变化 就自动重新编译 -->
<!-- 自动重新生成了 index.html &&  js..... -->

<!-- vscode live server插件 实时预览 监听css html js静态文件变化 自动刷新 -->



webpack-dev-server

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)

<!-- webpack-dev-middleware -->