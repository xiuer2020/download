<template>
  <div class="demo">
    <div class="van-picker van-area">
      <div class="van-picker__toolbar">
        <button type="button" class="van-picker__cancel">取消</button> title
        slot <button type="button" class="van-picker__confirm">确认</button>
      </div>
      <!-- df + aic + jcsb + h44 -->
      columns-top slot
      <div class="van-picker__columns" style="height: 264px">
        <div class="van-picker-column">
          <ul
            class="van-picker-column__wrapper"
            style="
              transform: translate3d(0px, 110px, 0px);
              transition-duration: 0ms;
              transition-property: none;
            "
          >
            <li
              role="button"
              tabindex="0"
              class="van-picker-column__item van-picker-column__item--selected"
              style="height: 44px"
            >
              <div class="van-ellipsis">北京市</div>
            </li>
            <li
              role="button"
              tabindex="0"
              class="van-picker-column__item"
              style="height: 44px"
            >
              <div class="van-ellipsis">天津市</div>
            </li>
          </ul>
        </div>
        <div class="van-picker-column">
          <ul
            class="van-picker-column__wrapper"
            style="
              transform: translate3d(0px, 110px, 0px);
              transition-duration: 0ms;
              transition-property: none;
            "
          >
            <li
              role="button"
              tabindex="0"
              class="van-picker-column__item van-picker-column__item--selected"
              style="height: 44px"
            >
              <div class="van-ellipsis">北京市</div>
            </li>
          </ul>
        </div>
        <div class="van-picker-column">
          <ul
            class="van-picker-column__wrapper"
            style="
              transform: translate3d(0px, 110px, 0px);
              transition-duration: 0ms;
              transition-property: none;
            "
          >
            <li
              role="button"
              tabindex="0"
              class="van-picker-column__item van-picker-column__item--selected"
              style="height: 44px"
            >
              <div class="van-ellipsis">东城区</div>
            </li>
            <li
              role="button"
              tabindex="0"
              class="van-picker-column__item"
              style="height: 44px"
            >
              <div class="van-ellipsis">西城区</div>
            </li>
          </ul>
        </div>
        <div class="van-picker__mask" style="background-size: 100% 110px"></div>
        <div
          class="van-hairline-unset--top-bottom van-picker__frame"
          style="height: 44px"
        ></div>
      </div>
      columns-bottom slot
      <!---->
    </div>
    <!-- posr -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>