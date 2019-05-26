<template>
  <div class="page details">
    <!-- 图片 -->
    <img :src="details.url" alt="loadding err">
    <!-- 商品名字 -->
    <p class="name">{{details.name}}</p>
    <!-- tag -->
    <p class="tag">{{details.tag}}</p>
    <!-- 价格 -->
    <p class="price">¥ {{details.price}}</p>
    <!-- 描述 -->
    <p class="des">{{details.des}}</p>
    <!-- 编号 -->
    <p class="code">
      商品编号：
      <span>{{details.code}}</span>
    </p>
    <!-- 颜色 -->
    <div class="colors">
      <span class="t">颜色</span>
      <el-radio-group v-model="order.color" size="small">
        <el-radio-button v-for="(color, index) in details.color" :key="index" :label="color"></el-radio-button>
      </el-radio-group>
    </div>
    <!-- 尺码 -->
    <div class="sizes">
      <span class="t">尺码</span>
      <el-radio-group v-model="order.size" size="small">
        <el-radio-button v-for="(size, index) in details.size" :key="index" :label="size"></el-radio-button>
      </el-radio-group>
    </div>
    <!-- 数量 -->
    <div class="nums">
        <span class="t">数量</span>
        <el-input-number size="small" v-model="order.num" @change="handleNumChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <!-- 立即购买 -->
    <div class="btns">
      <span class="buy-btn">立即购买</span>
      <span class="i-shopping-cart-btn" @click="insetShoppingCart">加入购物车</span>
    </div>
    <!-- 选项卡 -->
    <el-tabs v-model="activeName" class="tab">
      <el-tab-pane class="item" label="详情" name="first">{{details.details}}</el-tab-pane>
      <el-tab-pane class="item" label="评论" name="second">
          目前还未有评论<br/>
          只有买过此商品的客户登陆后才能发表评论
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import { mapState, mapMutations } from "vuex";


export default {
  name: "Details",
  data() {
    return {
      order: {
        name: "", // 商品名字
        price: 0, // 商品单价
        totalPrice: 0, // 商品总价
        num: 0, // 商品数量,
        color: "", // 商品颜色
        size: "", // 商品尺寸
        url: "", // 商品图片
        tag: "", // 商品描述
      },
      activeName: "first"
    };
  },
  mounted() {
    // 处理订单默认数据
    this.handleOrderData();
  },
  methods: {
    ...mapMutations(["changeShoppingCart"]),

    handleNumChange(value) {
      console.log(value);
    },
    handleOrderData() {
      // 拷贝数据至订单
      let keys = ["name", "price", "url", "tag"];
      keys.forEach(key => {
        if(key == "price") {
          this.order[key] = parseFloat(this.details[key].slice(1));
        }else {
          this.order[key] = this.details[key];
        }
      });
    },
    insetShoppingCart() {
      // 异常处理
      if(this.hasError()) {
        alert("请完善订单信息");
        return;
      }
      // 判断购物车是否已经存在该商品
      // 如果存在，则合并订单
      // 如果不存在，则直接添加
      // 避免地址引用
      let order = Object.assign({}, this.order);

      let {name, size} = order;

      for(let i = 0, len = this.shoppingCart.length; i < len; i++) {
        let obj = this.shoppingCart[i];
        if(obj.name == name && obj.size == size) {
          // 合并数量
          order.num  += obj.num;
          // 删除购物车重复订单
          this.shoppingCart.splice(i, 1);
          break;
        }
      }
      // 处理总价
      let {num, price} = order;
      order.totalPrice = num * price;
      // 加入购物车
      this.shoppingCart.unshift(order);
      // 更新状态
      this.changeShoppingCart(this.shoppingCart);
    },
    hasError() {
      let {size, color} = this.order;
      if(!size || !color) {
        return true;
      }
      return false;
    }
  },
  computed: {
    ...mapState(["details", "shoppingCart"])
  }
};
</script>


<style scoped>
/* scoped：该样式只在当前组件中生效 */
.page {
  box-sizing: border-box;
  padding: 8px;
}

img {
  width: 100%;
}

.name {
  font-weight: 400;
  letter-spacing: 2px;
  margin: 8px 0;
}

.tag {
  font-size: 12px;
  color: gray;
}

.price {
  font-size: 22px;
  color: cornflowerblue;
  margin: 30px 0;
}

.des {
  font-size: 14px;
  color: #555555;
  line-height: 26px;
  letter-spacing: 1px;
}

.code {
  margin: 30px 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 12px 0;
  color: gray;
  font-size: 14px;
}
.t {
  font-size: 15px;
  color: #222222;
  margin-right: 8px;
}
.colors, .sizes {
    margin: 20px 0;
}
.btns {
    display: flex;
    align-items: center;
    margin: 50px 0;
}
.buy-btn,
.i-shopping-cart-btn {
    display: inline-block;
    width: 140px;
    height: 40px;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
}
.buy-btn {
    background: #000000;
    margin-right: 30px;;
}
.i-shopping-cart-btn {
    background: cornflowerblue;
}

.tab .item {
    height: 100px;
    font-size: 14px;
    color: gray;
    letter-spacing: 1px;
    line-height: 22px;
}
</style>