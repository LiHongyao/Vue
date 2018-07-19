<template>
    <div class="box">
        <p>Hello, world!</p>
    </div>
</template>

<script>
export default {
    name: 'HelloREM',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>

// 200 * 300
.box {
    width: 200px / 50rem;
    height: 300px / 50rem;
    background: pink;
    font-size: 16px / 50rem;
}

</style>

