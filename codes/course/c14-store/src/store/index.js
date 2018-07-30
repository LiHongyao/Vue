import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex)
export default new Vuex.Store({
    // 状态属性
    state: {
      left: '0',
      title: '主页'
    },
    // 提交修改
    mutations: {
      changeLeft(state, left) {
        state.left  = left;
      },
      changeTitle(state, title) {
        state.title = title;
      }
    }
  });

