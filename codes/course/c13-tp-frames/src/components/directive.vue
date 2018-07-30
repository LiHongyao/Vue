<template>
  <div>
    自定义指令
    <input type="text" v-focus="{color:'red'}">
  </div>
</template>
<script>
export default {
  name: 'Directive',
  // 自定义指令
  directives: {
    // focus -> 指令名称
    focus: {
      // inserted -> 绑定元素插入到dom元素中
      inserted(el, binding) {
        // 自动获取焦点
        el.focus();
        el.style.outline = 'none';
        el.style.border  = `1px solid ${binding.value.color}` ;
      }
    }
  },
  data() {
    return {
      
    }
  }
}
</script>
<style scoped>

</style>
