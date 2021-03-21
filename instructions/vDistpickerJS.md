v-distpicker的使用

# 安装
npm install v-distpicker --save

# 注册与使用
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker);

# 使用方法
<!-- <v-distpicker hide-area @selected="sel" :province='province' :city='myaddress'></v-distpicker> -->

#　属性介绍
type=“mobile”
# 是否在手机端加入 
hide-area
# 是否显示区县 
:province=‘省’
# 是否可反向绑定值 
selected
# 选择时触发的事件

