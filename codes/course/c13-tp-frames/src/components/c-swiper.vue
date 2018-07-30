<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../assets/01.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/02.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/03.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/04.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/05.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/06.jpg" alt=""></swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Swiper',
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOption: {
            loop: true,
            pagination: ".swiper-pagination",
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>
<style scoped>
img {
    width: 100%;
    height: 350px;
}
</style>
