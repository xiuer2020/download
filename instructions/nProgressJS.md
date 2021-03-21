# 安装
$ npm install --save nprogress 或者
$ yarn add nprogress

# 用法
NProgress.start();
NProgress.done();

# 使用
router.js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})