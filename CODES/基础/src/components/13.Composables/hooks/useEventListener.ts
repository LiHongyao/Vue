/*
 * @Author: Lee
 * @Date: 2023-06-13 11:59:45
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 12:28:50
 * @Description:
 */

import { onMounted, onBeforeUnmount } from 'vue';

export function useEventListener(
  target: EventTarget | string,
  event: string,
  callback: (event: any) => void
) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  onMounted(() => element?.addEventListener(event, callback));
  onBeforeUnmount(() => element?.removeEventListener(event, callback));
}
