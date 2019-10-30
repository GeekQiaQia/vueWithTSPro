/**
 * @Description:
 * @author GeekQiaQia
 * @date 2019/10/17 11:35
 * @IDE WebStorm
 */
const path = require('path')

const resolve = dir => {
    return path.join(__dirname, dir)
}

// 线上打包路径，请根据项目实际线上情况
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
    publicPath: BASE_URL,
    outputDir: 'dist', // 打包生成的生产环境构建文件的目录
    assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
    indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
    pages: undefined, // 构建多页
    productionSourceMap: false, // 开启 生产环境的 source map?
    chainWebpack: config => {
        // 配置路径别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
    css: {
        modules: false, // 启用 CSS modules
        extract: true, // 是否使用css分离插件
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {} // css预设器配置项
    },
    // 开启反向代理
    // 通过反向代理解决跨域设置
    /**
     * @description:
     *          讲解举例：用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替；
     *          比如：需要请求接口：https://www.easy-mock.com/api/rest/login ；只需要调用/api/rest/login
     *                axios.post("/api/rest/login",params)
     * */
    devServer: {
        open:true,
        host:'localhost',
        port: 8080, // 端口
        https:false,
        hotOnly:false,
        // 配置跨域
        proxy: {
            '/api':{
                //target:'https://www.easy-mock.com', // 设置代理
               // target:'https://vuets-api.herokuapp.com/api/',
                target:'http://10.10.29.26:8882',  // 代理的接口域名以及端口号；
                ws:true,   // 支持ws协议；websocket的缩写；
                changeOrigin:true,// 是否跨域
                pathRewrite:{     // 路径替换
                    '^/api':''
                }
            }
        }
    }
}
