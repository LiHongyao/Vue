// 1. 引入vue
import Vue from 'vue'
import $   from 'jquery'

// 2. 定义Model
let model = {
  message: 'Hello, Vue!',
  name: '',
  info: {}
}

// 3. 创建vue实例
let vm = new Vue({
  // 挂载元素
  el: '#app',
  // 挂载Model
  data: model,
  // 生命周期：实例被创建
  created() {
    console.log(this);
    console.log('-> Vue 实例已经被创建.');
    let _this = this;
    $.ajax({
      url: 'http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php',
      type: 'GET',
      success(response) {
        _this.info = response['banner'][2];
      }
    })
  },
  // 生命周期：$el 挂载，进行DOM操作
  mounted() {

  }
});

// 修改model层
// vm.$data === model
vm.$data.message = '塞巴斯蒂安';
vm.$data.name    = 'Li-HONGYAO';

console.log(vm.$el);



