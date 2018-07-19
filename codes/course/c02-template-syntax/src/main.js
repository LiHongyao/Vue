import Vue from 'vue'
import '../static/css/index.css'

new Vue({
  el: '#app',
  data: {
    time: new Date().toLocaleString(),
    address: '四川省成都市',
    weather: '多云 24℃~32℃',
    htmlStr: '<h3>骊山语罢清宵半，泪雨零霖终不怨。</h3>',
    imgSrc: 'http://www.ksks001.com/img1/8005989784715898600.jpg',
    imgTitle: 'Henry 的梦中情人-迪丽热巴',
    isHidden: false
  }
});