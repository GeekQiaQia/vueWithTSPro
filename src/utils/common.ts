/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/17 10:59
 * @IDE WebStorm
 */
// @ts-ignore
import Cookies from "js-cookie"
import { cookieExpires } from '@/config' // cookie保存的天数
/**
 * @Author: GeekQiaQia
 * @msg: 存取token
 * @param {string} token
 */


export const TOKEN_KEY: string = 'token';
export const setToken = (token: string) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) {
        return token
    } else {
        return false
    }
}
