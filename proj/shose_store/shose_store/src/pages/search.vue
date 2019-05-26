<template>
  <div class="page search">
    <div class="goods-list">
      <section
        class="item"
        v-for="(obj, index) in filterArr"
        :key="index"
        @click="handleGoodsItemClick($event, index)"
      >
        <img :src="obj.url" alt="loadding err">
        <div class="infos">
          <p class="name">{{obj.name}}</p>
          <p class="tag">{{obj.tag}}</p>
          <p class="price">¥ {{obj.price}}</p>
        </div>
        <font-awesome-icon class="arrow" :icon="['fas', 'chevron-right']"></font-awesome-icon>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      source: [], // 搜索数据源
      filterArr: [] // 搜索结果数据
    };
  },
  created() {
    this.getSearchSource();
  },
  props: ["keywords"],
  methods: {
    // 获取搜索源数据
    getSearchSource() {
      this.$axios
        .get("/search")
        .then(res => {
          this.source = res.data;
          this.filterArr = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleGoodsItemClick(event, index) {
      // 获取详情展示数据
      let data = this.filterArr[index];
      // 更新详情展示数据状态
      this.$store.commit("changeDetails", data);
      // 进入详情页
      this.$router.push("/details");
    }
  },
  watch: {
    keywords(val) {
      // 处理数据过滤
      let reg = new RegExp(val);
      this.filterArr = this.source.filter(obj => {
        return reg.test(`${obj.name}${obj.price}${obj.kind}`);
      });
    }
  }
};
</script>

<style scoped>
.page {
  box-sizing: border-box;
  padding: 8px;
}
.goods-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.goods-list img {
  width: 30%;
}
.goods-list .infos {
  width: calc(100% - 40%);
  align-self: flex-start;
  letter-spacing: 1px;
}
.goods-list .name {
  font-size: 16px;
  color: #444444;
  font-weight: 500;
}
.goods-list .tag {
  font-size: 12px;
  color: gray;
  margin: 12px 0 20px;
}
.goods-list .price {
  font-size: 22px;
  color: cornflowerblue;
}
.goods-list .arrow {
  color: #444444;
}
</style>