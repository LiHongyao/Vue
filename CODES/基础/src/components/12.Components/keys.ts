/*
 * @Author: Lee
 * @Date: 2023-06-12 23:17:51
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-12 23:20:54
 * @Description:
 */

// key.ts
import { InjectionKey } from 'vue';

interface InjectProps {
  env: string;
  appID: string;
}

export const APP_KEY = Symbol() as InjectionKey<InjectProps>;
