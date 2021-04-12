<template>
  <div class="demo">
    <div class="van-contact-list">
      <div role="radiogroup" class="van-radio-group van-contact-list__group">
        <div
          role="button"
          tabindex="0"
          class="van-cell van-cell--clickable van-cell--center van-contact-list__item"
        >
          <i class="van-icon van-icon-edit van-contact-list__edit"><!----></i>
          <div
            class="van-cell__value van-cell__value--alone van-contact-list__item-value"
          >
            张三，13000000000
          </div>
          <div role="radio" tabindex="0" aria-checked="true" class="van-radio">
            <div
              class="van-radio__icon van-radio__icon--round van-radio__icon--checked"
              style="font-size: 16px"
            >
              <i
                class="van-icon van-icon-success"
                style="
                  border-color: rgb(238, 10, 36);
                  background-color: rgb(238, 10, 36);
                "
                ><!----></i
              >
            </div>
          </div>
        </div>
        <div
          role="button"
          tabindex="0"
          class="van-cell van-cell--clickable van-cell--center van-contact-list__item"
        >
          <i class="van-icon van-icon-edit van-contact-list__edit"><!----></i>
          <div
            class="van-cell__value van-cell__value--alone van-contact-list__item-value"
          >
            李四，1310000000
          </div>
          <div
            role="radio"
            tabindex="-1"
            aria-checked="false"
            class="van-radio"
          >
            <div
              class="van-radio__icon van-radio__icon--round"
              style="font-size: 16px"
            >
              <i class="van-icon van-icon-success"><!----></i>
            </div>
          </div>
        </div>
      </div>
      <div class="van-contact-list__bottom">
        <button
          class="van-button van-button--danger van-button--normal van-button--block van-button--round van-contact-list__add"
        >
          <div class="van-button__content">
            <span class="van-button__text">新建联系人</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>