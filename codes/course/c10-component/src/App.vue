<template>
  <div id="app">
    <MenuNav @menuClick="tab"/>
    <component :is="curPage"></component>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import Parent from './components/Parent'
import Tea from './components/tea'
import Boss from './components/boss'
// 动态切换
import MenuNav from './components/dynamic/menuNav'
import Home from './components/dynamic/home'
import News from './components/dynamic/news'
import Mine from './components/dynamic/mine'

export default {
  name: 'App',
  data() {
    return {
      curPage: 'Home'
    }
  },
  methods: {
    tab(data) {
      this.curPage = data;
    }
  },
  components: {
    HelloWorld,
    Parent,
    Tea,
    Boss,
    MenuNav,
    Home,
    News,
    Mine
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.content {
  width: 500px;
  height: 300px;
}
</style>
