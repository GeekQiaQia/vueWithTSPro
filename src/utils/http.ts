/**
 * @description:
 *  1.http 请求工具类的封装；
 *  2.请求拦截器：负责将客户端token存储并且防止在请求header中；发送给服务器；
 *  3.响应拦截器：负责全局处理网络或者业务的错误/异常处理；
 *
 * */

import axios,{AxiosResponse,AxiosRequestConfig} from "axios";

import router from "@/router/router";
// 默认携带cookie;
axios.defaults.withCredentials = true;
// 创建请求实例；
const service=axios.create({

    timeout:30000,  // 设置请求的超时时间；
    headers:{ 'Content-Type': 'application/json;charset=UTF-8' }
});

// 请求拦截器；
service.interceptors.request.use((config:AxiosRequestConfig) => {
    // 在请求之前在header中设置token；
    if(localStorage.tsToken){
        config.headers.Authorization=localStorage.tsToken;
    }
    return config;

},(error:any)=>{
    Promise.reject(error)
});

// 响应拦截器；
service.interceptors.response.use((response:AxiosResponse) => {
    return response;
    },
    (error:any)=>{
            let errMessage:string="";

        if (!(error && error.response.status)) {
            errMessage = error;
        } else {
            switch (error.response.status) {
                case 401:
                    errMessage = "登录状态失效，请重新登录"
                    //当token过期的时候，remove当前token;
                    localStorage.removeItem('tsToken');
                    // @ts-ignore
                    router.push('/login');
                    break;
                case 403:
                    errMessage = "拒绝访问"
                    break;
                case 500:
                    errMessage = "服务器内部错误"
                    break;
                case 501:
                    errMessage = "服务未实现"
                    break;
                case 502:
                    errMessage = "网关错误"
                    break;
                case 505:
                    errMessage = "http版本不受支持"
                    break;
                default:
                    errMessage = error.response.data.msg
                    break;
            }
        }
        return Promise.reject(errMessage);


    });

// 导出当前的service 对象；

export default  service;
