<template>
  <div class="demo">
    <div
      role="button"
      tabindex="0"
      class="van-cell van-cell--clickable van-coupon-cell"
    >
      <div class="van-cell__title"><span>优惠券</span></div>
      <div class="van-cell__value van-coupon-cell__value">
        <span>暂无可用</span>
      </div>
      <i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i>
    </div>
    <div class="van-overlay" style="z-index: 2003; display: none"></div>
    <div
      class="van-popup van-popup--round van-popup--bottom"
      style="height: 90%; padding-top: 4px; z-index: 2004; /* display: none; */"
    >
      <div class="van-coupon-list">
        <div class="van-coupon-list__exchange-bar">
          <div
            class="van-cell van-cell--borderless van-field van-coupon-list__field"
          >
            <div
              class="van-cell__value van-cell__value--alone van-field__value"
            >
              <div class="van-field__body">
                <input
                  type="text"
                  placeholder="请输入优惠码"
                  class="van-field__control"
                />
              </div>
            </div>
          </div>
          <button
            disabled="disabled"
            class="van-button van-button--danger van-button--normal van-button--plain van-button--disabled van-coupon-list__exchange"
          >
            <div class="van-button__content">
              <span class="van-button__text">兑换</span>
            </div>
          </button>
        </div>
        <div class="van-tabs van-tabs--line van-coupon-list__tab">
          <div class="van-tabs__wrap">
            <div role="tablist" class="van-tabs__nav van-tabs__nav--line">
              <div role="tab" class="van-tab">
                <span class="van-tab__text van-tab__text--ellipsis"
                  >可用 (0)</span
                >
              </div>
              <div
                role="tab"
                class="van-tab van-tab--active"
                aria-selected="true"
              >
                <span class="van-tab__text van-tab__text--ellipsis"
                  >不可用 (0)</span
                >
              </div>
              <div
                class="van-tabs__line"
                style="
                  transform: translateX(281.5px) translateX(-50%);
                  transition-duration: 0.3s;
                "
              ></div>
            </div>
          </div>
          <div class="van-tabs__content">
            <div role="tabpanel" class="van-tab__pane" style="display: none">
              <div
                class="van-coupon-list__list van-coupon-list__list--with-bottom"
                style="height: 527px"
              >
                <div class="van-coupon-list__empty">
                  <img src="https://img01.yzcdn.cn/vant/coupon-empty.png" />
                  <p>暂无优惠券</p>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="van-tab__pane" style="">
              <div
                class="van-coupon-list__list van-coupon-list__list--with-bottom"
                style="height: 527px"
              >
                <div class="van-coupon-list__empty">
                  <img src="https://img01.yzcdn.cn/vant/coupon-empty.png" />
                  <p>暂无优惠券</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="van-coupon-list__bottom">
          <button
            class="van-button van-button--danger van-button--normal van-button--block van-button--round van-coupon-list__close"
          >
            <div class="van-button__content">
              <span class="van-button__text">不使用优惠券</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>