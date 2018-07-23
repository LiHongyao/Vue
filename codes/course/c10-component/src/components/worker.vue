<template>
    <div>
        员工：
        <!-- 接收父组件传递过来的视图 -->
        <slot name="s1"></slot>
        <hr />
        <slot name="s2" :msg="msg" num="10"></slot>
        <slot name="s3">
            <button>CLICKME</button>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Worker',
    data() {
        return {
            msg: 'Hello, vue!'
        }
    }
}
</script>

<style scoped>

</style>