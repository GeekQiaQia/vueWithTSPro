/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/17 14:43
 * @IDE WebStorm
 */
// 引入我们封装的axios 请求；
import axios from '../utils/http'
import qs from 'qs'

export const toLogin =(params:any)=>{return axios.post("/api/rest/login",params)}
// export const getData = () => {
//     return Api.getData()
// }
