<template>
    <div>
        <NavList />
        <div class="left">
            <!-- 二级路由区域 -->
            <ul class="sub-menulist">
                <li><router-link :to="urlData.html">HTML</router-link></li>
                <li><router-link :to="{name: 'css', params: {msg: 123}}">CSS</router-link></li>
                <li><router-link :to="urlData.javascript">JavaScript</router-link></li>
            </ul>
        </div>
        <div class="right">
            <!-- 视图区域 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavList from './NavList'
export default {
    name: 'course',
    data() {
        return {
            urlData: {
                html: '/course/html',
                css: '/course/css',
                javascript: '/course/javascript'
            }
        }
    },
    components: {
        NavList
    }
}
</script>

<style scoped>
.left {
    width: 120px;
    float: left;
    background: pink;
    height: 500px;
}
.right {
    width: calc(100% - 120px);
    float: right;
    background: cyan;
    height: 500px;;
}
.sub-menulist {
    padding: 0;
    list-style: none;
}

.sub-menulist a {
    text-decoration: none;
}
.sub-menulist a:hover {
    text-decoration: underline;
}

</style>