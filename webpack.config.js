const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: {
    //     app: './src/index.js',
    //     // print: './src/print.js'
    // },
    entry: {
        main: './src/index.js',
        vendor: [
            'lodash'
        ]
    },
    output: {
        // filename: `[name].bundle.js`,
        filename: '[name].[chunkhash].js',
        // 每一次更新文件名都会与之前不同，就会防止浏览器缓存导致的用户信看到的页面无法随之更新的问题
        path: path.resolve(__dirname, "dist")
    },
    mode: "production",
    // 从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"。
    /**
     * mode :
     * production:生产环境
     * development：开发环境
     * 
     */
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
        new webpack.NamedModulesPlugin(),
        // 我们还添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖。
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
        /**
                 * CommonsChunkPlugin 可以用于将模块分离到单独的文件中
                 * CommonsChunkPlugin 能够在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来。
                 * 通过指定 entry 配置中未用到的名称， 此插件会自动将我们需要的内容提取到单独的包中
    
                 * main bundle 会随着自身的新增内容的修改，而发生变化。
                  vendor bundle 会随着自身的 module.id 的修改，而发生变化。
                  manifest bundle 会因为当前包含一个新模块的引用，而发生变化。        
                 *   */

    ],
    devtool: 'inline-source-map',
    // 择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    // 一般开发时会选择这种设置，打包上线后一般会选择none
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        // https: true,
        hot: true
    },
    /**安装后webpack-dev-server  进行配置
     * contentBase：告诉开发服务器(dev server)，在哪里查找文件
     *  port: 设置端口号
     * host:指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如  "0.0.0.0"
     * hot: true 启用 webpack 的模块热替换特性：
     * https: true 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务
     * lazy: true 当启用 lazy 时，dev-server 只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”。
     */
}