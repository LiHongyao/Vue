import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    value: '哎哟，不错！',
    checkMsg: '',
    heros: [],
    selected: ''
  },
  watch: {
    value(val) {
      console.log(val)
    }
  }
});