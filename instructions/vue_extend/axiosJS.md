# 安装
$ npm install axios
<!-- 使用 npm: -->
$ bower install axios
<!-- 使用 bower: -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<!-- 使用 cdn: -->

# API
Axios.defaults.baseURL = String;
<!-- 设置基础请求路径 -->
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
<!-- 设置post请求头 -->
Axios.defaults.withCredentials = Boolean
<!-- 携带cookie -->
Axios.defaults.headers[name] = value;
<!-- 携带数据 -->

Axios.interceptors.request.use(params => {
  if (params.method == 'post') {
    let str = '';
    for (let key in params.data) {
      str += key + '=' + params.data[key] + '&'
    }

    str = str.slice(0, -1);

    params.data = str;
  }
  <!-- 对于post请求,需要将参数进行序列化 -->

  return params;

})


