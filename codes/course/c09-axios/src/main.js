import Vue   from 'vue'
import Axios from 'axios'
import Qs    from 'qs'

Vue.prototype.HOST = '/api'
// 将Axios 挂载到Vue原型上
Vue.prototype.$axios = Axios;
// 全局配置
Axios.defaults.baseURL = 'http://route.showapi.com/';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 参数处理
  if(config.method == 'post') {
    config.data = Qs.stringify(config.data)
  }
  console.log("请求：" + config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("响应：" + response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


new Vue({
  el: '#app',
  data: {
    contentlist: [],
    urls: {
      joketext  : '341-1',
      jokeimage : '341-2'
    }
  },
  created() {
    // 跨域请求
    // let url = this.HOST + '/movie/top250';
    // this.$axios.get(url, {
    //   params: {
    //     city: "成都",
    //     count: 20
    //   }
    // })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(error => {

    // }); 
  },
  methods: {
    // GET请求
    get() {
      this.$axios.get(this.urls.jokeimage, {
        params: {
          showapi_appid: '59896',
          showapi_sign: '90a44ef5b0bc4b8a9515e7a4aced0f30',
          page: '1',
          maxResult: '20'
        }
      })
      // 异常处理机制
      // try...catch
      .then(res => { // 请求成功
        this.contentlist = res["data"]["showapi_res_body"]["contentlist"];
        console.log(res["data"]["showapi_res_body"]["contentlist"]);
      })
      .catch(error => { // 请求异常
        console.log(error);
      });
      
    },
    // POST请求
    post() {
      this.$axios.post(this.urls.joketext, {
        showapi_appid: '59896',
        showapi_sign: '90a44ef5b0bc4b8a9515e7a4aced0f30',
        page: '1',
        maxResult: '20'
      })
      // 异常处理机制
      // try...catch
      .then(res => { // 请求成功
        console.log(res);
      })
      .catch(error => { // 请求异常
        console.log(error);
      });
    }
  }
})