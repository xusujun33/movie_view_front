module.exports = {
    devServer: {
        proxy: { // 为天气接口配置代理，解决跨域
            '/api': {
                'target': 'http://api.qingyunke.com/api.php', //天气接口地址
                'secure': false, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/api': '/' // 以/proxy/为开头的改写为''
                }
            },
            '/movieApi': {
                'target': 'http://127.0.0.1:3000/', //天气接口地址
                'secure': false, // false为http访问，true为https访问
                'changeOrigin': true, // 跨域访问设置，true代表跨域
                'pathRewrite': { // 路径改写规则
                    '^/movieApi': '/' // 以/proxy/为开头的改写为''
                }
            }
        }
    }
}