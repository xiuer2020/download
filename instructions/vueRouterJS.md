# 安装
npm install vue-router


scrollBehavior (to, [from[, savedPosition]]) => ({x:Number, y: Number})
<!-- 函数可以返回一个滚动位置对象 -->

# route属性
hidden: Boolean 
<!-- 是否需要展示该路由, 是否渲染该路由入口 -->
redirect： String|Object
<!-- 重定向 -->
replace
<!-- 页面切换时不会留下历史记录 -->

# API
replace
<!-- 跳转到指定的url -->