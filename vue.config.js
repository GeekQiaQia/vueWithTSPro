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
    devServer: {
        open:true,
        host:'localhost',
        port: 8080, // 端口
        https:false,
        hotOnly:false,
        // 跨域设置
        proxy: {
         // 配置跨域

            '/api':{
                //target:'https://www.easy-mock.com', // 设置代理
               // target:'https://vuets-api.herokuapp.com/api/',
                target:'http://10.10.29.26:8882',
                ws:true,
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}
