/*
**
* **
* ***
* dhb   2018-5  webpack 4.0 +
* ***
 */
//当前路径

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //选择的模式告诉webpack使用其内置的优化
    // "production" | "development" | "none"
    mode : "development",
    //入口文件
    entry: {
        a: './src/a.js',
        b: './src/b.js',
        c: './src/c.js'
    },
    //webpakc如何输出的目标路径
    output: {
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        path : path.resolve(__dirname,"dist"),
        //输出文件的名字
        filename : 'js/[name]-[chunkhash].js'
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'a.html',
            inject:'head',
            chunks: ['a']

        }) ,
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'b.html',
            inject:'head',
            chunks: ['b']

        }) ,
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'c.html',
            inject:'head',
            chunks: ['c']

        }) ,
    ]

}