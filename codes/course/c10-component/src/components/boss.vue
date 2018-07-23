<template>
    <div>
        老板：
        <Worker>
            <div slot="s1">
                我是插槽1
                <h3>我是插槽1的内容</h3>
            </div>
            <p slot="s2" slot-scope="props">
                {{props.msg}} - {{props.num}}
            </p>
            <!-- <button slot="s3">SHOWME</button> -->
        </Worker>
    </div>
</template>

<script>
import Worker from './worker'

export default {
    name: 'Boss',
    components: { Worker },
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>
