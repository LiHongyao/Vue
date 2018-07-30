<template>
    <div>
        ElementUI
        <p>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button  @click="searchClick" type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </p>

        <div class="box">
            <el-carousel :interval="4000" :autoplay="false" type="card" height="300px">
                <el-carousel-item>
                    <img src="../assets/01.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/02.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/03.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/04.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/05.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="../assets/06.jpg" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ElementUI',
    data() {
        return {
        }
    },
    methods: {
        searchClick() {
            alert('点击搜索按钮！');
        }
    }
}
</script>
<style scoped>

.el-carousel__item img {
    width: 100%;
    height: 100%;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>