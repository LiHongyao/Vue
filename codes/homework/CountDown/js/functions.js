

/**
 * 本地存储：注册用户
 * @param key      存储用户集合的key
 * @param user     用户信息
 * @param callBack 存储成功回调函数
 */
function registerUser(key, user, callBack) {
    // 定义存储用户信息的集合
    let users = null;
    // 判断本地是否已经存在该用户数据集合
    if(localStorage[key]) {
        // 存在，根据本地用户数据集合来初始化users
        users = JSON.parse(localStorage[key]);
    }else {
        // 不存在，创建一个空数组
        users = [];
    }
    // 添加用户
    users.push(user);
    // 更新本地数据
    localStorage[key] = JSON.stringify(users);
    // 数据存储成功之后调用回调函数
    callBack && callBack();
}


/**
 * 本地存储：判断用户是否存在
 * @param  key      存储用户信息在本地的key
 * @param  gist     判断用户是否存在的依据
 * @param  value    用户输入的值
 * @return isExists 返回查询结果
 */
function determineUserIsExists(key, gist, value) {
    // 记录用户是否存在
    let isExists = false;
    let users    = JSON.parse(localStorage.getItem(key))
    if(users) {
        for(let i = 0; i < users.length; i++) {
            if(users[i][gist] == value) {
                isExists = true;
                break;
            }
        }
    }
    return isExists;
}


/**
 * 判断是否登录成功
 * @param key      存储用户信息在本地的key
 * @param gists    判断依据({账号, 密码})
 * @param response 响应结果(返回状态码和登陆的用户)
 * 0   用户不存在
 * 1   账号或密码密码为空
 * 2   账号或密码错误
 * 200 登录成功
 */

function login(key, gists, response) {
    // 1.默认处理
    response = response || function () {}

    // 2.获取账号密码key
    let acctKey = Object.keys(gists)[0];
    let pswKey  = Object.keys(gists)[1];

    // 3.判断账号密码是否为空
    if(!gists[acctKey] || !gists[pswKey]) { response(1); return; }


    // 4.判断本地数据用户集合是否存在(如果不存在，则直接提示用户不存在)
    if(!localStorage[key]) {
        response(0); return;
    }else {
        // 如果存在，则先判断用户数据集合中是否存在用户，再判断是否登陆成功
        let users = JSON.parse(localStorage[key]);
        let user = null;
        // 判断用户是否存在，如果用户存在则记录该用户
        for(let i = 0; i < users.length; i++) {
            if(users[i][acctKey] == gists[acctKey]) {
                user = users[i];
                // 跳出循环
                break;
            }
        }
        if(user == null) {
            // 用户不存在
            response(0);
        }else if((user[acctKey] == gists[acctKey]) &&  (user[pswKey] == gists[pswKey])){
            response(200, user);
        }else {
            response(2);
        }
    }
}











