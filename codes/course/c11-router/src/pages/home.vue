<template>
    <div class="content">
        主页
    </div>
</template>
<script>
export default {
    name:'Home',
    data() {
        return{}
    },
    beforeRouteEnter (to, from, next) {
        console.log(`即将进入主页面！`);
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log(`即将离开主页面！`);
        next();
    }
}
</script>

<style scoped>

</style>