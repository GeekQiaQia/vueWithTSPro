/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/16 11:38
 * @IDE WebStorm
 */

/**
 * 线上环境
 */
export const ONLINEHOST: string = 'http://10.10.29.26:8882'

/**
 * 测试环境
 */
export const QAHOST: string = 'http://10.10.29.26:8882'

/**
 * 线上mock
 */
export const MOCKHOST: string = 'http://xxx.com'

/**
 * 是否mock
 */
export const ISMOCK: boolean = false

/**
 * 当前的host  ONLINEHOST | QAHOST | MOCKHOST
 */
export const MAINHOST: string = QAHOST;

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {}

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1
