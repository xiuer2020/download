<template>
  <div class="demo">
    <div class="van-grid van-hairline--top">
      <div class="van-grid-item" style="flex-basis: 25%">
        <div
          class="van-grid-item__content van-grid-item__content--center van-hairline"
        >
          default slot
        </div>
        <!-- df + fxdc + h100 + p -->
      </div>
    </div>
    <!-- df -->

    <div class="van-grid-item" style="flex-basis: 25%">
      <div
        class="van-grid-item__content van-grid-item__content--center van-hairline"
      >
        <div class="van-grid-item__icon-wrapper">icon slot<!----></div>
        <!-- posr -->
        text slot
      </div>
      <!-- df + fxdc + h100 + p -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>