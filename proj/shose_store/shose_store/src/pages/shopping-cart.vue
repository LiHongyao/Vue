<template>
  <div class="page shopping-car">
    <div v-show="shoppingCart.length > 0" class="ct">
      <div class="tool-bar">
        <span class="delete-btn" @click="handleDelete">删除</span>
      </div>
      <!-- 购物车列表 -->
      <div class="list">
        <section class="item" v-for="(order, index) in shoppingCart" :key="index">
          <img :src="order.url" alt="loadding err">
          <div class="infos">
            <p class="name">{{order.name}}</p>
            <p class="tag">{{order.tag}}</p>
            <div class="handle-btns">
              <span class="btn increase" @click="increase($event, index)">+</span>
              <span class="num">{{order.num}}</span>
              <span class="btn reduce" @click="reduce($event, index)">-</span>
            </div>
            <p class="des">{{order.size}}码 - {{order.color}} - ¥ {{order.totalPrice}}</p>
          </div>
          <input type="checkbox" :checked="order.checked" @click="handeSel(order)">
        </section>
      </div>
    </div>
    <div v-show="shoppingCart.length == 0" class="no-data">哦豁~ 购物车空空如也</div>
    <!-- 底栏 -->
    <div class="bottom-banner">
      <!-- 全选 -->
      <div class="all-check">
        全选
        <input type="checkbox" :checked="isAllSel" @click="allSelClick">
      </div>
      <!-- 总价 -->
      <div class="total-price-box">
        总价：¥
        <span class="sel-total-price">{{totalPrice}}</span>
      </div>
      <!-- 立即购买 -->
      <div class="buy-btn">立即购买</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ShoppingCar",
  data() {
    return {
      selArr: [],
      isAllSel: false // 记录商品是否全部选中
    };
  },
  computed: {
    ...mapState(["shoppingCart"]),
    totalPrice() {
        let total = 0;
        this.selArr.forEach(order => {
            total += order.totalPrice;
        });
        return total;
    }
  },
  methods: {
    ...mapMutations(["changeShoppingCart"]),
    // 增加数量
    increase(event, index) {
      this.shoppingCart[index].num++;
      this.updateTotalPrice(index);
    },
    // 减少数量
    reduce(event, index) {
      if (this.shoppingCart[index].num == 1) {
        return;
      } else {
        this.shoppingCart[index].num--;
        this.updateTotalPrice(index);
      }
    },
    // 更新总价
    updateTotalPrice(index) {
      let { num, price } = this.shoppingCart[index];
      this.shoppingCart[index].totalPrice = num * parseFloat(price);
      // 更新状态
      this.changeShoppingCart(this.shoppingCart);
    },
    // 点击选中
    handeSel(order) {
      if (order == undefined) {
        this.$set(order, "checked", false);
      }
      order.checked = !order.checked;

      if (order.checked) {
        this.selArr.push(order);
      } else {
        // 获取下标
        let idx = null;
        for (let i = 0, len = this.selArr.length; i < len; i++) {
          if (Object.is(order, this.selArr[i])) {
            idx = i;
            break;
          }
        }
        this.selArr.splice(idx, 1);
      }
      console.log(this.selArr);
      // 判断是否让全选按钮选中
      this.isAllSel =
        this.selArr.length == this.shoppingCart.length ? true : false;
    },
    // 点击全选
    allSelClick(event) {
      this.isAllSel = !this.isAllSel;
      if (this.isAllSel) {
        // 全选
        this.shoppingCart.forEach(order => {
          order.checked = true;
        });
        this.selArr = Object.assign([], this.shoppingCart);
      } else {
        //未全选
        this.shoppingCart.forEach(order => {
          order.checked = false;
        });
        this.selArr = [];
      }
    },
    // 删除选中
    handleDelete() {
        let a1 = this.shoppingCart;
        let a2 = this.selArr;
        for(let i = 0 ; i < a2.length; i++) {
            for(let j = 0; j < a1.length; j++) {
                if(Object.is(a1[j], a2[i])) {
                    a1.splice(j, 1);
                }
            }
        }
        this.selArr = [];
    }
  }
};
</script>

<style scoped>
.no-data {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.bottom-banner {
  padding: fixed;
  bottom: 49px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #eeeeee;
  height: 50px;
  font-size: 15px;
}
.bottom-banner .buy-btn {
  width: 150px;
  height: 100%;
  background: lightcoral;
  color: #ffffff;
  text-align: center;
  line-height: 49px;
}

.sel-total-price {
  color: red;
  font-size: 20px;
  font-weight: bolder;
  margin-left: 8px;
}
.bottom-banner .all-check {
  display: flex;
  align-items: center;
}
[type="checkbox"] {
  width: 18px;
  height: 18px;
}
.bottom-banner input {
  margin-left: 8px;
}
/* 商品数据 */
.ct {
  height: calc(100% - 50px);
  box-sizing: border-box;
  padding: 8px;
}
.list {
  height: calc(100% - 20px);
  overflow-y: scroll;
}
.list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #444444;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eeeeee;
}
.list img {
  width: 32%;
}
.list .infos {
  width: 63%;
  margin-left: 2%;
}
.list [type="checkbox"] {
  width: 5%;
}

.list .name {
  font-size: 15px;
  letter-spacing: 1px;
}
.list .tag {
  font-size: 12px;
  color: gray;
  margin: 4px 0 8px 0;
}

.list input {
  margin-right: 8px;
}
.list .handle-btns {
  display: flex;
  margin-bottom: 10px;
}
.list .handle-btns span {
  display: flex;
  width: 50px;
  height: 26px;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
}
.list .handle-btns .btn {
  width: 30px;
  background: #eeeeee;
}
.list .handle-btns .btn:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.list .handle-btns .btn:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

/* 工具栏 */
.tool-bar {
  text-align: right;
  color: cornflowerblue;
  letter-spacing: 2px;
  font-size: 15px;
  line-height: 20px;
}
</style>


