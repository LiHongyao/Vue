# ajax 请求方式：
1. XMLHttpRequest
2. $.ajax -> 
3. axios  -> 


# axios 
axios.get(url, options).then().catch()
axios.post(url, params).then().catch()

# axios 默认接收 form-data 格式
- urlencode -> form-data
  1. 引入 qs 库
  2. 将请求参数包裹在 qs.stringify()