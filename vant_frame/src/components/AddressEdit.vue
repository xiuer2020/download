<template>
  <div class="demo">
    <div class="van-address-edit">
      <div class="van-address-edit__fields">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>姓名</span>
          </div>
          <div class="van-cell__value van-field__value">
            <div class="van-field__body">
              <input
                type="text"
                placeholder="收货人姓名"
                class="van-field__control"
              />
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label"><span>电话</span></div>
          <div class="van-cell__value van-field__value">
            <div class="van-field__body">
              <input
                type="tel"
                placeholder="收货人手机号"
                class="van-field__control"
              />
            </div>
          </div>
        </div>
        default slot
      </div>
      <!-- bdrs8 + ovh -->
      <!---->
      <div class="van-address-edit__buttons">
        <button
          class="van-button van-button--danger van-button--normal van-button--block van-button--round"
        >
          <div class="van-button__content">
            <span class="van-button__text">保存</span>
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