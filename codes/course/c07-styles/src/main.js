import Vue from 'vue'
import '../static/css/index.css'

new Vue({
  el: '#app',
  data: {
    // 1. class
    class1: 'box',
    class2: 'radius',
    classname: 'box',
    isBox: true,
    classObj: {
      'box': true,
      'radius': true
    },
    // 2. style
    radius: '8px',
    bgColor: 'purple',
    styleObj: {
      borderRadius: '8px',
      backgroundColor: 'red',
      boxSizing: 'border-box',
      border: '20px solid green',
      transform: 'rotateZ(-15deg)'
    }
  }
})


