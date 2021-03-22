# 安装
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-cookies@1.7.4/vue-cookies.js"></script>
npm install vue-cookies --save

# 使用
1)import Vue from 'vue'
2)import VueCookies from 'vue-cookies'
3)Vue.use(VueCookies)

# Api 语法格式 this/Vue.$cookies.[method]
$cookies.config(expireTimes[,path[, domain[, secure[, sameSite]]]])  // default: expireTimes = 1d, path = '/', domain = '', secure = '', sameSite = 'Lax'
<!-- 设置全局配置 expireTimes： 过期事件, 使用UTC时间,单位: y:year, m: month, d: day, h: hour, min: minute, s: second; sameSite: 设置安全-->
$cookies.set(keyName, value[, expireTimes[, path[, domain[, secure[, sameSite]]]]])
<!-- 设置cookie -->
$cookies.get(keyName)                   
<!-- 获取cookie -->
$cookies.remove(keyName [, path [, domain]])  // return this
<!-- 移除cookie -->
$cookies.isKey(keyName)  
<!-- 是否存在cookie -->
$cookies.keys()  
<!-- 获取所有cookie键名 -->
