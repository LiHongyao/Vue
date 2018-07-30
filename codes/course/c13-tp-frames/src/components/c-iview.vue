<template>
    <div>
        <p>IView</p>
        <Select v-model="model" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
</template>
<script>

export default {
    name: 'IView',
    data() {
        return {
            cityList: [
                {
                    value: '北京',
                    label: '北京'
                },
                {
                    value: '上海',
                    label: '上海'
                },
                {
                    value: '成都',
                    label: '成都'
                },
                {
                    value: '深圳',
                    label: '深圳'
                },
                {
                    value: '昆明',
                    label: '昆明'
                },
                {
                    value: '西安',
                    label: '西安'
                }
            ],
            model: ''
         }
    }
}
</script>
<style scoped>
@import url('../../node_modules/iview/dist/styles/iview.css');
</style>


