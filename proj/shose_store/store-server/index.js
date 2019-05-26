const htpp = require("http");
const url  = require("url");
const fs   = require("fs");
const querystring = require("querystring");

htpp.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHeader(200, { "Content-Type": "text/plain;charset=utf-8;" })
    if (req.url == "/favicon.ico") return;
    let obj = url.parse(req.url);
    if(req.method == "GET") {
        fs.readFile("./json/goods.json", (err, data) => {
            if(err) {
                res.end("No such file in server.")
            }else {
                // buffer -> json
                data = data.toString();
                // json -> obj
                data = JSON.parse(data);
                switch(obj.pathname) {
                    case "/goods": {
                        res.end(JSON.stringify(data["goods"]));
                    }break;
                    case "/banner": {
                        res.end(JSON.stringify(data["bannerImgs"]));
                    }break;
                    case "/search": {
                        let arr = [];
                        data["goods"].forEach(obj => {
                            arr.push(...obj["contentlist"]);
                        });
                        res.end(JSON.stringify(arr));
                    }
                }
            }
        })
    }else { // POST
        let query = "";
        req.on("data", (data) => {
            query += data;
        })
        req.on("end", () => {
            query = querystring.parse(query);
            switch(obj.pathname) {
                case "/login": {
                    fs.readFile("./json/user.json", (err, data) => {
                        if(err) {
                            console.log(err);
                        }else {
                            let {username, password} = query;
                            data = data.toString();
                            data = JSON.parse(data);
                            if(!username || !password) {
                                res.end(JSON.stringify({
                                    ok: false,
                                    errMsg: "账号或密码不存在"
                                }));
                            }else if(username != "admin") {
                                res.end(JSON.stringify({
                                    ok: false,
                                    errMsg: "用户名不存在"
                                }));
                            }else if(username == data.username && password == data.password) {
                                res.end(JSON.stringify({
                                    ok: true,
                                    infos: data
                                }));
                            }else {
                                res.end(JSON.stringify({
                                    ok: false,
                                    errMsg: "密码错误"
                                }));
                            }
                        }
                    });
                }break;
            }
        });
    }

}).listen(8081, "127.0.0.1");
console.log("server running at http://127.0.0.1:8081")
