<template>
    <div class="content">
        关于
        <br />
        {{$route.query.weather}}
        <button type="button" @click='goHome'>跳转至主页</button>
    </div>
</template>
<script>
export default {
    name:'About',
    data() {
        return{}
    },
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

</style>
