<script setup lang="ts">
// -- imports
// -- props
defineProps<{ data: Array<any> }>();
// -- emits
defineEmits<{
  (e: 'refresh'): void;
  (e: 'load'): void;
}>();
</script>

<template>
  <div class="list">
    <!-- 下拉刷新区域 -->
    <div class="refresher"></div>
    <!-- 显示内容区域 -->
    <div class="content">
      <div class="list-item" v-for="item in data" :key="item.id">
        <slot :rowData="item" />
      </div>
    </div>
    <!-- 上拉加载区域 -->
    <div class="loader"></div>
  </div>
</template>



