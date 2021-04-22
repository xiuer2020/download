
# 起步
JS-SDK 的模式并没有解决使用移动网页遇到的[体验不良]的问题, 设计了一个 [JS-SDK] 的[增强版本]
网页开发者可以使用到各种浏览器暴露出来的 `DOM API`，进行 DOM [选中和操作]。而如上文所述，小程序的逻辑层和渲染层是分开的，逻辑层运行在 i 中，并没有一个完整浏览器对象，因而缺少相关的`DOM API`和`BOM API`。这一区别导致了前端开发非常熟悉的一些库，例如 `jQuery、 Zepto` 等，在小程序中是无法运行的

# 组件模板
[定义]<Dom><slot></slot>
[使用]<component-tag-name>default slot </component-tag-name>
  注意，在模板中引用到的[自定义组件]及其对应的节点名需要在 [json] 文件中[显式定义]，否则会被当作一个[无意义]的节点。除此以外，节点名也可以被声明为抽象节点。
  
# 模板数据绑定
  与普通的 WXML 模板类似，[可以]使用数据绑定，这样就可以向子组件的属性传递动态数据。
[定义]<component-tag-name prop-a="{{dataFieldA}}" prop-b="{{dataFieldB}}"></component-tag-name>
注意：这样的数据绑定只能传递 [JSON 兼容数据]。自基础库版本 2.0.9 开始，还可以在数据中包含函数（但这些函数不能在 WXML 中直接调用，只能传递给子组件）。
[多 slot] 时，可以在组件 js 中[声明启用]。
  Component(compenent)
  compenent: Object
  compenent.options: Object
  compenent.options.multipleSlot: Boolean  [启用多slot支持]
[使用] <slot name="after"></slot>
 
 # 组件样式
  组件对应 wxss 文件的样式，[只对组件wxml内的节点生效]。编写组件样式时，需要注意以下几点：
  
  组件和引用组件的页面不能使用id选择器（#a）、属性选择器（[a]）和标签名选择器，请改用class选择器。
  组件和引用组件的页面中使用后代选择器（.a .b）在一些极端情况下会有非预期的表现，如遇，请避免使用。
  子元素选择器（.a>.b）只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况。
  继承样式，如 font 、 color ，会从组件外继承到组件内。
  除继承样式外， app.wxss 中的样式、组件所在页面的的样式对自定义组件无效（除非更改组件样式[隔离选项]）。
  
  # 组件样式隔离
  Component(compenent)
    compenent: Object
    compenent.options: Object
    compenent.options.styleIsolation: String  [启用多slot支持]
  app.wxss 或页面的 wxss 中使用了标签名选择器（或一些其他特殊选择器）来直接指定样式，这些选择器会[影响到页面和全部组件]。通常情况下这是[不推荐]的做法。
  
  styleIsolation 它支持以下取值：
  [isolated, apply-shared, shared, page-isolated, page-apply-shared, page-shared]
  isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
  apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
  shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）
  使用后两者时，请务必注意组件间样式的相互影响。
  
  如果这个 Component 构造器用于构造页面 ，则默认值为 shared ，且还有以下几个额外的样式隔离选项可用：
  
  page-isolated 表示在这个页面禁用 app.wxss ，同时，页面的 wxss 不会影响到其他自定义组件；
  page-apply-shared 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式不会影响到其他自定义组件，但设为 shared 的自定义组件会影响到页面；
  page-shared 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式会影响到其他设为 apply-shared 或 shared 的自定义组件，也会受到设为 shared 的自定义组件的影响。
  从小程序基础库版本 2.10.1 开始，也可以在页面或自定义组件的 json 文件中配置 styleIsolation （这样就不需在 js 文件的 options 中再配置）。例如：
  
  {
    "styleIsolation": "isolated"
  }
  此外，小程序基础库版本 2.2.3 以上支持 addGlobalClass 选项，即在 Component 的 options 中设置 addGlobalClass: true 。 这个选项等价于设置 styleIsolation: apply-shared ，但设置了 styleIsolation 选项后这个选项会失效。
  
  代码示例：
  
  在开发者工具中预览效果
  
  /* 组件 custom-component.js */
  Component({
    options: {
      addGlobalClass: true,
    }
  })
  <!-- 组件 custom-component.wxml -->
  <text class="red-text">这段文本的颜色由 `app.wxss` 和页面 `wxss` 中的样式定义来决定</text>
  /* app.wxss */
  .red-text {
    color: red;
  }
  外部样式类
  基础库 1.9.90 开始支持，低版本需做兼容处理。
  
  有时，组件希望接受外部传入的样式类。此时可以在 Component 中用 externalClasses 定义段定义若干个外部样式类。
  
  这个特性可以用于实现类似于 view 组件的 hover-class 属性：页面可以提供一个样式类，赋予 view 的 hover-class ，这个样式类本身写在页面中而非 view 组件的实现中。
  
  注意：在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此最好避免这种情况。
  
  代码示例：
  
  /* 组件 custom-component.js */
  Component({
    externalClasses: ['my-class']
  })
  <!-- 组件 custom-component.wxml -->
  <custom-component class="my-class">这段文本的颜色由组件外的 class 决定</custom-component>
  这样，组件的使用者可以指定这个样式类对应的 class ，就像使用普通属性一样。在 2.7.1 之后，可以指定多个对应的 class 。
  
  代码示例：
  
  在开发者工具中预览效果
  
  <!-- 页面的 WXML -->
  <custom-component my-class="red-text" />
  <custom-component my-class="large-text" />
  <!-- 以下写法需要基础库版本 2.7.1 以上 -->
  <custom-component my-class="red-text large-text" />
  .red-text {
    color: red;
  }
  .large-text {
    font-size: 1.5em;
  }
  引用页面或父组件的样式
  基础库 2.9.2 开始支持，低版本需做兼容处理。
  
  即使启用了样式隔离 isolated ，组件仍然可以在局部引用组件所在页面的样式或父组件的样式。
  
  例如，如果在页面 wxss 中定义了：
  
  .blue-text {
    color: blue;
  }
  在这个组件中可以使用 ~ 来引用这个类的样式：
  
  <view class="~blue-text"> 这段文本是蓝色的 </view>
  如果在一个组件的父组件 wxss 中定义了：
  
  .red-text {
    color: red;
  }
  在这个组件中可以使用 ^ 来引用这个类的样式：
  
  <view class="^red-text"> 这段文本是红色的 </view>
  也可以连续使用多个 ^ 来引用祖先组件中的样式。
  
  注意：如果组件是比较独立、通用的组件，请优先使用外部样式类的方式，而非直接引用父组件或页面的样式。
  
  虚拟化组件节点
  基础库 2.11.2 开始支持，低版本需做兼容处理。
  
  默认情况下，自定义组件本身的那个节点是一个“普通”的节点，使用时可以在这个节点上设置 class style 、动画、 flex 布局等，就如同普通的 view 组件节点一样。
  
  <!-- 页面的 WXML -->
  <view style="display: flex">
    <!-- 默认情况下，这是一个普通的节点 -->
    <custom-component style="color: blue; flex: 1">蓝色、满宽的</custom-component>
  </view>
  但有些时候，自定义组件并不希望这个节点本身可以设置样式、响应 flex 布局等，而是希望自定义组件内部的第一层节点能够响应 flex 布局或者样式由自定义组件本身完全决定。
  
  这种情况下，可以将这个自定义组件设置为“虚拟的”：
  
  Component({
    options: {
      virtualHost: true
    },
    properties: {
      style: { // 定义 style 属性可以拿到 style 属性上设置的值
        type: String,
      }
    },
    externalClasses: ['class'], // 可以将 class 设为 externalClasses
  })
  这样，可以将 flex 放入自定义组件内：
  
  <!-- 页面的 WXML -->
  <view style="display: flex">
    <!-- 如果设置了 virtualHost ，节点上的样式将失效 -->
    <custom-component style="color: blue">不是蓝色的</custom-component>
  </view>
  <!-- custom-component.wxml -->
  <view style="flex: 1">
    满宽的
    <slot></slot>
  </view>
  需要注意的是，自定义组件节点上的 class style 和动画将不再生效，但仍可以：
  
  将 style 定义成 properties 属性来获取 style 上设置的值；
  将 class 定义成 externalClasses 外部样式类使得自定义组件 wxml 可以使用 class 值。


# npm 支持
 [1] 在小程序 [package.json] 所在的目录中执行命令 [npm install] 安装 npm 包：
 [2] 开发者工具中的菜单栏：工具 --> 构建 npm
 构建 npm 
 [3]勾选“使用 npm 模块”选项：
 [4]require()
 可使用 npm 包
 [5]使用 npm 包中的自定义组件
 
 # 默认的构建 npm 方式
 [构建 npm 前]
 ├── miniprogram
 │   ├── app.js
 │   ├── app.json
 │   ├── app.wxss
 │   ├── index
 │   │   ├── 略
 │   ├── node_modules // 可被默认方式构建 npm，因为它在 miniprogramRoot 内
 │   ├── package.json
 │   └── sub_package
 │       ├── node_modules // 可被默认方式构建 npm，因为它在 miniprogramRoot 内
 │       ├── package.json
 │       └── sub_package_page
 ├── node_modules // 不被默认方式构建 npm，因为它不在 miniprogramRoot 内
 ├── package.json
 └── project.config.json // 其中存在配置 `"miniprogramRoot": "./miniprogram"`
 
 [构建 npm 后]
 ├── miniprogram
 │   ├── app.js
 │   ├── app.json
 │   ├── app.wxss
 │   ├── index
 │   │   ├── 略
 │   ├── miniprogram_npm
 │   ├── node_modules // 可被默认方式构建 npm，因为它在 miniprogramRoot 内 --> 同级的 miniprogram_npm 是这份 node_modules 的构建结果
 │   ├── package.json
 │   └── sub_package
 │       ├── miniprogram_npm 
 │       ├── node_modules // 可被默认方式构建 npm，因为它在 miniprogramRoot 内 --> 同级的 miniprogram_npm 是这份 node_modules 的构建结果
 │       ├── package.json
 │       └── sub_package_page
 ├── node_modules // 不被默认方式构建 npm，因为它不在 miniprogramRoot 内 --> 它并没有对应的 miniprogram_npm 生成
 ├── package.json
 └── project.config.json // 其中存在配置 `"miniprogramRoot": "./miniprogram"`
 
 #自定义 node_modules 和 miniprogram_npm 位置的构建 npm 方式
 与 “默认的构建 npm 方式” 不一样，此种方式需要开发者在 project.config.json 中指定 node_modules 的位置 和目标 miniprogram_npm 的位置。参考demo
 
 [使用方法]
 配置 project.config.json 的 [setting.packNpmManually] 为 [true]，开启自定义 node_modules 和 miniprogram_npm 位置的构建 npm 方式
 配置 project.config.json 的 [setting.packNpmRelationList] 项，指定 packageJsonPath 和 miniprogramNpmDistDir 的位置
 其中 [packNpmRelationList] 的格式为
 
 packageNpmRelationList: Array<{
   "packageJsonPath": string,
   "miniprogramNpmDistDir": string
 }>
[packageJsonPath] 表示 node_modules 源对应的 package.json
[miniprogramNpmDistDir] 表示 node_modules 的构建结果目标位置
 构建 npm 前
 .
 ├── miniprogram
 │   ├── app.js
 │   ├── app.json
 │   ├── app.wxss
 │   ├── index
 │   ├── sitemap.json
 │   └── sub_package
 │       └── sub_package_page
 ├── project.config.json
 ├── src_node_modules_1
 │   ├── node_modules
 │   └── package.json
 └── src_node_modules_2
     ├── node_modules
     └── package.json
 其中 project.config.json 存在配置
 
 "setting": {
   "packNpmManually": true,
   "packNpmRelationList": [
     {
       "packageJsonPath": "./src_node_modules_1/package.json",
       "miniprogramNpmDistDir": "./miniprogram/"
     },
     {
       "packageJsonPath": "./src_node_modules_2/package.json",
       "miniprogramNpmDistDir": "./miniprogram/sub_package"
     }
   ]
 }
 构建 npm 后
 .
 ├── miniprogram
 │   ├── app.js
 │   ├── app.json
 │   ├── app.wxss
 │   ├── index
 │   ├── miniprogram_npm // 由 src_node_modules_1/node_modules 构建得到
 │   ├── sitemap.json
 │   └── sub_package
 │       ├── miniprogram_npm // 由 src_node_modules_2/node_modules 构建得到
 │       └── sub_package_page
 ├── project.config.json
 ├── src_node_modules_1
 │   ├── node_modules
 │   └── package.json
 └── src_node_modules_2
     ├── node_modules
     └── package.json
 
 
 # api
 App(Object object)
 Object:{[onLaunch[, onshow[, onHide[, onError[, onPageNotFound[, PageNotFound[, onThemeChange[, 其他]]]]]]]])
 onLaunch: (Object) => {}
 生命周期回调——监听小程序初始化。 参数[Object]也可以使用 [wx.getLaunchOptionsSync] 获取
 onShow: (Object) => {}
 生命周期回调——监听小程序启动或切前台。 也可通过[wx.onAppShow]绑定监听
 onHide: () => {}
 生命周期回调——监听小程序切后台。	也可通过[wx.onAppHide]绑定监听
 onError: (String) => {}
 错误监听函数。	也可通过[wx.onError]绑定监听
 onPageNotFound: (Object) => {}
 页面不存在监听函数。	1.9.90 也可通过[wx.onPageNotFound]绑定监听
 onUnhandledRejection: (Object) => {}
 未处理的 Promise 拒绝事件监听函数。	2.10.0  也可通过[wx.onUnhandledRejection]绑定监听
 onThemeChange: () => {}
 监听系统主题变化	2.11.0 也可通过[wx.onThemeChange]绑定监听
 其他:	any
 开发者可以添加任意的函数或数据变量到 Object 参数中，用 this 可以访问

getApp()
 获取到小程序全局唯一的 [App 实例]
 
 Page(page)
  模块提供了[控制小程序页面]的方法
 page:{path, query, $}
 
 page.path: string
 [页面路径]。
 page.query: Object
 [页面参数]。
 page.$(selector: string): Promise<Element>
 获取[页面元素]。 page.$$(selector: string): Promise<Element[]>
 page.waitFor(condition: string | number | Function): Promise<void>
 等待[直到指定条件成立]。
 page.data(path?: string): Promise<Object>
 传递[数据]路径 automator 0.6.0，基础库 2.9.0 开始支持。
 page.setData
 [设置]页面渲染数据。
 page.size(): Promise<Object>
 获取[页面大小]。
 page.scrollTop(): Promise<number>
 获取页面[滚动位置]。
 page.callMethod(method: string, ...args: any[]): Promise<any>
 调用[页面指定方法]。
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 