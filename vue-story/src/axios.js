import axios from 'axios'


const http = axios.create({
    baseURL:'/api',
    timeout: 5000,
    headers: {
    'Content-Type': 'multipart/form-data'
    },
    transformRequest: [function (data, headers) {
    if (headers['Content-type'] === 'multipart/form-data') {
        return data;
    } else {
        return JSON.stringify(data);
    }
    }]
})
// 请求拦截器
http.interceptors.request.use(config => {
  
  // 开发环境下，如果请求是 post,put,patch,则打印数据体，方便调试
  if (process.env.NODE_ENV === 'development') {
    const { method } = config;
    if (method === 'post' || method === 'put' || method === 'patch') {
        
      // console.log(config.data);
    }
  }
  
  return config;
}, error => {

  return Promise.reject(error);
});


export default http