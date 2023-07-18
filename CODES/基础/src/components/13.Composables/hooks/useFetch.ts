/*
 * @Author: Lee
 * @Date: 2023-06-13 13:41:41
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 13:47:30
 * @Description:
 */
import { ref } from 'vue';

export function useFetch<T = any>(url: string) {
  const loading = ref(false);
  const error = ref('');
  const data = ref<T[] | null>(null);

  const fetchData = async () => {
    try {
      loading.value = true;
      const response = await fetch(url);
      const result = await response.json();
      data.value = result;
      error.value = '';
    } catch (e) {
      error.value = 'Failed to fetch data.';
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    data,
    fetchData,
  };
}
