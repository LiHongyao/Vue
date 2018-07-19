<template>
    <div>
        <ul class="menu-list">
            <li><router-link exact :to="urlData.home">主页</router-link></li>
            <li><router-link :to="urlData.course">课程</router-link></li>
            <li><router-link :to="{name:'teachers', params:{name:'LiHongyao', course: 'Web'}}">师资</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavList',
    data() {
        return {
            urlData:{ 
                home: '/',
                course: '/course',
                teachers: '/teachers'
            }
        }
    }
}
</script>

<style scoped>

.menu-list {
    list-style: none;
    padding: 0;
    text-align: left;
    background: #f1f1f1;
    padding: 16px 0;
}

.menu-list li {
     display: inline-block;
     margin-right: 20px;
}

.menu-list li a {
    text-decoration: none;
}
.menu-list li:hover a {
    text-decoration: underline;
}
</style>