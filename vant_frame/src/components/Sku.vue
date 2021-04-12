<template>
  <div class="demo">
    <div class="van-overlay" style="z-index: 2001"></div>
    <div
      class="van-popup van-popup--round van-popup--bottom van-popup--safe-area-inset-bottom van-sku-container"
      style="z-index: 2002"
    >
      <div class="van-sku-header van-hairline--bottom">
        <div class="van-image van-sku-header__img-wrap">
          <div class="van-image__error">
            <i class="van-icon van-icon-photo-fail van-image__error-icon"
              ><!----></i
            >
          </div>
        </div>
        <div class="van-sku-header__goods-info">
          <div class="van-sku__goods-price">
            <span class="van-sku__price-symbol">￥</span
            ><span class="van-sku__price-num">1.00</span>
          </div>
          <div class="van-sku-header-item">
            <span class="van-sku__stock"
              >剩余 <span class="van-sku__stock-num">227</span> 件</span
            >
          </div>
          <div class="van-sku-header-item">请选择 颜色</div>
        </div>
      </div>
      <div class="van-sku-body" style="max-height: 467px">
        <div class="van-sku-group-container">
          <div class="van-sku-row van-hairline--bottom">
            <div class="van-sku-row__title">颜色</div>
            <div class="van-sku-row__scroller">
              <div class="van-sku-row__row">
                <span class="van-sku-row__image-item"
                  ><div class="van-image van-sku-row__image-item-img">
                    <div class="van-image__error">
                      <i
                        class="van-icon van-icon-photo-fail van-image__error-icon"
                        ><!----></i
                      >
                    </div>
                  </div>
                  <div class="van-sku-row__image-item-name">
                    <span class="van-multi-ellipsis--l2">红色</span>
                  </div>
                  <i
                    class="van-icon van-icon-enlarge van-sku-row__image-item-img-icon"
                    ><!----></i
                  ></span
                ><span class="van-sku-row__image-item"
                  ><div class="van-image van-sku-row__image-item-img">
                    <img
                      src="https://img01.yzcdn.cn/2.jpg"
                      class="van-image__img"
                      style="object-fit: cover"
                    />
                  </div>
                  <div class="van-sku-row__image-item-name">
                    <span class="van-multi-ellipsis--l2">蓝色</span>
                  </div>
                  <i
                    class="van-icon van-icon-enlarge van-sku-row__image-item-img-icon"
                    ><!----></i
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="van-sku-stepper-stock">
          <div class="van-sku__stepper-title">购买数量</div>
          <div class="van-stepper van-sku__stepper">
            <button
              type="button"
              class="van-stepper__minus van-stepper__minus--disabled"
            ></button
            ><input
              type="tel"
              role="spinbutton"
              inputmode="numeric"
              aria-valuemax="227"
              aria-valuemin="1"
              aria-valuenow="1"
              class="van-stepper__input"
            /><button type="button" class="van-stepper__plus"></button>
          </div>
        </div>
        <div class="van-sku-messages">
          <div class="van-cell van-cell--required van-field">
            <div class="van-cell__title van-field__label">
              <span>留言</span>
            </div>
            <div class="van-cell__value van-field__value">
              <div class="van-field__body">
                <input
                  type="text"
                  placeholder="xxx"
                  class="van-field__control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="van-sku-actions">
        <button class="van-button van-button--warning van-button--large">
          <div class="van-button__content">
            <span class="van-button__text">加入购物车</span>
          </div></button
        ><button class="van-button van-button--danger van-button--large">
          <div class="van-button__content">
            <span class="van-button__text">立即购买</span>
          </div>
        </button>
      </div>
      <i
        role="button"
        tabindex="0"
        class="van-icon van-icon-cross van-popup__close-icon van-popup__close-icon--top-right"
        ><!----></i
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>