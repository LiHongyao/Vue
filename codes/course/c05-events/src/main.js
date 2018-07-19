import Vue from 'vue'


new Vue({
  el: '#app',
  data: {
    name: "Henry"
  },
  methods: {
    sayHello(e) {
      // e -> 事件对象
      alert(e.target.textContent);
      // this -> 指向vue实例
      alert(`Hello, ${this.name}!`);
    }
  }
});

