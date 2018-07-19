import Vue from 'vue'

let model = {
  fruit: '',
  keywords: '',
  stus: [
    {name: '张三', gender: '男', address: '四川省成都市'},
    {name: '李四', gender: '女', address: '四川省乐山市'},
    {name: '赵二', gender: '男', address: '四川省自贡市'},
    {name: '李大', gender: '女', address: '四川省雅安市'},
    {name: '李大炮', gender: '男', address: '四川省泸州市'},
    {name: '李三', gender: '男', address: '四川省宜宾市'}
  ],
  infos: {
    name: '木子李',
    age: '28',
    address: '四川省成都市',
    school: '成都东软学院',
    job: 'Web 前端工程师/讲师'
  },
  fruits: ['香蕉', '苹果', '火龙果'],
  goods: [
    {name: "钢笔", price: 188},
    {name: "辣条", price: 1.8},
    {name: "剃须刀", price: 288},
    {name: "vue 2.x 使用指南", price: 99.9},
    {name: "帽子", price: 66.6},
  ],
}

new Vue({
  el: '#app',
  data: model,
  filters: {
    addSymble(val) {
      return '¥' + val;
    }
  },
  methods: {
    // 添加
    add() {
      if(this.fruit) {
        this.fruits.push(this.fruit);
      }
    },
    // 删除
    remove() {
      this.fruits.pop();
    },
    // 修改
    modify() {
      // this.fruits[0] = "榴莲";
      this.$set(this.fruits, 0, '榴莲');
    },
    // 过滤数据
    filterArr() {
      return this.stus.filter((stu) => {
        let reg = new RegExp(this.keywords);
        return reg.test(stu.name);
      });
    }
  }
});