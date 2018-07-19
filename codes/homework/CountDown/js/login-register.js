

let data = {
    isShowLoginPage: true,
    username: "",
    password: "",
    user: {},
    checked: false
};

let vm = new Vue({
    el: "#container",
    data: data,
    mounted: function() {
        let user = JSON.parse(localStorage.getItem("loginUser"));
        if(user) {
            this.username = user.username;
            this.password = user.password;
            this.checked  = true;
        }
    },
    // 监听
    watch: {
        isShowLoginPage: function(status) {
            document.title = status ? "PROJ - 登陆" : "PROJ - 注册";
        }
    },
    // 计算
    computed: {
        getUser: function() {
            return {username: this.username, password: this.password};
        }
    },
    // 方法
    methods: {
        handleLoginBtnClick: function() {
            switch(this.isShowLoginPage) {
                case true: {
                    this.login();
                }break;
                case false: {
                    this.register();
                }break; 
            }
        },
        tabPages: function() {
            this.isShowLoginPage = !this.isShowLoginPage;
        },
        saveUserInfo: function(user) {
            localStorage.setItem("loginUser", JSON.stringify(user));
        },
        removeUserInfo: function() {
            localStorage.removeItem("loginUser");
        },
        register: function() {
            let user = this.getUser;
            if(!user.username || !user.password) {
                new LHYAlertView({
                    "id": "alert-box",
                    "message": "请完善注册信息！"
                });
            }else if(determineUserIsExists("users", "username", user.username)){
                new LHYAlertView({
                    "id": "alert-box",
                    "message": "用户已存在！"
                });
            }else {
                registerUser("users", user, function () {
                    new LHYAlertView({
                        "id": "alert-box",
                        "message": "注册成功！",
                        "sureCallBack" : function () {
                            sessionStorage.setItem("loginUser", JSON.stringify(user));
                            location.href = "../index.html";
                        }
                    });
                });
            }
        },
        login: function() {
            let  user = this.getUser;
            let _this = this;
            login("users", user, function (status) {
                let msg = null,
                    isLogin = false;
                switch (status) {
                    case 0: {
                       msg = "用户不存在！";
                    } break;
                    case 1: {
                       msg = "请输入账号或密码！";
                    } break;
                    case 2: {
                       msg = "账号或密码错误，请重新输入！";
                    } break;
                    case 200: {
                       msg = "恭喜您，登陆成功！";
                       isLogin = true;
                    } break;
                }
                new LHYAlertView({
                    "id": "alert-box",
                    "message": msg,
                    "sureCallBack": function () {
                        if(isLogin) {
                            _this.checked ? _this.saveUserInfo(user) : _this.removeUserInfo();
                            sessionStorage.setItem("loginUser", JSON.stringify(user));
                            location.href = "../index.html";
                        }
                    }
                })
            });
        }   
    }
});