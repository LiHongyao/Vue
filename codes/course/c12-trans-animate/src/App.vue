<template>
  <div id="app">
    <!-- 菜单 -->
    <!-- <ul class="menu-list">
      <li data-page="Home"  @click="btnClick">主页</li>
      <li data-page="News"  @click="btnClick">新闻</li>
      <li data-page="About" @click="btnClick">关于</li>
    </ul> -->
    <!-- 动态组件切换 -->
    <!-- <div class="container">
      <transition name="slide" mode="in-out">
        <component :is="page"></component>
      </transition>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home  from './components/home'
import News  from './components/news'
import About from './components/about'

export default {
  name: 'App',
  data() {
    return {
      page: 'Home'
    }
  },
  components: {
    Home,
    News,
    About
  },
  methods: {
    btnClick(e) {
      this.page = e.target.dataset.page;
    }
  }
}
</script>

<style>

/* .menu-list {
  width: 300px;
  list-style: none;
  padding: 0;
  display: flex;
}
.menu-list li {
  width: calc(100% / 3);
  text-align: center;
  cursor: pointer;
}
.menu-list li:hover {
  text-decoration: underline;
}
.container {
  width: 300px;
  height: 100px;
  position: relative;
  overflow: hidden;
}
.content {
  width: 300px;
  height: 100px;
  padding: 8px;
  color: #fff;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
} */
/*动画效果*/
/* .slide-enter-active {
    transition: all .5s linear;   
}
.slide-enter-to {
    transform: translate(0);
}
.slide-enter {
    transform: translate(200px);
} */
</style>
