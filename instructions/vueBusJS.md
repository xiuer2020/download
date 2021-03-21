# 安装
$ yarn add vue-bus
$ npm install vue-bus --save

# 使用
import Vue from 'vue';
import VueBus from 'vue-bus';
Vue.use(VueBus);

# 监听
on(event, enventHandle)
once(event, enventHandle)

# 清除
off(event, eventHandle)

# 触发
emit(event, args)

# 其他使用方法
Vue.bus.emit(event)