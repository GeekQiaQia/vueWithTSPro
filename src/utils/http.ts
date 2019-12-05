/**
 * @description:
 *  1.http 请求工具类的封装；
 *  2.请求拦截器：负责将客户端token存储并且防止在请求header中；发送给服务器；
 *  3.响应拦截器：负责全局处理网络或者业务的错误/异常处理；
 *
 * */

import axios,{AxiosResponse,AxiosRequestConfig} from "axios";

// 导入路由对象；执行router.push(); 路由操作；
import router from '../router'
// 导入vuex对象；store.dispatch(); 路由操作；
import store from '../store'
// 默认携带cookie;
axios.defaults.withCredentials = true;
if(process.env.VUE_APP_CURRENTMODE === 'test'){
    axios.defaults.baseURL = "https://testbranch.geekqiaqia.com";
} else if(process.env.VUE_APP_CURRENTMODE === 'uat'){     //add
    axios.defaults.baseURL = "https://testuat.geekqiaqia.com";
}else if(process.env.VUE_APP_CURRENTMODE === 'prod'){
    axios.defaults.baseURL = "https://prod.geekqiaqia.com";
}

// 创建请求实例；
const service=axios.create({

    timeout:30000,  // 设置请求的超时时间；
    // headers:{ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
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
                    store.dispatch("UPDATE_STATE_ASYN")
                    router.push("/index");
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
