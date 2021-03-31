# 使用
[1]<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">  
<!-- CDN引入CSS -->
[2]<script src="https://unpkg.com/swiper/swiper-bundle.js"> </script> 
<!-- CDN引入js -->

# DOM
[1]类[swiper-container]用于轮播图初始化化[容器], 可[自定义]
[2]类[swiper-pagination]用于[分页器], 可[自定义]
[3]类[swiper-button-prev], [swiper-button-prev]用于[导航按钮], 可[自定义]
[4]类[swiper-scrollbar]用于[滚动条], 可[滚动条]
[5]类[swiper-wrapper]用于轮播图[slide]各项[容器]
[6]类[swiper-slide]用于[轮播项]


# API
[1]new Swiper(swiperContainer[, parameters])
<!-- 初始化 -->

# parameters属性
[1]pagination: 可以配置[nextEl], [prevEl]属性, 即上一项选择器, 下一项选择器
分页器
[2]navigation: 可以配置[el]属性, 即选择器
分页器
[3]scrollbar: 可以配置[el]属性, 即选择器
滚动条
[4]autoplay: 可以设置为[Boolean]或配置[delay], [stopOnLastSlide], [disableOnInterraction]
自动轮播
[5]
[6]
[7]
[8]
[9]
[10]