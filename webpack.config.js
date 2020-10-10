const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash:8].js',
        // 每一次更新文件名都会与之前不同，就会防止浏览器缓存导致的用户信看到的页面无法随之更新的问题
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
                //  exclude: /node_modules/ 不能省略
            },
            {
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html"
        }),

    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        hot: true
    },
    // 配置后置自动补全
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        // 这个顺序也很重要 先补全js然后是jsx，最后是json
        alias: {
            '@': path.join(__dirname, './src')
        }
        // 配置路径别名
    }
}