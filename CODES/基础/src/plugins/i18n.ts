/*
 * @Author: Lee
 * @Date: 2023-06-13 17:14:25
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 17:31:49
 * @Description:
 */
import type { App } from 'vue';

export default {
  install: (app: App, options: Record<string, any>) => {
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o: any, k: string) => {
        if (o) {
          return o[k] as string;
        }
        return '';
      }, options);
    };
    // +++++++
    app.provide('i18n', options);
    // +++++++
  },
};


