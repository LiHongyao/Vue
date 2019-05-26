<template>
  <div class="page home">
    <!-- 轮播图 -->
    <swiper v-if="bannerImgs.length>0" :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(src, index) in bannerImgs" :key="index">
        <img :src="src" alt="loading err">
        <div class="infos">
            <p>2019春季</p>
            <p>男士 Fresh Foam系列</p>
            <p>—</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 商品展示 -->
    <div class="ct">
        <section class="item" v-for="(item, i) in goods" :key="i">
            <h1 class="title">{{item.kind}}</h1>
            <ul class="goods-list">
                <li v-for="(obj, j) in item.contentlist" :key="j" @click="handleGoodsItemClick($event, {i, j})">
                    <img :src="obj.url" alt="loading err">
                    <p class="name">{{obj.name}}</p>
                    <p class="price">¥ {{obj.price}}</p>
                </li>
            </ul>
        </section>
    </div>
  </div>
</template>

<script>

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapMutations } from "vuex";


export default {
  name: "Home",
  data() {
    return {
      bannerImgs: [],
      goods: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
          }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    // 1. 请求banner数据
    this.getBanner();
    // 2. 请求商品数据
    this.getGoods();
  },
  methods: {
    
    // 请求banner数据
    getBanner() {
      this.$axios.get("/banner").then(res => {
          this.bannerImgs = res.data;
        }).catch(err => {
          console.log(err);
        });
    },
    // 请求商品数据
    getGoods() {
      this.$axios.get("/goods").then(res => {
          this.goods = res.data;
        }).catch(err => {
          console.log(err);
        });
    },
    // 点击商品
    handleGoodsItemClick(event, {i, j}) {
        // 获取商品数据
        let data =  this.goods[i]["contentlist"][j];
        // 更新详情展示数据状态
        this.changeDetails(data);
        // 进入详情页
        this.$router.push("/details");
    },
    // 状态管理
    // this.changeDetails() 
    // 映射为
    // this.$store.commit("changeDetails")
    ...mapMutations(["changeDetails"]),


  }
};
</script>

<style scoped>

/* 轮播图 */
.swiper-container img {
    width: 100%;
    height: 200px;
}
.swiper-slide {
    position: relative;
}
.swiper-slide .infos {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    letter-spacing: 1px;
    font-size: 15px;
    color: #ffffff;
}
/* 商品展示 */
.ct {
    box-sizing: border-box;
    padding: 0 8px;
}
.ct .item {
    margin: 30px 0;
}
.ct .title {
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 12px;
    padding-left: 16px;
    position: relative;
}

.ct .title::before {
    content: "";
    display: block;
    width: 4px;
    height: 15px;
    background: cornflowerblue;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.goods-list  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.goods-list li {
    width: 48.5%;
    margin-bottom: 15px;
}
.goods-list img {
    width: 100%;
}

.goods-list .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    letter-spacing: 1px;
}

.goods-list .price {
    font-size: 15px;
    margin-top: 8px;
    color: cornflowerblue;
}

</style>

