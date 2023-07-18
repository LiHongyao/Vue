/*
 * @Author: Lee
 * @Date: 2023-06-13 11:45:34
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 12:12:57
 * @Description:
 */
// mouse.ts

import { ref } from 'vue';
import { useEventListener } from './useEventListener';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  useEventListener(window, 'mousemove', (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  return { x, y };
}
