/*
 * @Author: Lee
 * @Date: 2021-12-28 21:19:50
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-28 21:38:08
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

