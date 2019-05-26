<template>
    <div class="navigation-bar">
        <div v-show="showBack" @click="goBack"  class="go-back-btn">&lt; 返回</div>
        <h1 v-show="title" class="title">{{title}}</h1>
        <div v-show="!title" class="search-box">
            <input type="text" v-model="searchVal"  placeholder="请输入搜索内容..."> 
            <div class="search-btn" @click="searchBtnClick">搜索</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeadView",
    data() {
        return {
            searchVal: ""
        }
    },
    props: ["title", "showBack"],
    methods: {
        goBack() {
            // 返回上一页
            this.$router.go(-1);
        },
        searchBtnClick() {
            this.$emit("search", this.searchVal);
        }
    },
    watch: {
        searchVal(keywords) {
            this.$emit("search", keywords);
        }
    }
}
</script>

<style scoped>
.navigation-bar {
    height: 64px;
    background: #eeeeee;
    text-align: center;
    line-height: 64px;
    position: relative;
}

.navigation-bar .title {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
}
.go-back-btn {
    font-size: 14px;
    position: absolute;   
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    color: #444444;
}

.search-box {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
}
.search-box input {
    outline: none;
    width: 60%;
    height: 37px;
    padding: 0 8px;
    box-sizing: border-box;
    border: 1px solid cornflowerblue;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    font-size: 14px;
}
.search-btn {
    width: 50px;
    line-height: 35px;
    text-align: center;
    color: cornflowerblue;
    font-size: 12px;
    color: rgb(5, 6, 7);
    background: #ffffff;
    border: 1px solid cornflowerblue;
    border-left: none;
    box-sizing: border-box;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    
}
</style>
