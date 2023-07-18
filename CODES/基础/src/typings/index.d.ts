/*
 * @Author: Lee
 * @Date: 2023-06-13 17:20:58
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 17:22:19
 * @Description:
 */

export {};

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string;
  }
}
