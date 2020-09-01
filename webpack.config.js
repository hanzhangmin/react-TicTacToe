const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: `[name].bundle.js`,
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            }
        ]
    },
    plugins: [

        new CleanWebpackPlugin({
            dry: true
                // dry:控制文件的删除，默认false
                // verbose ：当dry为true 时，总是会将内容输出到控制台
                // cleanStaleWebpackAssets:自动删除所有未使用的资源
                // CleanWebpackPlugin只接受选项对象
        }),
        new HtmlWebpackPlugin({
            title: 'output management',
            minify: {
                collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            },
        }),
        // HtmlWebpackPlugin.template:指定生成html的模板

    ]
}