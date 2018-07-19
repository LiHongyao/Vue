
;(function (window) {
    let LHYAlertView = function (options) {
        let _this = this;
        // 设置默认属性
        this.config = {
            "id": "",
            "type": "alert",
            "title": "温馨提示",
            "message": "",
            "placeholder": "",
            "cancelTitle": "取消",
            "sureTitle": "确认",
            "cancelCallBack": function () {},
            "sureCallBack": function () {}
        };
        // 扩展默认属性
        options && this.extend(this.config, options);

        // 获取弹框依赖对象
        this.parentNode = document.getElementById(this.config.id);
        this.sureBtn    = null;
        this.cancelBtn  = null;
        this.textIpt    = null;
        // 初始化方法
        this.init();
        // 事件添加
        this.sureBtn   && this.sureBtn.addEventListener("click", function (e) {
            e = e || event;
            _this.btnClick(e);
        }, "false");
        this.cancelBtn && this.cancelBtn.addEventListener("click", function (e) {
            e = e || event;
            _this.btnClick(e);
        }, "false");
        document.body.style.cssText = "overflow: hidden;";
    };

    LHYAlertView.prototype = {
        init: function () {
            let config = this.config;
            let alertHtmls = "";
            switch (config.type) {
                case "alert": {
                    alertHtmls =
                        "<LHY-alert>" +
                        "<alert-wrap>" +
                        "<alert-title>" + config.title + "</alert-title>" +
                        "<alert-contbox>" + config.message + "</alert-contbox>" +
                        "<alert-btnbox>" +
                        "<alert-btn id='lhy-alert-sure-btn' class='alert-sure-btn'>" + config.sureTitle + "</alert-btn>" +
                        "</alert-btnbox>" +
                        "</alert-wrap>" +
                        "</LHY-alert>";
                }break;
                case "confirm": {
                    alertHtmls =
                        "<LHY-alert>" +
                        "<alert-wrap>" +
                        "<alert-title>" + config.title + "</alert-title>" +
                        "<alert-contbox>" + config.message + "</alert-contbox>" +
                        "<alert-btnbox>" +
                        "<alert-btn id='lhy-alert-canc-btn'>" + config.cancelTitle + "</alert-btn>" +
                        "<alert-btn id='lhy-alert-sure-btn'>" + config.sureTitle + "</alert-btn>" +
                        "</alert-btnbox>" +
                        "</alert-wrap>" +
                        "</LHY-alert>";
                } break;
                case "prompt": {
                    alertHtmls =
                        "<LHY-alert>" +
                        "<alert-wrap>" +
                        "<alert-title>" + config.title + "</alert-title>" +
                        "<alert-contbox>" +
                        "<input type='text' id='lhy-alert-text-ipt' class='lhy-alert-ipt' placeholder='" + config.placeholder + "'>" +
                        "</alert-contbox>" +
                        "<alert-btnbox>" +
                        "<alert-btn id='lhy-alert-canc-btn'>" + config.cancelTitle + "</alert-btn>" +
                        "<alert-btn id='lhy-alert-sure-btn'>" + config.sureTitle + "</alert-btn>" +
                        "</alert-btnbox>" +
                        "</alert-wrap>" +
                        "</LHY-alert>";
                }break;
            }
            this.parentNode.innerHTML = alertHtmls;
            this.sureBtn   = document.getElementById("lhy-alert-sure-btn");
            this.cancelBtn = document.getElementById("lhy-alert-canc-btn");
            this.textIpt   = document.getElementById("lhy-alert-text-ipt");
        },
        extend: function (oldObj, newObj) {
            for(let key in newObj) {
                oldObj[key] = newObj[key];
            }
            return oldObj;
        },
        btnClick: function (e) {

            let _this = this;
            let tarID = e.target.id;

            switch(tarID) {
                case "lhy-alert-canc-btn":{
                    _this.config.cancelCallBack();
                } break;
                case "lhy-alert-sure-btn": {
                    let text = "";
                    if(_this.config.type == "prompt") {
                        text = _this.textIpt.value;
                    }
                    _this.config.sureCallBack(text);
                }break;
            }

            _this.parentNode.innerHTML = "";
            document.body.style.cssText = "overflow: auto;";
        }
    };

    window.LHYAlertView = LHYAlertView;


})(window);























































































