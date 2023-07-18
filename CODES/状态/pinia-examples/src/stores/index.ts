/*
 * @Author: Lee
 * @Date: 2023-06-13 20:19:47
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 00:08:37
 * @Description:
 */
import { defineStore } from 'pinia';

interface UserProps {
  name: string;
  age: number;
}

interface State {
  appID: string;
  count: number;
  userList: UserProps[];
}

export const useAppStore = defineStore('appStore', {
  state: (): State => ({
    appID: 'wx9d0f652e42541e26',
    count: 0,
    userList: [],
  }),
  getters: {
    double: (state) => state.count * 2,
    doublePlusOne(): number {
      return this.double + 1;
    },
  },
  actions: {
    async increment() {
      this.count++;
    },
  },
});
