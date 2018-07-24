<template>
    <ul class="menu-list">
      <li>
        <router-link exact :to="links.home">主页</router-link>
      </li>
      <li>
        <router-link :to="links.course">课程</router-link>
      </li>
      <li>
        <!-- <router-link :to="links.news">新闻</router-link> -->
        <!-- <router-link to="/news/Henry/28/Web前端工程师">新闻</router-link> -->
        <!-- 注意：使用path会忽略params参数 -->
        <router-link :to="{name: 'news', params: {name:'李鸿耀', age:28, job: 'Web前端工程师'}}">新闻</router-link>
      </li>
      <li>
        <!-- <router-link :to="links.about">关于</router-link> -->
        <router-link :to="{path:links.about, query:{weather:'成都-26℃~33℃'}}">关于</router-link>
      </li>
    </ul>
</template>
<script>
export default {
    name: 'MenuNav',
    data() {
        return {
            // 集中管理路由跳转链接
            links: {
                home: '/',
                course: '/course',
                news: '/news',
                about: '/about'
            }
        }
    }
}
</script>
<style scoped>

.menu-list {
    background: purple;
}
.menu-list li {
    display: inline-block;
    margin: 0 16px;
}
.menu-list li a {
    color: #fff;
}
.menu-list li a:hover {
    text-decoration: underline;
}

</style>
