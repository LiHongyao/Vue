import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    isLogin: true,
    loginType: 'tel'
  },
  // 方法定义
  methods: {
    toggleLoginType() {
      this.loginType = this.loginType == 'tel' ? 'email' : 'tel';
    }
  }
});
