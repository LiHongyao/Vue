<!--
 * @Author: Lee
 * @Date: 2023-06-11 17:52:45
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 09:25:47
 * @Description: 
-->

<script setup lang="ts">
// -- props
const props = defineProps<{
  modelValue: string;
  modelModifiers?: { capitalize: boolean };
}>();
// -- emits
const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
console.log(props.modelModifiers); // {capitalize: true}

// -- events
const onInput = (e: Event) => {
  let value = (e.currentTarget as HTMLInputElement).value;
  if (props.modelModifiers?.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emits('update:modelValue', value);
};
</script>

<template>
  <input :value="modelValue" @input="onInput" />
</template>
