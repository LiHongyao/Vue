import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    a: 0,
    b: 0,
    firstName: 'Henry',
    lastName: 'Lee',
    fullName: 'Henry Lee'
  },
  // 实例被创建
  created(){

  },
  // DOM元素被挂载
  mounted() {

  },
  // 过滤
  filters: {

  },
  // 侦听
  watch: {
    firstName(val){
      this.fullName = val + ' ' + this.lastName;
    },
    lastName(val) {
      this.fullName = this.firstName + ' ' + val;
    }
  },
  // 方法
  methods: {
    total() {
      return (this.a + this.b).toFixed(2);
    }
  },
  // 计算
  computed: {
    FullName: {
      // setter 设置
      set(val) {
        // 'Jocy Guo'
        let names = val.split(' ');
        this.firstName = names[0];
        this.lastName  = names[1];
      },
      // getter 获取
      get() {
        console.log(1);
        return this.firstName + ' ' + this.lastName;
      }
    },
    sum() {
      return (this.a + this.b).toFixed(2);
    }
  }
});