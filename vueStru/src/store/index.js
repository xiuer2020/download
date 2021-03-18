import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    demo: {
      namespaced: true,
      // 成为带命名空间的模块
      state: () => ({


      }),
      mutations: {

      },
      // 接收的第一个参数是模块的局部state
      actions: {

      },
      // 第一个参数context 常用对象结构 { dispatch, commit, getters, rootGetters }
      // 第二个参数 payload载荷
      getters: {


      }
      // 第一个参数: 模块的局部state
      // 第二个参数: 模块的getter
      // 第三个参数: 根节点state
      // 第四个参数: 根节点getter

    }
  }
});
