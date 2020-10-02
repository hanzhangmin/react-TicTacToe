export function add(x, y) {
    console.log('得到两个数之间的和');

    return x + y
}
export function del(x, y) {
    console.log("得到两个数之间的差");

    return x - y
}
// tree shaking，就是讲没有被引用的代码不进行构建，例如add()没有被引用，就不会被编译进app.bundle.js中
/*
为了学会使用 tree shaking，你必须……

使用 ES2015 模块语法（即 import 和 export）。
在项目 package.json 文件中，添加一个 "sideEffects" 入口。
引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。
*/