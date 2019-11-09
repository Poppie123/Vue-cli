import axios from 'axios';
import router from './router/index';


// axios 配置

const http = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  transformRequest: [function (data, headers) {
    if (headers['Content-type'] === 'application/json;charset=UTF-8') {
      return data;
    } else {
      return JSON.stringify(data);
    }
  }]
});



// 请求拦截器
http.interceptors.request.use(config => {
  
  // 开发环境下，如果请求是 post,put,patch,则打印数据体，方便调试
  if (process.env.NODE_ENV === 'development') {
    const { method } = config;
    if (method === 'post' || method === 'put' || method === 'patch') {
        
      //console.log(config.data);
    }
  }
  
  return config;
}, error => {

  return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(res => {
  
  return res.data;
}, error => {
  
  if (error && error.response) {
    console.log(error.response);
    
    switch (error.response.status) {
      // 401 token失效
      case 401:
        MessageBox.alert('身份信息已过期，请重新登陆', '提示', {
          confirmButtonText: '重新登陆',
          showClose: false,
          type: 'error',
          callback: action => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }
        });
        break;
      
      // 403 服务器拒绝访问
      case 403:
        router.push('/error/403');
        break;
      
      // 404 访问的资源不存在
      case 404:
        router.push('/error/404');
        break;
      
      // 500 服务器错误
      case 500:
        router.push('/error/500');
        break;
    }
    
    return Promise.reject(error);
  }
});

export default http;
