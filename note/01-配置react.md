# 安装依赖

~~~javascript 

npm i react react-dom --save 

~~~

安装之后，就可以在js中使用

~~~JavaScript

let h1 = React.createElement('h1', null, "这是一个react例子！");
let div1 = React.createElement("div", null, "这是一个div父元素呀", h1);
ReactDom.render(div1, document.getElementById("app"));

~~~


这样就可以创建虚拟dom并且渲染到页面上

# 引入jsx语法，使用html标签创建虚拟dom

安装babel插件和jsx语法包

~~~js

cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
cnpm i babel-preset-env babel-preset-stage-0 -D
cnpm i babel-preset-react -D

~~~

在.babelrc中配置

~~~js

{
  "presets": ["env", "stage-0", "react"],
  "plugins": ["transform-runtime"]
}

~~~

添加babel-loader配置项

~~~js

module: { //要打包的第三方模块
    rules: [
      { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
}

~~~

配置完成之后就可以使用jsx语法创建虚拟dom了

# jsx 语法注意事项

* 注释
{/*  注释区域 */}

* 在为元素添加类的时候，要用 className 代替class，用 htmlFor 来代替for

* 标签必须要有关闭标签，单个标签必须要有/

* 使用jsx语法创建dom的时候，每一个节点，都要有唯一的根节点包裹

> jsx语法在编译的时候，会将<>中的语句用html来解析，遇见{}会把它当做js语法来解析

# 配置webpack省略  .jsx  后缀名

resolve extensions

# 配置webpack 设置根目录

resolve alise



