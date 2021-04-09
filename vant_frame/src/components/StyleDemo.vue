<template>
  <div class="demo">
    <div class="van-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>
    <!-- 最多显示一行 ovh + whsn + tove 需要setWith -->

    <div class="van-multi-ellipsis--l2">
      这是一段最多显示两行的文字，多余的内容会被省略
    </div>
    <!----    display: -webkit-box;-->
    <!--      -webkit-line-clamp: 2;-->
    <!--      -webkit-box-orient: vertical; -->
    <!--      最多显示两行 以及 ovh + tove -->

    <div class="van-multi-ellipsis--l3">
      这是一段最多显示三行的文字，多余的内容会被省略
    </div>
    <!-- 最多显示三行 同上 -webkit-line-clamp: 3; -->

    <div class="van-hairline--top"></div>
    <!-- 上边框 posa + t-50p + r-50p + b-50p + l-50p + bd + trfscz0.5 -->

    <hr>

    <div class="van-hairline--top-bottom"></div>
    <!-- 上下边框 同上 -->

    <div class="van-hairline--surround"></div>
    <!-- 全边框 同上 -->


    <van-cell @click="showStat = !showStat">{{showStat}}</van-cell>

    <!-- 淡入 -->
    <transition name="van-fade">
      <div v-show="showStat">Fade</div>
    </transition>

    <!-- 上滑进入 -->
    <transition name="van-slide-up">
      <div v-show="showStat">Slide Up</div>
    </transition>

    <!-- 下滑进入 -->
    <transition name="van-slide-down">
      <div v-show="showStat">Slide Down</div>
    </transition>

    <!-- 左滑进入 -->
    <transition name="van-slide-left">
      <div v-show="showStat">Slide Left</div>
    </transition>

    <!-- 右滑进入 -->
    <transition name="van-slide-right">
      <div v-show="showStat">Slide Right</div>
    </transition>
  </div>

</template>
