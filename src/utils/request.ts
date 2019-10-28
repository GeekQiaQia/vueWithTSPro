/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/16 11:41
 * @IDE WebStorm
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
// 导入请求配置；
import { MAINHOST, ISMOCK, conmomPrams } from '../config'
// 请求配置；
import requestConfig from '../config/requestConfig'
// 获取token方法；
import { getToken } from '../utils/common'
// 导入当前路由
import router from '@/router'
// 声明方法 Methods;
declare type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"
// 声明 Datas 接口；method:非必须参数；可选属性
declare interface Datas {
    method?: Methods
    [key: string]: any
}
// 获取baseURL;
const baseURL = process.env.NODE_ENV === 'production' ? MAINHOST : location.origin
// 获取token;
const token = getToken();
// 封装一个htttp请求类；
class HttpRequest {
    public queue: any // 请求的url集合
    // 结构初始化
    public constructor() {
        this.queue = {}
    }
    destroy(url: string) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // hide loading
        }
    }
    interceptors(instance: any, url?: string) {
        // 请求拦截
        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // show loading
            }
            if (url) {
                this.queue[url] = true
            }
            return config
        }, (error: any) => {
            console.error(error)
        })
        // 响应拦截
        instance.interceptors.response.use((res: AxiosResponse) => {
            if (url) {
                this.destroy(url)
            }
            const { data, status } = res
            console.log(ISMOCK,data);
            if (status === 200 && ISMOCK) { return data } // 如果是mock数据，直接返回
            if (status === 200 && data && data.code === 0) { return data } // 请求成功
            return requestFail(res) // 失败回调
        }, (error: any) => {
            if (url) {
                this.destroy(url)
            }
            console.error(error)
        })
    }

    async request(options: AxiosRequestConfig) {
        const instance = axios.create()
        await this.interceptors(instance, options.url)
        return instance(options)
    }
}

// 请求失败
const requestFail = (res: AxiosResponse) => {
    let errStr = '网络繁忙！'
    // token失效重新登陆
    if (res.data.code === 1000001) {
        return router.replace({ name: 'login' })
    }

    return {
        err: console.error({
            code: res.data.errcode || res.data.code,
            msg: res.data.errmsg || errStr
        })
    }
}
// 请求的本机地址+端口；
console.log(baseURL);
// 合并axios参数
const conbineOptions = (_opts: any, data: Datas, method: Methods): AxiosRequestConfig => {
    let opts = _opts
    if (typeof opts === 'string') {
        opts = { url: opts }
    }
    const _data = { ...conmomPrams, ...opts.data, ...data }
    const options = {
        method: opts.method || data.method || method || 'GET',
        url: opts.url,
        header: { 'user-token': token },
        baseURL
    }
    return options.method !== 'GET' ?
        Object.assign(options, { data: _data }) : Object.assign(options, { params: _data })
}

const HTTP = new HttpRequest()

/**
 * 抛出整个项目的api方法
 */
const Api = (() => {
    const apiObj: any = {}
    const requestList: any = requestConfig
    const fun = (opts: AxiosRequestConfig | string) => {
        return async (data = {}, method: Methods = "GET") => {
           // 暂时不考虑token;
            // if (!token) {
            //     console.error('No Token')
            //     return router.replace({ name: 'login' })
            // }
            const newOpts = conbineOptions(opts, data, method)
            const res = await HTTP.request(newOpts)
            return res
        }
    }
    Object.keys(requestConfig).forEach((key) => {
        apiObj[key] = fun(requestList[key])
    })

    return apiObj
})()

export default Api as any
