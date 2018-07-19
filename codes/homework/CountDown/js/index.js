let data = {
    day:     "...",
    hours:   "...",
    minutes: "...",
    seconds: "..."
};

let vm = new Vue({
    el: "#container",
    data: data,
    mounted: function() {
         // 判断用户是否登陆，如果没有登陆，则跳转至登陆页面
        if(!sessionStorage.getItem("loginUser")) {
            location.href = "./pages/login-register.html";
        }

        let targetDate  = new Date("October 1, 2018"),
            currentDate = null,
            minus  = 0,
            _this  = this;
        let t = setInterval(function () {
            currentDate = new Date();
            minus = targetDate - currentDate;
            if(minus < 0) {
                clearInterval(t);
                return;
            }
            let day     = Math.floor(minus / 1000 / 60 / 60 / 24),
                hours   = Math.floor(minus / 1000 / 60 / 60 % 24),
                minutes = Math.floor(minus / 1000 / 60 % 60),
                seconds = Math.floor(minus / 1000 % 60);
            _this.day     = day    <  10 ? "0" + day     : day;
            _this.hours   = hours   < 10 ? "0" + hours   : hours;
            _this.minutes = minutes < 10 ? "0" + minutes : minutes;
            _this.seconds = seconds < 10 ? "0" + seconds : seconds;
        }, 1000);
        //  当刷新/关闭当前窗口的时候清除临时存储的用户信息
        window.onbeforeunload = function() {
            sessionStorage.removeItem("loginUser");
        }
    }
});





