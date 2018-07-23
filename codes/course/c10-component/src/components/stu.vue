<template>
  <div>学生</div>
</template>

<script>
export default {
    name: 'Stu',
    watch: {
        num(val) {
            this.$emit('send', val + 10)
        }
    },
    props: {
        num: {
            type: [Number, String],
            required: true,
            default: 100
        }
    }
}
</script>

<style scoped>

</style>
