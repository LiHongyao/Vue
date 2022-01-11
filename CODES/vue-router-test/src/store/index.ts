/*
 * @Author: Lee
 * @Date: 2022-01-11 11:25:30
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-11 14:19:42
 */
// store.ts
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as _useStore } from 'vuex';

// → 为 store state 声明类型
export interface State {
  count: number;
  idNo: string;
}

// → 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

// → 构造 store
export const store = createStore<State>({
  state: {
    count: 0,
    idNo: '51321198807168888',
  },
  getters: {
    birth: (state) => {
      let idNo = state.idNo;
      let year = idNo.slice(6, 10);
      let month = idNo.slice(10, 12);
      let day = idNo.slice(12, 14);
      return `出生年月：${year}-${month}-${day}`;
    },
  },
  mutations: {
    // → 更新state
    updateCount(state, payload: number) {
      state.count = payload;
    },
    // → 更新idNo
    updateIdNo(state, payload: string) {
      state.idNo = payload;
    },
  },
  actions: {
    async action_name(context, payload) {
      // → 解构上下文
      const { state, commit, getters } = context;
      // → 执行异步操作
      const data = await fetch('');
      // → 提交修改
      commit('mutation_name', data);
    },
  },
});

// → 简化 useStore
export const useStore = () => {
  return _useStore(key);
};
