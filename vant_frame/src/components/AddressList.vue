<template>
  <div class="demo">
    <div class="van-address-list">
      top slot
      <div role="radiogroup" class="van-radio-group">
        <div class="van-address-item">
          <div class="van-cell van-cell--borderless">
            <div
              class="van-cell__value van-cell__value--alone van-address-item__value"
            >
              <div
                role="radio"
                tabindex="-1"
                aria-checked="false"
                class="van-radio"
              >
                <div
                  class="van-radio__icon van-radio__icon--round"
                  style="font-size: 18px"
                >
                  <i class="van-icon van-icon-success">
                      <!-- ::before -->
                  </i>
                </div>
                <span class="van-radio__label"
                  ><div class="van-address-item__name">
                    张三 13000000000tag slot
                  </div>
                  <!-- df + aic + mb8 + lh22px -->
                  <div class="van-address-item__address">
                    浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室
                  </div></span
                >
              </div>
            </div>
            <i class="van-icon van-icon-edit van-address-item__edit">
                <!-- ::before -->
            </i>
          </div>
          item-bottom slot
        </div>
        <!-- p + mb12 -->
        <div class="van-address-item">
          <div class="van-cell van-cell--borderless">
            <div
              class="van-cell__value van-cell__value--alone van-address-item__value"
            >
              <div
                role="radio"
                tabindex="-1"
                aria-checked="false"
                class="van-radio"
              >
                <div
                  class="van-radio__icon van-radio__icon--round"
                  style="font-size: 18px"
                >
                  <i class="van-icon van-icon-success">
                      <!-- ::before -->
                  </i>
                </div>
                <span class="van-radio__label"
                  ><div class="van-address-item__name">
                    李四 1310000000tag slot
                  </div>
                  <div class="van-address-item__address">
                    浙江省杭州市拱墅区莫干山路 50 号
                  </div></span
                >
              </div>
            </div>
            <i class="van-icon van-icon-edit van-address-item__edit">
                <!-- ::before -->
            </i>
          </div>
          item-bottom slot
        </div>
      </div>
      default slot
      <div class="van-address-list__bottom">
        <button
          class="van-button van-button--danger van-button--normal van-button--block van-button--round van-address-list__add"
        >
        <!-- ::before -->
          <div class="van-button__content">
        <!-- ::before -->

            <span class="van-button__text">新增地址</span>
          </div>
        </button>
      </div>
    </div>
    <!-- h100p + p -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>