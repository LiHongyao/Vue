import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        // 登陆用户
        loginUser: null,
        // 记录详情展示信息
        details: {},
        // 购物车
        shoppingCart: []
    },
    mutations: {
        changeLoginUser(state, user) {
            state.loginUser = user;
        },
        changeDetails(state, info) {
            state.details = info;
        },
        changeShoppingCart(state, cart) {
            state.shoppingCart = cart;
        }
    }
})

