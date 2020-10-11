<template>
  <div class="demo">
    <div class="input-inner-layout">
      <input
        type="text"
        v-model="objTypeTwoWayBindDemo"
        :placeholder="objTypeTwoWayBindDemo"
      />
    </div>
    <div class="input-inner-layout">
      <input
        type="text"
        v-model="baseTypeTwoWayBindDemo"
        :placeholder="baseTypeTwoWayBindDemo"
      />
    </div>
    <div class="valid-test" @click="validTest">
      有效性测试
    </div>
    <BaseMsg></BaseMsg>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Demo",
  computed: {
    objTypeTwoWayBindDemo: {
      get() {
        return this.$store.state.demo.objTypeTwoWayBindDemo.text;
      },
      set(v) {
        this.twoWayBind({
          name: "objTypeTwoWayBindDemo",
          key: "text",
          value: v
        });
      }
    },
    baseTypeTwoWayBindDemo: {
      get() {
        return this.$store.state.demo.baseTypeTwoWayBindDemo;
      },
      set(v) {
        this.twoWayBind({ name: "baseTypeTwoWayBindDemo", value: v });
      }
    }
  },
  methods: {
    ...mapMutations("demo", ["twoWayBind"])
    // twoWayBind: 双向绑定
  },
  created() {
    this.$store.state.demo.msgShow = true;
  }
};
</script>

<style lang="less" scoped>
</style>