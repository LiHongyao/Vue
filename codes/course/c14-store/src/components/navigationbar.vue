<template>
    <div class="navigationBar">
        <!-- 返回按钮 -->
        <Icon class="goback-btn" @click="gobackClick" v-if="goback" type="chevron-left"></Icon>
        <h3 class="title">
            {{this.$store.state.title}}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    methods: {
        gobackClick() {
            // 回到上一页
            this.$router.go(-1);
        }
    },
    props: {
        goback: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

.navigationBar {
    height: 64px;
    background: #333;
    color: #fff;
    position: relative;
}
.navigationBar .title {
    text-align: center;
    line-height: 64px;
    letter-spacing: 5px;
}
.goback-btn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
}
</style>

