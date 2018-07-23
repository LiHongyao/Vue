<template>
    <div>
        老师:
        <input type="text" v-model.number="num">
        - {{res}}
        <Stu @send="getRes" :num="num" />
    </div>
</template>

<script>
import Stu from './stu'
export default {
    name: 'Tea',
    data() {
        return {
            num: '',
            res: 0
        }
    },
    methods: {
        getRes(data) {
            this.res = data;
        }
    },
    components: {Stu}
}
</script>

<style scoped>

</style>
