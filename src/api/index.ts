/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/17 14:43
 * @IDE WebStorm
 */
/**
 * @description: 所有的api请求接口都再次定义；
 * */
// 引入我们封装的 axios 请求对象；
import axios from '../utils/http'
import qs from 'qs'

export const toLogin =(params:any)=>{return axios.post("/api/rest/login",params)};
export const toRegist =(params:any)=>{return axios.post("/api/rest/regist",params)};

