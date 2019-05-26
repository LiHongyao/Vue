<template>
    <div class="page login">
        <img class="logo" src="https://ccdn.goodq.top/caches/26c4e5f54723647c72b958e3ab61c375/aHR0cDovLzVjYWM2OGMwYjFkZTcudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy9kMDNhNmY1MTM3NDE1NWYwYzg1NjYwZDc4YzM1OTU3Ni5wbmc_p_p100_p_3D.png" alt="loadding err">
        <form name="myForm" class="form">
            <div class="item">
                <font-awesome-icon class="icon" :icon="['fas', 'user']"></font-awesome-icon>
                <input type="text" v-model="username" placeholder="请输入账号">
            </div>
            <div class="item">
                <font-awesome-icon class="icon" :icon="['fas', 'lock']"></font-awesome-icon>
                <input type="password" v-model="password" placeholder="请输入密码">
            </div>
            <div class="login-btn" @click="login">登陆</div>
        </form>
    </div>
</template>

<script>
import Qs from "qs";
export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods:{
        login() {
            this.$axios.post("/login", Qs.stringify({
                username: this.username,
                password: this.password
            })).then(res => {
                if(res.data.ok) {
                    // 更新登陆状态
                    this.$store.commit("changeLoginUser", res.data.infos);
                    // 返回上一页
                    this.$router.push("/");
                }else {
                    console.log(res.data.errMsg)
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
.page {
    box-sizing: border-box;
    padding: 8px;
}
.logo {
    display: block;
    width: 60%;
    margin: 35px auto;
}

[name="myForm"] .item {
    height: 35px;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 8px;
    margin: 12px 0;
}
[name="myForm"] input {
    outline: none;
    width: 80%;
    height: 100%;
    font-size: 15px;
    margin-left: 8px;
    border: none;
}

.login-btn {
    width: 100%;
    background: cornflowerblue;
    color: #ffffff;
    letter-spacing: 2px;
    font-size: 16px;
    text-align: center;
    line-height: 45px;
    margin-top: 50px;
    border-radius: 23px;
}


</style>